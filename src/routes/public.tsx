import React from 'react';
import { Route } from 'react-router-dom';

type Props = {
  path: string;
  component: React.ElementType;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element => <Component {...props} />}
    />
  );
};

export default PublicRoute;
