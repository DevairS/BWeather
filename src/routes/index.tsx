import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Details } from '~/pages';
import { Path } from './routePaths';

const RoutesContainer: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.DETAILS} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routes };

export default RoutesContainer;
