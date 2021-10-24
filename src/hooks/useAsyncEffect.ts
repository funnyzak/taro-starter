import { useEffect } from 'react';

type DependencyList = ReadonlyArray<any>;

function useAsyncEffect(effect: () => Promise<any>, deps: DependencyList) {
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
export default useAsyncEffect;
