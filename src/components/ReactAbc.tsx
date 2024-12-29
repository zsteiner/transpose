import abcjs, { AbcVisualParams, Selector } from 'abcjs';
import { useEffect, useRef } from 'react';

import { Container } from '@/types';

export type ReactAbcConfig = AbcVisualParams;

type ReactAbcProps = Container &
  ReactAbcConfig & {
    isResponsive?: boolean;
    notation: string;
  };

export const ReactAbc = ({
  className,
  notation,
  paddingbottom = 0,
  paddingleft = 0,
  paddingright = 0,
  paddingtop = 0,
  ...rest
}: ReactAbcProps) => {
  const notationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let staffwidth = rest.staffwidth || 100;

    if (notationRef.current) {
      staffwidth = notationRef?.current.clientWidth;
    }

    abcjs.renderAbc(notationRef.current as Selector, notation, {
      ...rest,
      paddingbottom,
      paddingleft,
      paddingright,
      paddingtop,
      staffwidth,
    });
  }, [notation, paddingbottom, paddingleft, paddingright, paddingtop, rest]);

  return (
    <div
      className={className}
      ref={notationRef}
    />
  );
};
