export default function writeNotation(notes: string[]) {
  return notes
    .map((note) => note.replace(/^([A-G])[b#]$/, '$1'))
    .join(' ');
}
