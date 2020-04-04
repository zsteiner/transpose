export default function(scale) {
  const notatedScale = scale.map(note => {
    return note.notation;
  });
  return notatedScale.join('');
}
