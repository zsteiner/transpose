import abcjs, { AbcVisualParams, Selector } from 'abcjs';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width after layout
  useLayoutEffect(() => {
    if (notationRef.current) {
      setContainerWidth(notationRef.current.clientWidth);
    }
  }, [notation]);

  // Observe container resize
  useEffect(() => {
    if (!notationRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(notationRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    let staffwidth = rest.staffwidth || containerWidth || 100;

    if (notationRef.current && containerWidth) {
      staffwidth = containerWidth;
    }

    abcjs.renderAbc(notationRef.current as Selector, notation, {
      ...rest,
      paddingbottom,
      paddingleft,
      paddingright,
      paddingtop,
      staffwidth,
    });
  }, [
    containerWidth,
    notation,
    paddingbottom,
    paddingleft,
    paddingright,
    paddingtop,
    rest,
  ]);

  return (
    <div
      className={className}
      ref={notationRef}
      style={{ inlineSize: '100%' }}
    />
  );
};
