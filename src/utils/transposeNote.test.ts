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
});
