import React from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import { testStoreType } from '../store/TestStore';

const TestComponents = () => {
  const { testStore } = useStores<{ testStore: testStoreType }>();
  return (
    <div>
      TestComponents{' '}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button type="button" onClick={() => testStore.setCount(12)}>
        setsts
      </button>
      {testStore.count}
    </div>
  );
};

export default observer(TestComponents);
