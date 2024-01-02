import { getBaseNote, getAccidentalNote } from '@/utils/accidentals';

export function octaveUp(note) {
  return `${note}'`;
}

export function octaveDown(note) {
  return `${note},`;
}

export default function writeNotation(scale) {
  const notatedScale = scale.map((note, index) => {
    const previousNote = scale[index - 1];
    const nextNote = scale[index + 1];
    let notation;

    const baseNote = getBaseNote({
      note,
      previousNote,
      nextNote,
    });
    const { isAccidental, isSharp } = getAccidentalNote({
      note,
      previousNote,
      nextNote,
    });

    if (isAccidental) {
      const modifier = isSharp ? '^' : '_';
      notation = `${modifier}${baseNote}`;
    } else {
      notation = baseNote;
    }

    if (index === scale.length - 1) {
      notation = octaveUp(notation);
    }

    return notation;
  });

  return notatedScale.join('');
}
