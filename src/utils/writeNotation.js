export default function(scale) {
  const notatedScale = scale.map(note => {
    let notation;
    if (note.displayFlat) {
      notation = `_${note.displayFlat}`;
    } else {
      notation = note.display;
    }
    return notation;
  });
  return notatedScale.join('');
}
