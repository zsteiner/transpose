'use client'
import abcjs, { Selector } from 'abcjs';
import { use, useEffect, useRef } from 'react';

import writeNotation from '@/utils/writeNotation';

type NotationProps = {
  notes: string[];
  notationKey: string;
  transposeSteps: number;
};

export const Notation = ({ notes, notationKey, transposeSteps }: NotationProps) => {
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
      visualTranspose: transposeSteps,
    });
  }, [notationRef]);


  return (
    <div ref={notationRef} />
  )
}
