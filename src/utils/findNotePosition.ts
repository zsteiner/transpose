import { notes, Note } from '../constants/notes';

export default function findNotePosition(note: string) {
  const foundNote = notes.find((noteObject: Note) => noteObject.note === note);

  return foundNote?.position || 0;
}
