const notes = [
  { position: 1, note: 'c', display: 'C', notation: 'C' },
  { position: 2, note: 'g', display: 'G', notation: 'G' },
  { position: 3, note: 'd', display: 'D', notation: 'D' },
  { position: 4, note: 'a', display: 'A', notation: 'A' },
  { position: 5, note: 'e', display: 'E', notation: 'E' },
  { position: 6, note: 'b', display: 'B', notation: 'B' },
  {
    position: 7,
    note: 'gFlat',
    display:
      'F<span class="sharp">&#X266F;</span> / G<span class="flat">&#X266D;</span>',
    notation: '_G',
    notationSharp: '^F',
  },
  {
    position: 8,
    note: 'dFlat',
    display:
      'D<span class="flat">&#X266D;</span> / C<span class="sharp">&#X266F;</span>',
    notation: '_D',
    notationSharp: '^C',
  },
  {
    position: 9,
    note: 'aFlat',
    display:
      'A<span class="flat">&#X266D;</span> / G<span class="sharp">&#X266F;</span>',
    notation: '_A',
    notationSharp: '^G',
  },
  {
    position: 10,
    note: 'eFlat',
    display:
      'E<span class="flat">&#X266D;</span> / D<span class="sharp">&#X266F;</span>',
    notation: '_E',
    notationSharp: '^D',
  },
  {
    position: 11,
    note: 'bFlat',
    display:
      'B<span class="flat">&#X266D;</span> / A<span class="sharp">&#X266F;</span>',
    notation: '_B',
    notationSharp: '^A',
  },
  {
    position: 12,
    note: 'f',
    display: 'F',
    notation: 'F',
  },
];

export default notes;
