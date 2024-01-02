import { Note } from "@/types";

type BothNotes = {
  note: Note,
  previousNote: Note,
};

export function getBaseNote({ note, previousNote }: BothNotes) {
  let baseNote;

  const { accidentalNote, isAccidental } = getAccidentalNote({
    note,
    previousNote,
  });

  if (isAccidental) {
    baseNote = note[accidentalNote] || note.displayFlat;
  } else {
    baseNote = note.display;
  }

  return baseNote;
}

export function getAccidentalNote({ note, previousNote }: BothNotes) {
  let accidentalNote = '';
  let isSharp = false;
  const isAccidental = getIsAccidental(note);

  if (isAccidental) {
    isSharp = getIsSharp(accidentalNote);
    accidentalNote = previousNote
      ? note?.previousNote[previousNote?.note]
      : ''
  }


  return {
    accidentalNote,
    isAccidental,
    isSharp,
  };
}

export function getIsAccidental(note: Note) {
  return !!note?.previousNote;
}

export function getIsSharp(accidentalNote: string) {
  return accidentalNote === 'displaySharp';
}
