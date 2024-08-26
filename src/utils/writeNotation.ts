function capitalizeFirstLetter(string: string, isLower = false) {
  if (isLower) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function writeNotation(scale: string[]) {
  return scale.map((note, index) => capitalizeFirstLetter(note.replace('Flat', 'b'), index === scale.length - 1)).join('');
}
