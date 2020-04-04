import notes from '../constants/notes';
import findNotePosition from '../utils/findNotePosition';

export default function(scale) {
  let mapScale = scale;

  if (typeof scale[0] === 'string') {
    mapScale = scale.map(note => findNotePosition(note));
  }

  const notatedScale = mapScale.map(note => {
    let notation;
    // if (index > 0 && note <= scale[0]) {
    //   notation = `${notes[note - 1].notation}'`;
    // } else {
    notation = notes[note - 1].notation;
    // }
    return notation;
  });
  return notatedScale.join('');
}
