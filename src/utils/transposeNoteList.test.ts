import { transposeNoteList } from './transposeNoteList';

describe('transposeNoteList', () => {
  describe('basic transposition', () => {
    it('should transpose a major chord up by 2 steps', () => {
      const result = transposeNoteList(['c', 'e', 'g'], 2);
      expect(result.map((n) => n.note)).toEqual(['d', 'gFlat', 'a']);
    });

    it('should handle case-insensitive identifiers', () => {
      const result = transposeNoteList(['C', 'E', 'G'], 2);
      expect(result.map((n) => n.note)).toEqual(['d', 'gFlat', 'a']);
    });

    it('should handle mixed case identifiers', () => {
      const result = transposeNoteList(['c', 'EFLAT', 'G'], 1);
      expect(result.map((n) => n.note)).toEqual(['g', 'bFlat', 'd']);
    });

    it('should transpose by 0 and return same notes', () => {
      const result = transposeNoteList(['c', 'e', 'g'], 0);
      expect(result.map((n) => n.note)).toEqual(['c', 'e', 'g']);
    });
  });

  describe('edge cases', () => {
    it('should handle empty array', () => {
      const result = transposeNoteList([], 5);
      expect(result).toEqual([]);
    });

    it('should default to C for unknown identifiers', () => {
      const result = transposeNoteList(['unknown'], 0);
      expect(result[0].note).toBe('c');
    });

    it('should handle unknown identifiers with transposition', () => {
      const result = transposeNoteList(['invalid'], 2);
      expect(result[0].note).toBe('d');
    });
  });

  describe('negative transpose factors', () => {
    it('should handle negative transpose factors', () => {
      const result = transposeNoteList(['c', 'e', 'g'], -2);
      expect(result.map((n) => n.note)).toEqual(['bFlat', 'd', 'f']);
    });

    it('should transpose down by 1 step', () => {
      const result = transposeNoteList(['g'], -1);
      expect(result[0].note).toBe('c');
    });
  });

  describe('circle wrapping', () => {
    it('should handle wrapping around circle of fifths', () => {
      const result = transposeNoteList(['c'], 13); // One full circle + 1
      expect(result[0].note).toBe('g');
    });

    it('should handle multiple full circles', () => {
      const result = transposeNoteList(['c'], 24); // Two full circles
      expect(result[0].note).toBe('c');
    });

    it('should handle large negative transpose factors', () => {
      const result = transposeNoteList(['c'], -13);
      expect(result[0].note).toBe('f');
    });
  });

  describe('real-world scenarios', () => {
    it('should transpose C major scale to D major', () => {
      const cMajorScale = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
      const result = transposeNoteList(cMajorScale, 2);
      expect(result.map((n) => n.note)).toEqual([
        'd',
        'e',
        'gFlat',
        'g',
        'a',
        'b',
        'dFlat',
      ]);
    });

    it('should transpose minor chord progression', () => {
      const minorChord = ['c', 'eFlat', 'g'];
      const result = transposeNoteList(minorChord, 3);
      expect(result.map((n) => n.note)).toEqual(['a', 'c', 'e']);
    });

    it('should transpose from C to G (up 1 fifth)', () => {
      const notes = ['c', 'e', 'g'];
      const result = transposeNoteList(notes, 1);
      expect(result.map((n) => n.note)).toEqual(['g', 'b', 'd']);
    });

    it('should transpose from piano (C) to alto sax (Eb)', () => {
      // Alto sax transposes up 3 steps on circle of fifths
      const pianoNotes = ['c', 'd', 'e'];
      const result = transposeNoteList(pianoNotes, 3);
      expect(result.map((n) => n.note)).toEqual(['a', 'b', 'dFlat']);
    });
  });

  describe('maintains array order', () => {
    it('should preserve order of notes in array', () => {
      const notes = ['g', 'c', 'e', 'b', 'd'];
      const result = transposeNoteList(notes, 1);
      expect(result.length).toBe(5);
      expect(result[0].note).toBe('d'); // g + 1
      expect(result[1].note).toBe('g'); // c + 1
      expect(result[2].note).toBe('b'); // e + 1
      expect(result[3].note).toBe('gFlat'); // b + 1
      expect(result[4].note).toBe('a'); // d + 1
    });
  });
});
