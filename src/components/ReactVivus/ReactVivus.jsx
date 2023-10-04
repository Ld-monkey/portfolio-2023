import { useRef, useEffect } from 'react';
import Vivus from 'vivus';

const builtInAnimTimingFunction = {
  EASE: Vivus.EASE,
  EASE_IN: Vivus.EASE_IN,
  EASE_OUT: Vivus.EASE_OUT,
  EASE_OUT_BOUNCE: Vivus.EASE_OUT_BOUNCE,
};

function ReactVivus(props) {
  const { id, option, callback, style, className, replay } = props;
  let combinedOptions = option;
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      if (option.animTimingFunction) {
        combinedOptions = {
          ...combinedOptions,
          animTimingFunction: builtInAnimTimingFunction[option.animTimingFunction],
        };
      }

      if (option.pathTimingFunction) {
        combinedOptions = {
          ...combinedOptions,
          pathTimingFunction: builtInAnimTimingFunction[option.pathTimingFunction],
        };
      }
      const vivus = new Vivus(id, combinedOptions, callback);
      replay(vivus);
    }

    // cleanup
    return () => {
      mounted.current = true;
    };
  }, []);

  return <div id={id} className={className} style={style} />;
}

export default ReactVivus;
