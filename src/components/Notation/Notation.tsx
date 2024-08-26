'use client'
import abcjs, { Selector } from 'abcjs';
import { useEffect, useRef } from 'react';

import { Container } from '@/types';
import writeNotation from '@/utils/writeNotation';

import { NotesDisplay } from '../NotesDisplay/NotesDisplay';

type NotationProps = Container & {
  notes: string[];
  notationKey: string;
  transposeSemitones: number;
};

export const Notation = ({ className, notes, notationKey, transposeSemitones }: NotationProps) => {
  const notation = `L:4/4\nK:${notationKey}\n${writeNotation(notes)}`;
  const notationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let staffwidth = 100;

    if (notationRef.current) {
      staffwidth = notationRef?.current.clientWidth;
    }

    abcjs.renderAbc(notationRef.current as Selector, notation, {
      paddingleft: 0,
      paddingright: 0,
      paddingtop: 0,
      paddingbottom: 0,
      viewportHorizontal: false,
      responsive: 'resize',
      staffwidth,
      visualTranspose: transposeSemitones,
    });
  }, [notationRef, notation, transposeSemitones]);


  return (
    <div>
      <div className={className} ref={notationRef} />
      <NotesDisplay notes={notes} />
    </div>
  )
}
