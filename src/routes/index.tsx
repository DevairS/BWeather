import React from 'react';
import { Switch } from 'react-router-dom';
import { Home, Test } from '~/pages';
import Public from './public';
import { Routes } from './routing';

const RoutesContainer: React.FC = () => {
  return (
    <Switch>
      <Public path={Routes.HOME} component={Home} exact />
      <Public path={Routes.TEST} component={Test} />
    </Switch>
  );
};

export { Routes };

export default RoutesContainer;
