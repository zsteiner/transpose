import notes from '../constants/notes';

export default function findNotePosition(note) {
  return notes.find((obj) => obj.note === note).position;
}
