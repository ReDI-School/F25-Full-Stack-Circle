import React, { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<Nullable<HTMLElement>>,
  handler: (event: MouseEvent | TouchEvent) => void,
  dependencies = []
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ...dependencies]);
};
