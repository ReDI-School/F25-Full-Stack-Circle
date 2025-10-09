import { useCallback, useState } from 'react';

type useStateToggleHandlersType = (
  defaultState?: boolean
) => [boolean, VoidFunction, VoidFunction, VoidFunction];

export const useStateToggleHandlers: useStateToggleHandlersType = (defaultState = false) => {
  const [state, setState] = useState(defaultState);

  const memoizedEnableState = useCallback(() => setState(true), []);
  const memoizedDisableState = useCallback(() => setState(false), []);
  const memoizedToggleState = useCallback(() => setState((prev) => !prev), []);

  return [state, memoizedEnableState, memoizedDisableState, memoizedToggleState];
};
