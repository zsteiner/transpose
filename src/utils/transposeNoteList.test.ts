import { transposeNoteList } from './transposeNoteList';

describe('transposeNoteList', () => {
  describe('basic transposition', () => {
    it('should transpose a major chord up by 2 steps', () => {
      const result = transposeNoteList(['C', 'E', 'G'], 2);
      expect(result.map((n) => n.note)).toEqual(['D', 'Gb', 'A']);
    });

    it('should handle case-insensitive identifiers', () => {
      const result = transposeNoteList(['c', 'e', 'g'], 2);
      expect(result.map((n) => n.note)).toEqual(['D', 'Gb', 'A']);
    });

    it('should handle mixed case identifiers', () => {
      const result = transposeNoteList(['C', 'Eb', 'G'], 1);
      expect(result.map((n) => n.note)).toEqual(['G', 'Bb', 'D']);
    });

    it('should transpose by 0 and return same notes', () => {
      const result = transposeNoteList(['C', 'E', 'G'], 0);
      expect(result.map((n) => n.note)).toEqual(['C', 'E', 'G']);
    });
  });

  describe('edge cases', () => {
    it('should handle empty array', () => {
      const result = transposeNoteList([], 5);
      expect(result).toEqual([]);
    });

    it('should default to C for unknown identifiers', () => {
      const result = transposeNoteList(['unknown'], 0);
      expect(result[0].note).toBe('C');
    });

    it('should handle unknown identifiers with transposition', () => {
      const result = transposeNoteList(['invalid'], 2);
      expect(result[0].note).toBe('D');
    });
  });

  describe('negative transpose factors', () => {
    it('should handle negative transpose factors', () => {
      const result = transposeNoteList(['C', 'E', 'G'], -2);
      expect(result.map((n) => n.note)).toEqual(['Bb', 'D', 'F']);
    });

    it('should transpose down by 1 step', () => {
      const result = transposeNoteList(['G'], -1);
      expect(result[0].note).toBe('C');
    });
  });

  describe('circle wrapping', () => {
    it('should handle wrapping around circle of fifths', () => {
      const result = transposeNoteList(['C'], 13); // One full circle + 1
      expect(result[0].note).toBe('G');
    });

    it('should handle multiple full circles', () => {
      const result = transposeNoteList(['C'], 24); // Two full circles
      expect(result[0].note).toBe('C');
    });

    it('should handle large negative transpose factors', () => {
      const result = transposeNoteList(['C'], -13);
      expect(result[0].note).toBe('F');
    });
  });

  describe('real-world scenarios', () => {
    it('should transpose C major scale to D major', () => {
      const cMajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
      const result = transposeNoteList(cMajorScale, 2);
      expect(result.map((n) => n.note)).toEqual([
        'D',
        'E',
        'Gb',
        'G',
        'A',
        'B',
        'Db',
      ]);
    });

    it('should transpose minor chord progression', () => {
      const minorChord = ['C', 'Eb', 'G'];
      const result = transposeNoteList(minorChord, 3);
      expect(result.map((n) => n.note)).toEqual(['A', 'C', 'E']);
    });

    it('should transpose from C to G (up 1 fifth)', () => {
      const notes = ['C', 'E', 'G'];
      const result = transposeNoteList(notes, 1);
      expect(result.map((n) => n.note)).toEqual(['G', 'B', 'D']);
    });

    it('should transpose from piano (C) to alto sax (Eb)', () => {
      // Alto sax transposes up 3 steps on circle of fifths
      const pianoNotes = ['C', 'D', 'E'];
      const result = transposeNoteList(pianoNotes, 3);
      expect(result.map((n) => n.note)).toEqual(['A', 'B', 'Db']);
    });
  });

  describe('maintains array order', () => {
    it('should preserve order of notes in array', () => {
      const notes = ['G', 'C', 'E', 'B', 'D'];
      const result = transposeNoteList(notes, 1);
      expect(result.length).toBe(5);
      expect(result[0].note).toBe('D'); // G + 1
      expect(result[1].note).toBe('G'); // C + 1
      expect(result[2].note).toBe('B'); // E + 1
      expect(result[3].note).toBe('Gb'); // B + 1
      expect(result[4].note).toBe('A'); // D + 1
    });
  });
});
