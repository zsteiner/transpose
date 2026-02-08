import { transposeNoteSemitones } from './transposeNoteSemitones';

describe('transposeNoteSemitones', () => {
  // Note: This function is designed to be called with originalNote = 0 (C)
  // It converts circle of fifths positions to semitones FROM C
  // See usage in useTransposeSemitones.ts

  describe('converting circle of fifths positions to semitones from C', () => {
    it('should return 0 semitones for position 0 (C)', () => {
      expect(transposeNoteSemitones(0, 0)).toBe(0); // C
    });

    it('should return 7 semitones for position 1 (G)', () => {
      expect(transposeNoteSemitones(0, 1)).toBe(7); // G
    });

    it('should return 2 semitones for position 2 (D)', () => {
      expect(transposeNoteSemitones(0, 2)).toBe(2); // D
    });

    it('should return -3 semitones for position 3 (A)', () => {
      expect(transposeNoteSemitones(0, 3)).toBe(-3); // A (wraps to 9 semitones)
    });

    it('should return 4 semitones for position 4 (E)', () => {
      expect(transposeNoteSemitones(0, 4)).toBe(4); // E
    });

    it('should return -1 semitones for position 5 (B)', () => {
      expect(transposeNoteSemitones(0, 5)).toBe(-1); // B (wraps to 11 semitones)
    });

    it('should return 6 semitones for position 6 (F#/Gb)', () => {
      expect(transposeNoteSemitones(0, 6)).toBe(6); // F#/Gb
    });

    it('should return 1 semitone for position 7 (Db)', () => {
      expect(transposeNoteSemitones(0, 7)).toBe(1); // Db
    });

    it('should return 8 semitones for position 8 (Ab)', () => {
      expect(transposeNoteSemitones(0, 8)).toBe(8); // Ab
    });

    it('should return 3 semitones for position 9 (Eb)', () => {
      expect(transposeNoteSemitones(0, 9)).toBe(3); // Eb
    });

    it('should return -2 semitones for position 10 (Bb)', () => {
      expect(transposeNoteSemitones(0, 10)).toBe(-2); // Bb (wraps to 10 semitones)
    });

    it('should return 5 semitones for position 11 (F)', () => {
      expect(transposeNoteSemitones(0, 11)).toBe(5); // F
    });
  });

  describe('wrapping positions beyond 11', () => {
    it('should handle position 12 (wraps to 0)', () => {
      expect(transposeNoteSemitones(0, 12)).toBe(0); // Wraps to C
    });

    it('should handle position 13 (wraps to 1)', () => {
      expect(transposeNoteSemitones(0, 13)).toBe(7); // Wraps to G
    });

    it('should handle position 24 (two full circles)', () => {
      expect(transposeNoteSemitones(0, 24)).toBe(0); // Wraps to C
    });

    it('should handle position 25', () => {
      expect(transposeNoteSemitones(0, 25)).toBe(7); // Wraps to G
    });
  });

  describe('negative positions (wrapping backwards)', () => {
    it('should handle position -1 (wraps to 11 = F)', () => {
      expect(transposeNoteSemitones(0, -1)).toBe(5); // Wraps to F
    });

    it('should handle position -2 (wraps to 10 = Bb)', () => {
      expect(transposeNoteSemitones(0, -2)).toBe(-2); // Wraps to Bb
    });

    it('should handle position -12 (full circle backwards)', () => {
      expect(transposeNoteSemitones(0, -12)).toBe(0); // Wraps to C
    });

    it('should handle position -13', () => {
      expect(transposeNoteSemitones(0, -13)).toBe(5); // Wraps to F
    });
  });
});
