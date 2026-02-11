import { getNoteByIdentifier } from '@/constants/notes';
import { Note } from '@/types';

/**
 * Forward map: app scale value → ABC mode suffix for K: line.
 *
 * ABC v2.1 only supports 7 standard modes (Ion, Aeo, Dor, Phr, Lyd, Mix, Loc).
 * Non-standard scales map to the standard mode whose key signature requires
 * the fewest explicit accidentals:
 *
 * - gypsy (Phrygian Dominant): Phr + raised 3rd → 1 accidental
 * - doubleHarmonic / bhairav: tied between '' and Phr (2 each), '' is simpler
 * - marwa: Lyd + b2 → 1 accidental
 * - purvi: Lyd + b2 b6 → 2 accidentals
 * - todi: Phr + #4 natural 7 → 2 accidentals
 */
export const ABC_MODE_MAP: Record<string, string> = {
  major: '',
  minor: 'm',
  dorian: 'Dor',
  phyrygian: 'Phr',
  lydian: 'Lyd',
  mixolydian: 'Mix',
  locrian: 'Loc',
  majorPentatonic: '',
  minorPentatonic: 'm',
  bluesMinor: 'm',
  bluesMajor: '',
  gypsy: 'Phr',
  doubleHarmonic: '',
  bhairav: '',
  marwa: 'Lyd',
  purvi: 'Lyd',
  todi: 'Phr',
};

/**
 * Reverse map: ABC key name → internal note identifier.
 * Supports both flat and sharp spellings for enharmonic notes.
 */
const ABC_KEY_TO_NOTE_ID: Record<string, string> = {
  C: 'c',
  G: 'g',
  D: 'd',
  A: 'a',
  E: 'e',
  B: 'b',
  F: 'f',
  Gb: 'gFlat',
  'F#': 'gFlat',
  Db: 'dFlat',
  'C#': 'dFlat',
  Ab: 'aFlat',
  'G#': 'aFlat',
  Eb: 'eFlat',
  'D#': 'eFlat',
  Bb: 'bFlat',
  'A#': 'bFlat',
};

/**
 * Reverse map: ABC mode suffix (lowercased) → app scale value.
 * Only the first 3 characters of a mode are significant in ABC v2.1.
 * Ambiguous suffixes ('' and 'm') map to the most common scale.
 */
const ABC_MODE_TO_SCALE: Record<string, string> = {
  '': 'major',
  m: 'minor',
  min: 'minor',
  minor: 'minor',
  maj: 'major',
  major: 'major',
  dor: 'dorian',
  dorian: 'dorian',
  phr: 'phyrygian',
  phrygian: 'phyrygian',
  lyd: 'lydian',
  lydian: 'lydian',
  mix: 'mixolydian',
  mixolydian: 'mixolydian',
  loc: 'locrian',
  locrian: 'locrian',
  ion: 'major',
  ionian: 'major',
  aeo: 'minor',
  aeolian: 'minor',
};

const noteToAbcKey = (note: Note): string => {
  if (note.display) return note.display;
  if (note.displayFlat) return `${note.displayFlat}b`;
  return 'C';
};

/**
 * Generate an ABC key string from a Note and scale.
 * e.g. (A, 'minor') → 'Am', (D, 'dorian') → 'DDor'
 */
export const getAbcKey = (note: Note, scale: string): string => {
  const noteName = noteToAbcKey(note);
  const mode = ABC_MODE_MAP[scale] || '';
  return `${noteName}${mode}`;
};

/**
 * Parse an ABC key string into a note identifier and scale value.
 * e.g. 'Am' → { noteId: 'a', scale: 'minor' }
 *      'Bb' → { noteId: 'bFlat', scale: 'major' }
 *      'DDor' → { noteId: 'd', scale: 'dorian' }
 * Returns null if the key string is invalid.
 */
export const parseAbcKey = (
  key: string,
): { noteId: string; scale: string } | null => {
  const match = key.match(/^([A-G])([#b]?)\s*(.*)/);
  if (!match) return null;

  const [, noteLetter, accidental, modeSuffix] = match;
  const abcNote = `${noteLetter}${accidental}`;
  const noteId = ABC_KEY_TO_NOTE_ID[abcNote];
  if (!noteId) return null;

  const scale = ABC_MODE_TO_SCALE[modeSuffix.trim().toLowerCase()];
  if (scale === undefined) return null;

  return { noteId, scale };
};

/**
 * Extract and parse the K: line from an ABC notation string.
 * Returns null if no valid K: line is found.
 */
export const parseAbcKeyLine = (
  notation: string,
): { noteId: string; scale: string } | null => {
  const match = notation.match(/^K:\s*(.*)/m);
  if (!match) return null;
  return parseAbcKey(match[1]);
};

/**
 * Validate an ABC key string. Returns the matching Note if valid, undefined otherwise.
 */
export const getAbcKeyNote = (key: string): Note | undefined => {
  const parsed = parseAbcKey(key);
  if (!parsed) return undefined;
  return getNoteByIdentifier(parsed.noteId);
};
