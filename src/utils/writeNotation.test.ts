import writeNotation from './writeNotation';

describe('writeNotation', () => {
  it('should pass through plain notes unchanged', () => {
    expect(writeNotation(['C', 'D', 'E'])).toBe('C D E');
  });

  it('should map enharmonic note identifiers to ABC notation', () => {
    expect(writeNotation(['gFlat'])).toBe('G');
    expect(writeNotation(['dFlat'])).toBe('D');
    expect(writeNotation(['aFlat'])).toBe('A');
    expect(writeNotation(['eFlat'])).toBe('E');
    expect(writeNotation(['bFlat'])).toBe('B');
  });

  it('should handle a mix of plain and enharmonic notes', () => {
    expect(writeNotation(['C', 'eFlat', 'G'])).toBe('C E G');
  });

  it('should return an empty string for an empty array', () => {
    expect(writeNotation([])).toBe('');
  });

  it('should pass through unrecognized note names unchanged', () => {
    expect(writeNotation(['X', 'Y'])).toBe('X Y');
  });

  it('should pass through lowercase notes not in the map', () => {
    expect(writeNotation(['c', 'd'])).toBe('c d');
  });

  it('should produce valid ABC notation for a C major scale', () => {
    expect(writeNotation(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'c'])).toBe(
      'C D E F G A B c',
    );
  });

  it('should produce valid ABC notation for a C minor scale', () => {
    expect(
      writeNotation(['C', 'D', 'eFlat', 'F', 'G', 'aFlat', 'bFlat', 'c']),
    ).toBe('C D E F G A B c');
  });

  it('should produce valid ABC notation for a blues minor scale', () => {
    expect(
      writeNotation(['C', 'eFlat', 'F', 'gFlat', 'G', 'bFlat', 'c']),
    ).toBe('C E F G G B c');
  });

  it('should handle single note arrays', () => {
    expect(writeNotation(['C'])).toBe('C');
    expect(writeNotation(['eFlat'])).toBe('E');
  });
});
