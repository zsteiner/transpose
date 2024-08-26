

export default function writeNotation(scale: string[]) {
  return scale.map((note, index) => note.replace('Flat', 'b')).join('');
}
