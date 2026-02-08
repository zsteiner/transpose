import { transposeNote } from './transposeNote';

describe('transposeNote', () => {
  it('should transpose a note up by a given factor', () => {
    expect(transposeNote(0, 5)).toBe(5);
    expect(transposeNote(3, 4)).toBe(7);
  });

  it('should wrap around when transposing above 12', () => {
    expect(transposeNote(10, 5)).toBe(3);
  });

  it('should wrap around when transposing below 0', () => {
    expect(transposeNote(2, -5)).toBe(9);
  });

  it('should return the same note when transpose factor is 0', () => {
    expect(transposeNote(5, 0)).toBe(5);
  });

  describe('tenor sax to piano transposition', () => {
    // Tenor sax is a Bb instrument (transposeFactor: 2)
    // Piano is concert pitch (transposeFactor: 0)
    // When transposing from tenor sax to piano, we need to go down 2 semitones (-2)
    const transposeFactor = -2;

    it('should transpose C to Bb', () => {
      expect(transposeNote(0, transposeFactor)).toBe(10); // C -> Bb
    });

    it('should transpose G to F', () => {
      expect(transposeNote(1, transposeFactor)).toBe(11); // G -> F
    });

    it('should transpose D to C', () => {
      expect(transposeNote(2, transposeFactor)).toBe(0); // D -> C
    });

    it('should transpose A to G', () => {
      expect(transposeNote(3, transposeFactor)).toBe(1); // A -> G
    });

    it('should transpose E to D', () => {
      expect(transposeNote(4, transposeFactor)).toBe(2); // E -> D
    });

    it('should transpose B to A', () => {
      expect(transposeNote(5, transposeFactor)).toBe(3); // B -> A
    });

    it('should transpose Gb to E', () => {
      expect(transposeNote(6, transposeFactor)).toBe(4); // Gb -> E
    });

    it('should transpose Db to B', () => {
      expect(transposeNote(7, transposeFactor)).toBe(5); // Db -> B
    });

    it('should transpose Ab to Gb', () => {
      expect(transposeNote(8, transposeFactor)).toBe(6); // Ab -> Gb
    });

    it('should transpose Eb to Db', () => {
      expect(transposeNote(9, transposeFactor)).toBe(7); // Eb -> Db
    });

    it('should transpose Bb to Ab', () => {
      expect(transposeNote(10, transposeFactor)).toBe(8); // Bb -> Ab
    });

    it('should transpose F to Eb', () => {
      expect(transposeNote(11, transposeFactor)).toBe(9); // F -> Eb
    });
  });

  describe('alto sax to piano transposition', () => {
    // Alto sax is an Eb instrument (transposeFactor: 3)
    // Piano is concert pitch (transposeFactor: 0)
    // When transposing from alto sax to piano, we need to go down 3 semitones (-3)
    const transposeFactor = -3;

    it('should transpose C to Eb', () => {
      expect(transposeNote(0, transposeFactor)).toBe(9); // C -> Eb
    });

    it('should transpose G to Bb', () => {
      expect(transposeNote(1, transposeFactor)).toBe(10); // G -> Bb
    });

    it('should transpose D to F', () => {
      expect(transposeNote(2, transposeFactor)).toBe(11); // D -> F
    });

    it('should transpose A to C', () => {
      expect(transposeNote(3, transposeFactor)).toBe(0); // A -> C
    });

    it('should transpose E to G', () => {
      expect(transposeNote(4, transposeFactor)).toBe(1); // E -> G
    });

    it('should transpose B to D', () => {
      expect(transposeNote(5, transposeFactor)).toBe(2); // B -> D
    });

    it('should transpose Gb to A', () => {
      expect(transposeNote(6, transposeFactor)).toBe(3); // Gb -> A
    });

    it('should transpose Db to E', () => {
      expect(transposeNote(7, transposeFactor)).toBe(4); // Db -> E
    });

    it('should transpose Ab to B', () => {
      expect(transposeNote(8, transposeFactor)).toBe(5); // Ab -> B
    });

    it('should transpose Eb to Gb', () => {
      expect(transposeNote(9, transposeFactor)).toBe(6); // Eb -> Gb
    });

    it('should transpose Bb to Db', () => {
      expect(transposeNote(10, transposeFactor)).toBe(7); // Bb -> Db
    });

    it('should transpose F to Ab', () => {
      expect(transposeNote(11, transposeFactor)).toBe(8); // F -> Ab
    });
  });

  describe('alto sax to tenor sax transposition', () => {
    // Alto sax is an Eb instrument (transposeFactor: 3)
    // Tenor sax is a Bb instrument (transposeFactor: 2)
    // When transposing from alto sax to tenor sax, we need to go down 1 semitone (-1)
    const transposeFactor = -1;

    it('should transpose C to F', () => {
      expect(transposeNote(0, transposeFactor)).toBe(11); // C -> F
    });

    it('should transpose G to C', () => {
      expect(transposeNote(1, transposeFactor)).toBe(0); // G -> C
    });

    it('should transpose D to G', () => {
      expect(transposeNote(2, transposeFactor)).toBe(1); // D -> G
    });

    it('should transpose A to D', () => {
      expect(transposeNote(3, transposeFactor)).toBe(2); // A -> D
    });

    it('should transpose E to A', () => {
      expect(transposeNote(4, transposeFactor)).toBe(3); // E -> A
    });

    it('should transpose B to E', () => {
      expect(transposeNote(5, transposeFactor)).toBe(4); // B -> E
    });

    it('should transpose Gb to B', () => {
      expect(transposeNote(6, transposeFactor)).toBe(5); // Gb -> B
    });

    it('should transpose Db to Gb', () => {
      expect(transposeNote(7, transposeFactor)).toBe(6); // Db -> Gb
    });

    it('should transpose Ab to Db', () => {
      expect(transposeNote(8, transposeFactor)).toBe(7); // Ab -> Db
    });

    it('should transpose Eb to Ab', () => {
      expect(transposeNote(9, transposeFactor)).toBe(8); // Eb -> Ab
    });

    it('should transpose Bb to Eb', () => {
      expect(transposeNote(10, transposeFactor)).toBe(9); // Bb -> Eb
    });

    it('should transpose F to Bb', () => {
      expect(transposeNote(11, transposeFactor)).toBe(10); // F -> Bb
    });
  });
});
