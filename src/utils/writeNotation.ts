import { Note } from '@/types';
import { getBaseNote, getAccidentalNote } from '@/utils/accidentals';

export function octaveUp(note: string) {
  return `${note}'`;
}

export function octaveDown(note: string) {
  return `${note},`;
}

export default function writeNotation(scale: Note[]) {
  const firstNote = scale[0];

  const notatedScale = scale.map((note, index) => {
    const scalePosition = index + 1;
    const circleOfFifthsPosition = note.position;
    const previousNote = scale[index - 1];
    const nextNote = scale[index + 1];
    let notation;

    const baseNote = getBaseNote({
      note,
      previousNote,
      nextNote,
    });
    const { isAccidental, isSharp } = getAccidentalNote({
      note,
      previousNote,
      nextNote,
    });

    if (isAccidental) {
      const modifier = isSharp ? '^' : '_';
      notation = `${modifier}${baseNote}`;
    } else {
      notation = baseNote;
    }

    const isC = note.note === 'c';
    const isG = note.note === 'g';
    const isD = note.note === 'd';
    const isA = note.note === 'a';
    const isE = note.note === 'e';
    const isB = note.note === 'b';
    const isGFlat = circleOfFifthsPosition === 7;
    const isDFlat = circleOfFifthsPosition === 8;
    const isAFlat = circleOfFifthsPosition === 9;
    const isEFlat = circleOfFifthsPosition === 10;
    const isBFlat = circleOfFifthsPosition === 11;
    const isF = note.note === 'f';

    const isFirstNote = scalePosition === 1;
    const isFirstNoteB =
      (firstNote.note === 'b' || firstNote.note === 'bFlat') && !isFirstNote;
    const isFirstNoteG =
      (firstNote.note === 'g' || firstNote.note === 'gFlat') && !isFirstNote;
    const isFirstNoteD =
      (firstNote.note === 'd' || firstNote.note === 'dFlat') && !isFirstNote;
    const isFirstNoteA =
      (firstNote.note === 'a' || firstNote.note === 'aFlat') && !isFirstNote;
    const isFirstNoteE =
      (firstNote.note === 'e' || firstNote.note === 'eFlat') && !isFirstNote;
    const isFirstNoteF = firstNote.note === 'f' && !isFirstNote;

    if (
      (scalePosition === scale.length && !isB) ||
      (isFirstNoteG && isC) ||
      (isFirstNoteG && isD) ||
      (isFirstNoteG && isE) ||
      (isFirstNoteG && isDFlat) ||
      (isFirstNoteG && isEFlat) ||
      (isFirstNoteG && isF) ||
      (isFirstNoteA && isC) ||
      (isFirstNoteA && isD) ||
      (isFirstNoteA && isDFlat) ||
      (isFirstNoteA && isG) ||
      (isFirstNoteA && isGFlat) ||
      (isFirstNoteA && isE) ||
      (isFirstNoteA && isAFlat) ||
      (isFirstNoteA && isEFlat) ||
      (isFirstNoteA && isF) ||
      (isFirstNoteB && isC) ||
      (isFirstNoteB && isB && !(scalePosition === 2)) ||
      (isFirstNoteB && isD) ||
      (isFirstNoteB && isE) ||
      (isFirstNoteB && isDFlat) ||
      (isFirstNoteB && isEFlat) ||
      (isFirstNoteB && isF) ||
      (isFirstNoteB && isG) ||
      (isFirstNoteB && isGFlat) ||
      (isFirstNoteB && isA) ||
      (isFirstNoteB && isAFlat) ||
      (isFirstNoteB && isBFlat) ||
      (isFirstNoteE && isDFlat) ||
      (isFirstNoteE && isEFlat) ||
      (isFirstNoteE && isC) ||
      (isFirstNoteE && isD) ||
      (isFirstNoteG && isGFlat) ||
      (isFirstNoteD && isC) ||
      (isFirstNoteD && isDFlat) ||
      (isFirstNoteF && isC) ||
      (isFirstNoteF && isD) ||
      (isFirstNoteF && isDFlat) ||
      (isFirstNoteF && isE) ||
      (isFirstNoteF && isEFlat)
    ) {
      notation = octaveUp(notation);
    }

    return notation;
  });

  return notatedScale.join('');
}
