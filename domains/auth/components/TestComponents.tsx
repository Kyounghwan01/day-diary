import React from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import { testStoreType } from '../store/TestStore';

const TestComponents = () => {
  const { testStore } = useStores<{ testStore: testStoreType }>();
  return (
    <div>
      TestComponents{' '}
      <button type="button" onClick={() => testStore.setCount(12)}>
        setsts
      </button>
      {testStore.count}
    </div>
  );
};

export default observer(TestComponents);
