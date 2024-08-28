import { noteAbcNotationMap } from '@/constants/notes';


export default function writeNotation(scale: string[]) {
  return scale.map(note => {
    const noteKey = note as keyof typeof noteAbcNotationMap;

    if (noteAbcNotationMap[noteKey]) {
      return noteAbcNotationMap[noteKey];
    } else {
      return note;
    }
  }).join(' ');
}
