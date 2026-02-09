import { getNoteByIdentifier, notes } from './notes';

describe('getNoteByIdentifier', () => {
  it('should find C note by identifier', () => {
    const note = getNoteByIdentifier('c');
    expect(note).toBeDefined();
    expect(note?.position).toBe(0);
    expect(note?.display).toBe('C');
  });

  it('should find G note by identifier', () => {
    const note = getNoteByIdentifier('g');
    expect(note).toBeDefined();
    expect(note?.position).toBe(1);
    expect(note?.display).toBe('G');
  });

  it('should find enharmonic note bFlat by identifier', () => {
    const note = getNoteByIdentifier('bFlat');
    expect(note).toBeDefined();
    expect(note?.position).toBe(10);
    expect(note?.displayFlat).toBe('B');
    expect(note?.displaySharp).toBe('A');
  });

  it('should find gFlat note by identifier', () => {
    const note = getNoteByIdentifier('gFlat');
    expect(note).toBeDefined();
    expect(note?.position).toBe(6);
    expect(note?.displayFlat).toBe('G');
    expect(note?.displaySharp).toBe('F');
  });

  it('should return undefined for unknown identifier', () => {
    expect(getNoteByIdentifier('unknown')).toBeUndefined();
    expect(getNoteByIdentifier('')).toBeUndefined();
  });

  it('should be case-sensitive', () => {
    // Notes use lowercase identifiers like 'c', not 'C'
    expect(getNoteByIdentifier('C')).toBeUndefined();
    expect(getNoteByIdentifier('BFLAT')).toBeUndefined();
  });

  it('should find all 12 notes by their identifiers', () => {
    for (const note of notes) {
      const found = getNoteByIdentifier(note.note);
      expect(found).toBeDefined();
      expect(found?.position).toBe(note.position);
      expect(found?.note).toBe(note.note);
    }
  });
});
