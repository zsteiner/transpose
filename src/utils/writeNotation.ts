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
    const isG = note.note === 'g' || note.note === 'gFlat';
    const isD = note.note === 'd' || note.note === 'dFlat';
    const isA = note.note === 'a' || note.note === 'aFlat';
    const isE = note.note === 'e' || note.note === 'eFlat';
    const isF = note.note === 'f';

    const isFirstNote = scalePosition === 1;
    const isSecondNote = scalePosition === 2;
    const isFirstNoteB = firstNote.note === 'b' || firstNote.note === 'bFlat';
    const isFirstNoteG = firstNote.note === 'g' || firstNote.note === 'gFlat';
    const isFirstNoteD = firstNote.note === 'd' || firstNote.note === 'dFlat';
    const isFirstNoteA = firstNote.note === 'a' || firstNote.note === 'aFlat';
    const isFirstNoteE = firstNote.note === 'e' || firstNote.note === 'eFlat';
    const isFirstNoteF = firstNote.note === 'f' && !isFirstNote;

    const isNotFirstTwoNotes = !isFirstNote && !isSecondNote;

    if (
      (scalePosition === scale.length && !isFirstNoteB) ||
      (isFirstNoteG && isC) ||
      (isFirstNoteG && isD) ||
      (isFirstNoteG && isE) ||
      (isFirstNoteG && isF) ||
      (isFirstNoteA && isC) ||
      (isFirstNoteA && isD) ||
      (isFirstNoteA && isG) ||
      (isFirstNoteA && isE) ||
      (isFirstNoteA && isA && isNotFirstTwoNotes) ||
      (isFirstNoteA && isE) ||
      (isFirstNoteA && isF) ||
      (isFirstNoteE && isC) ||
      (isFirstNoteE && isD) ||
      (isFirstNoteE && isE && isNotFirstTwoNotes) ||
      (isFirstNoteG && isG && isNotFirstTwoNotes) ||
      (isFirstNoteD && isC) ||
      (isFirstNoteD && isD && isNotFirstTwoNotes) ||
      (isFirstNoteF && isC) ||
      (isFirstNoteF && isD) ||
      (isFirstNoteF && isD) ||
      (isFirstNoteF && isE)
    ) {
      notation = octaveUp(notation);
    } else if (isFirstNote && isFirstNoteB) {
      notation = octaveDown(notation);
    }

    return notation;
  });

  return notatedScale.join('');
}
