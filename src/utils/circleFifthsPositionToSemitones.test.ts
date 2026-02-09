import { circleFifthsPositionToSemitones } from './circleFifthsPositionToSemitones';

describe('circleFifthsPositionToSemitones', () => {
  describe('basic positions', () => {
    it('should return 0 semitones for position 0 (C)', () => {
      expect(circleFifthsPositionToSemitones(0)).toBe(0);
    });

    it('should return 7 semitones for position 1 (G)', () => {
      expect(circleFifthsPositionToSemitones(1)).toBe(7);
    });

    it('should return 2 semitones for position 2 (D)', () => {
      expect(circleFifthsPositionToSemitones(2)).toBe(2);
    });

    it('should return -3 semitones for position 3 (A)', () => {
      expect(circleFifthsPositionToSemitones(3)).toBe(-3);
    });

    it('should return 4 semitones for position 4 (E)', () => {
      expect(circleFifthsPositionToSemitones(4)).toBe(4);
    });

    it('should return -1 semitones for position 5 (B)', () => {
      expect(circleFifthsPositionToSemitones(5)).toBe(-1);
    });

    it('should return 6 semitones for position 6 (F#/Gb)', () => {
      expect(circleFifthsPositionToSemitones(6)).toBe(6);
    });

    it('should return 1 semitone for position 7 (Db)', () => {
      expect(circleFifthsPositionToSemitones(7)).toBe(1);
    });

    it('should return 8 semitones for position 8 (Ab)', () => {
      expect(circleFifthsPositionToSemitones(8)).toBe(8);
    });

    it('should return 3 semitones for position 9 (Eb)', () => {
      expect(circleFifthsPositionToSemitones(9)).toBe(3);
    });

    it('should return -2 semitones for position 10 (Bb)', () => {
      expect(circleFifthsPositionToSemitones(10)).toBe(-2);
    });

    it('should return 5 semitones for position 11 (F)', () => {
      expect(circleFifthsPositionToSemitones(11)).toBe(5);
    });
  });

  describe('wrapping positions', () => {
    it('should handle position 12 (wraps to 0)', () => {
      expect(circleFifthsPositionToSemitones(12)).toBe(0);
    });

    it('should handle position 13 (wraps to 1)', () => {
      expect(circleFifthsPositionToSemitones(13)).toBe(7);
    });

    it('should handle position 24 (two full circles)', () => {
      expect(circleFifthsPositionToSemitones(24)).toBe(0);
    });

    it('should handle position 25', () => {
      expect(circleFifthsPositionToSemitones(25)).toBe(7);
    });
  });

  describe('negative positions', () => {
    it('should handle negative position -1 (wraps to 11, F)', () => {
      expect(circleFifthsPositionToSemitones(-1)).toBe(5);
    });

    it('should handle negative position -2 (wraps to 10, Bb)', () => {
      expect(circleFifthsPositionToSemitones(-2)).toBe(-2);
    });

    it('should handle negative position -12 (wraps to 0)', () => {
      expect(circleFifthsPositionToSemitones(-12)).toBe(0);
    });

    it('should handle negative position -13 (wraps to 11)', () => {
      expect(circleFifthsPositionToSemitones(-13)).toBe(5);
    });
  });

  describe('music theory verification', () => {
    it('should correctly map perfect fifth (C to G)', () => {
      // C is position 0, G is position 1
      expect(circleFifthsPositionToSemitones(1)).toBe(7); // 7 semitones = perfect fifth
    });

    it('should correctly map whole step (C to D)', () => {
      // C is position 0, D is position 2
      expect(circleFifthsPositionToSemitones(2)).toBe(2); // 2 semitones = whole step
    });

    it('should correctly map major third (C to E)', () => {
      // C is position 0, E is position 4
      expect(circleFifthsPositionToSemitones(4)).toBe(4); // 4 semitones = major third
    });

    it('should correctly map perfect fourth (C to F)', () => {
      // C is position 0, F is position 11
      expect(circleFifthsPositionToSemitones(11)).toBe(5); // 5 semitones = perfect fourth
    });
  });
});
