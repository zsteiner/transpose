import notes from '../constants/notes';

export default function (note) {
  return notes.find((obj) => obj.note === note).position;
}
