import React from 'react';
import styled from 'styled-components';
import { observer, Provider, useLocalObservable } from 'mobx-react';
import TestStore from '@domains/auth/store/TestStore';
import TestComponents from '@domains/auth/components/TestComponents';

const Home = () => {
  const testStore = useLocalObservable(TestStore);
  return (
    <Provider testStore={testStore}>
      awd<StyleTest>awdawd </StyleTest>
      <TestComponents />
    </Provider>
  );
};

const StyleTest = styled.div`
  background-color: blue;
`;

export default observer(Home);
