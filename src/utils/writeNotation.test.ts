import writeNotation from './writeNotation';

describe('writeNotation', () => {
  it('should pass through plain notes unchanged', () => {
    expect(writeNotation(['C', 'D', 'E'])).toBe('C D E');
  });

  it('should strip flat accidentals from ABC note names', () => {
    expect(writeNotation(['Gb'])).toBe('G');
    expect(writeNotation(['Db'])).toBe('D');
    expect(writeNotation(['Ab'])).toBe('A');
    expect(writeNotation(['Eb'])).toBe('E');
    expect(writeNotation(['Bb'])).toBe('B');
  });

  it('should handle a mix of plain and accidental notes', () => {
    expect(writeNotation(['C', 'Eb', 'G'])).toBe('C E G');
  });

  it('should return an empty string for an empty array', () => {
    expect(writeNotation([])).toBe('');
  });

  it('should pass through unrecognized note names unchanged', () => {
    expect(writeNotation(['X', 'Y'])).toBe('X Y');
  });

  it('should pass through lowercase notes unchanged', () => {
    expect(writeNotation(['c', 'd'])).toBe('c d');
  });

  it('should produce valid ABC notation for a C major scale', () => {
    expect(writeNotation(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'c'])).toBe(
      'C D E F G A B c',
    );
  });

  it('should produce valid ABC notation for a C minor scale', () => {
    expect(
      writeNotation(['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'c']),
    ).toBe('C D E F G A B c');
  });

  it('should produce valid ABC notation for a blues minor scale', () => {
    expect(
      writeNotation(['C', 'Eb', 'F', 'Gb', 'G', 'Bb', 'c']),
    ).toBe('C E F G G B c');
  });

  it('should handle single note arrays', () => {
    expect(writeNotation(['C'])).toBe('C');
    expect(writeNotation(['Eb'])).toBe('E');
  });
});
