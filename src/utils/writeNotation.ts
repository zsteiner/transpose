function octaveUp(note) {
  return `${note}'`;
}

function octaveDown(note) {
  return `${note},`;
}

export default function writeNotiona(scale, scaleKey) {
  // let previous = {
  //   position: 0,
  // };
  const notatedScale = scale.map((note, index) => {
    let notation;
    if (note.displayFlat && scaleKey === 'flat') {
      notation = `_${note.displayFlat}`;
    } else if (note.displaySharp && scaleKey === 'sharp') {
      notation = `^${note.displaySharp}`;
    } else {
      notation = note.display;
    }

    if (
      note.position === scale[0].position
      && index !== 0
      && note.position !== 11
      && note.position !== 6
    ) {
      notation = octaveUp(notation);
    }

    if ((note.position === 11 || note.position === 6) && index === 0) {
      notation = octaveDown(notation);
    }

    // previous = note;
    return notation;
  });
  return notatedScale.join('');
}
