const scales = {
  major: {
    c: { key: 'C', scale: "CDEFGABC'" },
    g: { key: 'G', scale: "GABC'D'^F'G'" },
    d: { key: 'D', scale: "DE^FGAB^C'D'" },
    a: { key: 'A', scale: "AB^cde^f^G'A'" },
    e: { key: 'E', scale: 'E' },
    b: { key: 'A', scale: 'B' },
    fSharp: { key: '^F', scale: '^F' },
    cSharp: { key: '^C', scale: '^C' },
    aFlat: { key: '_A', scale: '_A' },
    eFlat: { key: '_E', scale: '_E' },
    bFlat: { key: '_B', scale: '_B' },
    f: { key: 'F', scale: 'F' },
  },
  minor: {
    c: { key: '', scale: '' },
  },
};

export default scales;
