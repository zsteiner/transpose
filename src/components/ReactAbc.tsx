import abcjs, { AbcVisualParams, Selector } from 'abcjs';
import { useEffect, useRef } from 'react';

import { Container } from '@/types';

export type ReactAbcConfig = AbcVisualParams;

type ReactAbcProps = Container & {
  config: ReactAbcConfig;
  notation: string;
};

export const ReactAbc = ({ className, config, notation }: ReactAbcProps) => {
  const notationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let staffwidth = 100;

    if (notationRef.current) {
      staffwidth = notationRef?.current.clientWidth;
    }

    abcjs.renderAbc(notationRef.current as Selector, notation, { ...config, staffwidth });
  }, [config, notation]);

  return <div className={className} ref={notationRef} />;
}
