import { FC } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  path: string;
  component: React.ElementType;
  exact?: boolean;
};

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element => <Component {...props} />}
    />
  );
};

export default PublicRoute;
