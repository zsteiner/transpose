// Fifths from a mode's own tonic to the tonic of its relative major.
const modeOffsets: Record<string, number> = {
  aeo: -3,
  dor: -2,
  ion: 0,
  loc: -5,
  lyd: 1,
  m: -3,
  maj: 0,
  min: -3,
  mix: -1,
  phr: -4,
};

// Naturals, as fifths from C.
const rootFifths: Record<string, number> = {
  A: 3,
  B: 5,
  C: 0,
  D: 2,
  E: 4,
  F: -1,
  G: 1,
};

// The major keys ABCJS recognizes, as fifths from C. Adding a flat to a root
// moves it seven fifths down the circle, and adding a sharp seven fifths up,
// so this covers every spelling a mode can resolve to.
const majorKeys: Record<number, string> = {
  '-1': 'F',
  '-2': 'Bb',
  '-3': 'Eb',
  '-4': 'Ab',
  '-5': 'Db',
  '-6': 'Gb',
  '-7': 'Cb',
  0: 'C',
  1: 'G',
  2: 'D',
  3: 'A',
  4: 'E',
  5: 'B',
  6: 'F#',
  7: 'C#',
};

const FIFTHS_PER_ACCIDENTAL = 7;

/**
 * Converts an ABC key such as `CPhr` to its relative major (`Ab`).
 *
 * A mode and its relative major share the same key signature, so the two
 * render identically — but ABCJS can transpose the major spelling in cases
 * where it fails on the modal one. See `withRelativeMajorKey`.
 *
 * @returns the relative major, or null if the key isn't a recognized mode.
 *
 * @example
 * relativeMajorKey('CPhr') // 'Ab'
 * relativeMajorKey('CLoc') // 'Db'
 */
export function relativeMajorKey(key: string): string | null {
  const match = key.match(/^([A-G])([b#]?)(.*)$/);

  if (!match) {
    return null;
  }

  const [, root, accidental, mode] = match;
  const normalizedMode = mode.trim().toLowerCase();
  const offset = normalizedMode
    ? (modeOffsets[normalizedMode] ??
      modeOffsets[normalizedMode.slice(0, 3)])
    : 0;

  if (offset === undefined) {
    return null;
  }

  let fifths = rootFifths[root] + offset;

  if (accidental === 'b') {
    fifths -= FIFTHS_PER_ACCIDENTAL;
  }

  if (accidental === '#') {
    fifths += FIFTHS_PER_ACCIDENTAL;
  }

  return majorKeys[fifths] ?? null;
}

/**
 * Rewrites a tune's `K:` header to the relative major of its key.
 *
 * @returns the rewritten notation, or null if the key can't be converted.
 */
export function withRelativeMajorKey(notation: string): string | null {
  const match = notation.match(/^K:(.+)$/m);

  if (!match) {
    return null;
  }

  const relative = relativeMajorKey(match[1].trim());

  return relative ? notation.replace(/^K:.+$/m, `K:${relative}`) : null;
}

/**
 * Renders a tune, retrying with its relative major if ABCJS can't transpose
 * the key as written.
 *
 * ABCJS throws while transposing certain modal keys: it spells the target root
 * as a flat (`DbPhr`, `AbPhr`, `EbLoc`) but its own tables only define the
 * sharp spellings, so the key signature lookup returns null and it crashes.
 * A mode and its relative major share a key signature and transpose to the
 * same pitches, so the retry renders the same notation without the bug.
 */
export function withModalKeyFallback<T>(
  notation: string,
  render: (notation: string) => T,
): T {
  try {
    return render(notation);
  } catch (error) {
    const fallback = withRelativeMajorKey(notation);

    if (!fallback) {
      throw error;
    }

    return render(fallback);
  }
}
