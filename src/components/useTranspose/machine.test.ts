import { createActor } from 'xstate';

import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';

import { transposeMachine } from './machine';

describe('transposeMachine', () => {
  describe('initial context', () => {
    it('should default to C note and piano instrument1 with no input', () => {
      const actor = createActor(transposeMachine, { input: {} });
      actor.start();
      const { context } = actor.getSnapshot();

      expect(context.originalNote.note).toBe('c');
      expect(context.originalNote.position).toBe(0);
      expect(context.instrument1?.name).toBe('piano');
      expect(context.instrument2).toBeUndefined();
      expect(context.transposeFactor).toBe(0);
      expect(context.transposedNote).toBeUndefined();

      actor.stop();
    });

    it('should accept initial input for note, instrument1, and instrument2', () => {
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[1], // G
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();
      const { context } = actor.getSnapshot();

      expect(context.originalNote.note).toBe('g');
      expect(context.instrument1?.name).toBe('piano');
      expect(context.instrument2?.name).toBe('clarinet');
      expect(context.transposeFactor).toBe(2); // clarinet(2) - piano(0)
      expect(context.transposedNote).toBeDefined();

      actor.stop();
    });

    it('should calculate correct transposed note on initialization', () => {
      // C on piano to clarinet should give D (position 2)
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[0], // C (position 0)
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();
      const { context } = actor.getSnapshot();

      expect(context.transposedNote?.note).toBe('d');
      expect(context.transposedNote?.position).toBe(2);

      actor.stop();
    });
  });

  describe('SET_ORIGINAL_NOTE event', () => {
    it('should update originalNote and recalculate transposedNote', () => {
      const actor = createActor(transposeMachine, {
        input: {
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();

      actor.send({ type: 'SET_ORIGINAL_NOTE', note: notes[1] }); // G
      const { context } = actor.getSnapshot();

      expect(context.originalNote.note).toBe('g');
      expect(context.transposedNote).toBeDefined();
      // G (position 1) + factor 2 = position 3 = A
      expect(context.transposedNote?.note).toBe('a');

      actor.stop();
    });

    it('should handle note change without instrument2', () => {
      const actor = createActor(transposeMachine, {
        input: { instrument1: instruments.piano },
      });
      actor.start();

      actor.send({ type: 'SET_ORIGINAL_NOTE', note: notes[4] }); // E
      const { context } = actor.getSnapshot();

      expect(context.originalNote.note).toBe('e');
      expect(context.transposedNote).toBeUndefined();

      actor.stop();
    });
  });

  describe('SET_INSTRUMENT1 event', () => {
    it('should update instrument1 and recalculate transposeFactor', () => {
      const actor = createActor(transposeMachine, {
        input: {
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();

      // Change instrument1 to alto sax (factor 3)
      actor.send({ type: 'SET_INSTRUMENT1', instrument: instruments.altoSax });
      const { context } = actor.getSnapshot();

      expect(context.instrument1?.name).toBe('alto sax');
      // clarinet(2) - altoSax(3) = -1
      expect(context.transposeFactor).toBe(-1);

      actor.stop();
    });
  });

  describe('SET_INSTRUMENT2 event', () => {
    it('should set instrument2 and trigger transposition', () => {
      const actor = createActor(transposeMachine, {
        input: { instrument1: instruments.piano },
      });
      actor.start();

      expect(actor.getSnapshot().context.transposedNote).toBeUndefined();

      actor.send({
        type: 'SET_INSTRUMENT2',
        instrument: instruments.clarinet,
      });
      const { context } = actor.getSnapshot();

      expect(context.instrument2?.name).toBe('clarinet');
      expect(context.transposeFactor).toBe(2);
      expect(context.transposedNote).toBeDefined();

      actor.stop();
    });

    it('should update when changing instrument2', () => {
      const actor = createActor(transposeMachine, {
        input: {
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();

      actor.send({
        type: 'SET_INSTRUMENT2',
        instrument: instruments.altoSax,
      });
      const { context } = actor.getSnapshot();

      expect(context.instrument2?.name).toBe('alto sax');
      expect(context.transposeFactor).toBe(3); // altoSax(3) - piano(0)

      actor.stop();
    });
  });

  describe('CLEAR_INSTRUMENT1 event', () => {
    it('should clear instrument1 and recalculate', () => {
      const actor = createActor(transposeMachine, {
        input: {
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();

      actor.send({ type: 'CLEAR_INSTRUMENT1' });
      const { context } = actor.getSnapshot();

      expect(context.instrument1).toBeUndefined();
      // factor = clarinet(2) - undefined(0) = 2
      expect(context.transposeFactor).toBe(2);

      actor.stop();
    });
  });

  describe('CLEAR_INSTRUMENT2 event', () => {
    it('should clear instrument2 and set transposedNote to undefined', () => {
      const actor = createActor(transposeMachine, {
        input: {
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();

      expect(actor.getSnapshot().context.transposedNote).toBeDefined();

      actor.send({ type: 'CLEAR_INSTRUMENT2' });
      const { context } = actor.getSnapshot();

      expect(context.instrument2).toBeUndefined();
      expect(context.transposedNote).toBeUndefined();
      expect(context.transposeFactor).toBe(0);

      actor.stop();
    });
  });

  describe('SET_CUSTOM_NOTATION event', () => {
    it('should default customNotation to empty string', () => {
      const actor = createActor(transposeMachine, { input: {} });
      actor.start();

      expect(actor.getSnapshot().context.customNotation).toBe('');

      actor.stop();
    });

    it('should accept initial customNotation input', () => {
      const actor = createActor(transposeMachine, {
        input: { customNotation: 'L:4/4\nK:C\nC D E F |' },
      });
      actor.start();

      expect(actor.getSnapshot().context.customNotation).toBe(
        'L:4/4\nK:C\nC D E F |',
      );

      actor.stop();
    });

    it('should update customNotation via SET_CUSTOM_NOTATION event', () => {
      const actor = createActor(transposeMachine, { input: {} });
      actor.start();

      actor.send({
        type: 'SET_CUSTOM_NOTATION',
        value: 'K:G\nG A B c |',
      });

      expect(actor.getSnapshot().context.customNotation).toBe(
        'K:G\nG A B c |',
      );

      actor.stop();
    });
  });

  describe('transposition correctness', () => {
    it('should correctly transpose C from piano to Bb clarinet (D)', () => {
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[0], // C
          instrument1: instruments.piano,
          instrument2: instruments.clarinet,
        },
      });
      actor.start();

      expect(actor.getSnapshot().context.transposedNote?.note).toBe('d');

      actor.stop();
    });

    it('should correctly transpose C from piano to Eb alto sax (A)', () => {
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[0], // C
          instrument1: instruments.piano,
          instrument2: instruments.altoSax,
        },
      });
      actor.start();

      expect(actor.getSnapshot().context.transposedNote?.note).toBe('a');

      actor.stop();
    });

    it('should correctly transpose C from piano to F french horn (G)', () => {
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[0], // C
          instrument1: instruments.piano,
          instrument2: instruments.frenchHorn,
        },
      });
      actor.start();

      expect(actor.getSnapshot().context.transposedNote?.note).toBe('g');

      actor.stop();
    });

    it('should show no transposition for same-key instruments', () => {
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[0], // C
          instrument1: instruments.piano,
          instrument2: instruments.flute,
        },
      });
      actor.start();
      const { context } = actor.getSnapshot();

      expect(context.transposeFactor).toBe(0);
      expect(context.transposedNote?.note).toBe('c');

      actor.stop();
    });

    it('should correctly transpose between two non-concert-pitch instruments', () => {
      // Clarinet (Bb, factor 2) to alto sax (Eb, factor 3)
      const actor = createActor(transposeMachine, {
        input: {
          note: notes[0], // C
          instrument1: instruments.clarinet,
          instrument2: instruments.altoSax,
        },
      });
      actor.start();
      const { context } = actor.getSnapshot();

      // factor = 3 - 2 = 1
      expect(context.transposeFactor).toBe(1);

      actor.stop();
    });
  });
});
