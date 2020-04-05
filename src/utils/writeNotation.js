export default function(scale, scaleKey) {
  const notatedScale = scale.map(note => {
    let notation;
    if (note.displayFlat && scaleKey === 'flat') {
      notation = `_${note.displayFlat}`;
    } else if (note.displaySharp && scaleKey === 'sharp') {
      notation = `^${note.displaySharp}`;
    } else {
      notation = note.display;
    }
    return notation;
  });
  return notatedScale.join('');
}
