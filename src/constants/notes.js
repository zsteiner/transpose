const notes = [
  { note: 'c', display: 'C', notation: 'C' },
  { note: 'g', display: 'G', notation: 'G' },
  { note: 'd', display: 'D', notation: 'D' },
  { note: 'a', display: 'A', notation: 'A' },
  { note: 'e', display: 'E', notation: 'E' },
  { note: 'b', display: 'B', notation: 'B' },
  {
    note: 'fSharp',
    display:
      'F<span class="sharp">&#X266F;</span> / G<span class="flat">&#X266D;</span>',
    notation: '^F',
  },
  {
    note: 'cSharp',
    display:
      'D<span class="flat">&#X266D;</span> / C<span class="sharp">&#X266F;</span>',
    notation: '^C',
  },
  {
    note: 'aFlat',
    display:
      'A<span class="flat">&#X266D;</span> / G<span class="sharp">&#X266F;</span>',
    notation: '_E',
  },
  {
    note: 'eFlat',
    display:
      'E<span class="flat">&#X266D;</span> / D<span class="sharp">&#X266F;</span>',
    notation: '^F',
  },
  {
    note: 'bFlat',
    display:
      'B<span class="flat">&#X266D;</span> / A<span class="sharp">&#X266F;</span>',
    notation: '_B',
  },
  {
    note: 'f',
    display: 'F',
    notation: 'F',
  },
];

export default notes;
