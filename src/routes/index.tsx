import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '~/pages';
import Public from './public';
import { Routes } from './routing';

const RoutesContainer: React.FC = () => {
  return (
    <Switch>
      <Public path={Routes.HOME} component={Home} />
    </Switch>
  );
};

export { Routes };

export default RoutesContainer;
