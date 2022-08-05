import React from 'react';
import { observer, Provider, useLocalObservable } from 'mobx-react';
import TestStore from '@domains/auth/store/TestStore';
import TestComponents from '@domains/auth/components/TestComponents';
import BottomBar from '@domains/common/components/BottomBar';
import HeaderBar from '@domains/common/components/HeaderBar';

/**
 *
 * w-60 -> 60rem
 * w-1/2 -> 50%
 * w-px
 */

const Home = () => {
  const testStore = useLocalObservable(TestStore);
  return (
    <Provider testStore={testStore}>
      <div className="relative h-screen py-12">
        <HeaderBar />
        <div className="m-8 p-8 h-20 w-50 space-y-8 bg-red-100 rounded space-x-4 ">
          <span className="bg-blue-400 rounded">123</span>

          <span className="w-20 bg-blue-100 rounded">wdwdwd</span>

          <span className="w-20 bg-blue-100 rounded">ccc</span>
        </div>
        <TestComponents />

        <div className="m-8 p-8 h-40 bg-yellow-100 flex justify-around items-center">
          <div className="m-2 p-2 bg-blue-100">1</div>
          <div className="m-2 p-2 bg-blue-200">2</div>
          <div className="m-2 p-2 bg-blue-300">3</div>
        </div>

        <BottomBar />
      </div>
    </Provider>
  );
};

export default observer(Home);
