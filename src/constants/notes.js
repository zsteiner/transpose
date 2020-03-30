const notes = {
  c: { index: 1, display: 'C' },
  g: { index: 2, display: 'G' },
  d: { index: 3, display: 'D' },
  a: { index: 4, display: 'A' },
  e: { index: 5, display: 'E' },
  b: { index: 6, display: 'B' },
  fSharp: {
    index: 7,
    display:
      'F<span class="sharp">&#X266F;</span> / G<span class="flat">&#X266D;</span>',
  },
  cSharp: {
    index: 8,
    display:
      'D<span class="flat">&#X266D;</span> / C<span class="sharp">&#X266F;</span>',
  },
  aFlat: {
    index: 9,
    display:
      'A<span class="flat">&#X266D;</span> / G<span class="sharp">&#X266F;</span>',
  },
  eFlat: {
    index: 10,
    display:
      'E<span class="flat">&#X266D;</span> / D<span class="sharp">&#X266F;</span>',
  },
  bFlat: {
    index: 11,
    display:
      'B<span class="flat">&#X266D;</span> / A<span class="sharp">&#X266F;</span>',
  },
  f: {
    index: 12,
    display: 'F',
  },
};

export default notes;
