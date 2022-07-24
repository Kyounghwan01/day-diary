import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

function useStore<T>(): T {
  const stores = useContext(MobXProviderContext);
  return stores as T;
}

export default useStore;
