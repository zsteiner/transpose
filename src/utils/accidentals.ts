import { Note } from "@/types";

type SiblingNotes = {
  note: Note,
  previousNote: Note,
  nextNote: Note,
};

export function getBaseNote({ note, previousNote, nextNote }: SiblingNotes) {
  let baseNote;

  const { accidentalNote, isAccidental } = getAccidentalNote({
    note,
    previousNote,
    nextNote
  });

  if (isAccidental) {
    baseNote = note[accidentalNote] || note.displayFlat;
  } else {
    baseNote = note.display;
  }

  return baseNote;
}

export function getAccidentalNote({ note, previousNote, nextNote }: SiblingNotes) {
  let accidentalNote = '';
  let isSharp = false;
  const isAccidental = getIsAccidental(note);

  if (isAccidental) {
    accidentalNote = note?.siblingNote[nextNote?.note] || note?.siblingNote[previousNote?.note];
    isSharp = getIsSharp(accidentalNote);
  }


  return {
    accidentalNote,
    isAccidental,
    isSharp,
  };
}

export function getIsAccidental(note: Note) {
  return !!note?.siblingNote;
}

export function getIsSharp(accidentalNote: string) {
  return accidentalNote === 'displaySharp';
}
