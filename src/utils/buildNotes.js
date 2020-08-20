import notes from '../constants/notes';
import findNotePosition from '../utils/findNotePosition';

export default function (scale) {
  let mapScale = scale;

  if (typeof scale[0] === 'string') {
    mapScale = scale.map((note) => findNotePosition(note));
  }

  const notatedScale = mapScale.map((note) => {
    return notes[note - 1];
  });
  return notatedScale;
}
