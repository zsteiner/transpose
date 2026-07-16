import abcjs from 'abcjs';

import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';
import { scales } from '@/constants/scales';

import { circleFifthsPositionToSemitones } from './circleFifthsPositionToSemitones';
import {
  relativeMajorKey,
  withModalKeyFallback,
  withRelativeMajorKey,
} from './relativeMajorKey';
import writeNotation from './writeNotation';

// Mirrors the string Notation hands to ABCJS.
const buildNotation = (key: string, scaleNotes: string[]) =>
  `L:4/4\nK:${key}\n${writeNotation(scaleNotes)}`;

// renderAbc throws from its parser, so parseOnly reproduces the crash without
// needing a DOM.
const parse = (notation: string, visualTranspose: number) =>
  abcjs.parseOnly(notation, { visualTranspose });

// The accidentals ABCJS draws at the start of the staff.
const keySignature = (notation: string, visualTranspose: number) =>
  parse(notation, visualTranspose)[0]?.lines[0]?.staff?.[0]?.key?.accidentals?.map(
    ({ acc, note }: { acc: string; note: string }) => `${acc}${note}`,
  );

// Every transposition the app can ask for: one per circle of fifths position.
const allTransposes = notes.map(({ position }) =>
  circleFifthsPositionToSemitones(position),
);

describe('relativeMajorKey', () => {
  it('should convert each mode to the major key it shares a signature with', () => {
    expect(relativeMajorKey('CPhr')).toBe('Ab');
    expect(relativeMajorKey('CLoc')).toBe('Db');
    expect(relativeMajorKey('CDor')).toBe('Bb');
    expect(relativeMajorKey('CLyd')).toBe('G');
    expect(relativeMajorKey('CMix')).toBe('F');
    expect(relativeMajorKey('Cm')).toBe('Eb');
  });

  it('should return a major key unchanged', () => {
    expect(relativeMajorKey('C')).toBe('C');
  });

  it('should account for an accidental in the root', () => {
    // Spellings ABCJS agrees with: it files EbPhr under Cb, not B.
    expect(relativeMajorKey('EbPhr')).toBe('Cb');
    expect(relativeMajorKey('F#Dor')).toBe('E');
  });

  it('should return null for a key it does not recognize', () => {
    expect(relativeMajorKey('Hm')).toBeNull();
    expect(relativeMajorKey('CBogus')).toBeNull();
  });
});

describe('withRelativeMajorKey', () => {
  it('should rewrite only the K: header', () => {
    expect(withRelativeMajorKey('L:4/4\nK:CPhr\nC D E')).toBe(
      'L:4/4\nK:Ab\nC D E',
    );
  });

  it('should return null when there is no key to convert', () => {
    expect(withRelativeMajorKey('L:4/4\nC D E')).toBeNull();
  });
});

describe('ABCJS modal transposition bug', () => {
  // Characterization test for the upstream bug this workaround exists for:
  // ABCJS spells the transposed root as a flat ("DbPhr") but only defines the
  // sharp spelling, so its key signature lookup returns null and it throws.
  // When this stops throwing, ABCJS has fixed it and the fallback can go.
  it('should still throw when transposing a modal key ABCJS cannot spell', () => {
    const notation = buildNotation('CPhr', scales.phyrygian.notes);

    expect(() => parse(notation, 1)).toThrow();
  });

  it('should not throw once the key is swapped for its relative major', () => {
    const notation = buildNotation('CPhr', scales.phyrygian.notes);
    const fallback = withRelativeMajorKey(notation) as string;

    expect(() => parse(fallback, 1)).not.toThrow();
  });

  it('should render the same key signature as the mode it replaces', () => {
    const notation = buildNotation('CPhr', scales.phyrygian.notes);
    const fallback = withRelativeMajorKey(notation) as string;

    expect(keySignature(fallback, 0)).toEqual(keySignature(notation, 0));
  });
});

describe('withModalKeyFallback', () => {
  it('should render a transposition ABCJS handles without a fallback', () => {
    const notation = buildNotation('CPhr', scales.phyrygian.notes);
    const rendered: string[] = [];

    withModalKeyFallback(notation, (abc) => {
      rendered.push(abc);

      return parse(abc, 2);
    });

    expect(rendered).toEqual([notation]);
  });

  it('should retry with the relative major when ABCJS throws', () => {
    const notation = buildNotation('CPhr', scales.phyrygian.notes);
    const rendered: string[] = [];

    withModalKeyFallback(notation, (abc) => {
      rendered.push(abc);

      return parse(abc, 1);
    });

    expect(rendered).toEqual([notation, withRelativeMajorKey(notation)]);
  });

  it('should rethrow when the key cannot be converted', () => {
    expect(() =>
      withModalKeyFallback('L:4/4\nC D E', () => {
        throw new Error('unrelated failure');
      }),
    ).toThrow('unrelated failure');
  });
});

describe('scale notation', () => {
  // The reported crash: piano + alto sax, switching the scale to phrygian.
  it('should render the phrygian scale from piano to alto sax for every note', () => {
    const factor =
      instruments.altoSax.transposeFactor - instruments.piano.transposeFactor;
    const notation = buildNotation('CPhr', scales.phyrygian.notes);

    const failures = notes.filter(({ position }) => {
      const visualTranspose = circleFifthsPositionToSemitones(
        (position + factor) % 12,
      );

      try {
        withModalKeyFallback(notation, (abc) => parse(abc, visualTranspose));

        return false;
      } catch {
        return true;
      }
    });

    expect(failures.map(({ note }) => note)).toEqual([]);
  });

  it('should render every scale at every transposition', () => {
    const failures: string[] = [];

    Object.entries(scales).forEach(([name, { key, notes: scaleNotes }]) => {
      const notation = buildNotation(key, scaleNotes);

      allTransposes.forEach((visualTranspose) => {
        try {
          withModalKeyFallback(notation, (abc) => parse(abc, visualTranspose));
        } catch {
          failures.push(`${name} (${key}) at ${visualTranspose} semitones`);
        }
      });
    });

    expect(failures).toEqual([]);
  });
});
