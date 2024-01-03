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
    const isB = note.note === 'b' || note.note === 'bFlat';
    const isF = note.note === 'f';

    const isFirstNote = scalePosition === 1;
    const isSecondNote = scalePosition === 2;
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
      scalePosition === scale.length ||
      (isFirstNoteG && isC) ||
      (isFirstNoteG && isD) ||
      (isFirstNoteG && isE) ||
      (isFirstNoteG && isF) ||
      (isFirstNoteA && isC) ||
      (isFirstNoteA && isD) ||
      (isFirstNoteA && isG) ||
      (isFirstNoteA && isE) ||
      (isFirstNoteA && isA && !isSecondNote) ||
      (isFirstNoteA && isE) ||
      (isFirstNoteA && isF) ||
      (isFirstNoteB && isC) ||
      (isFirstNoteB && isB && !isSecondNote) ||
      (isFirstNoteB && isD) ||
      (isFirstNoteB && isE) ||
      (isFirstNoteB && isF) ||
      (isFirstNoteB && isG) ||
      (isFirstNoteB && isA) ||
      (isFirstNoteE && isC) ||
      (isFirstNoteE && isD) ||
      (isFirstNoteE && isE && !isSecondNote) ||
      (isFirstNoteG && isG && !isSecondNote) ||
      (isFirstNoteD && isC) ||
      (isFirstNoteD && isD && !isSecondNote) ||
      (isFirstNoteF && isC) ||
      (isFirstNoteF && isD) ||
      (isFirstNoteF && isD) ||
      (isFirstNoteF && isE)
    ) {
      notation = octaveUp(notation);
    }

    return notation;
  });

  return notatedScale.join('');
}
