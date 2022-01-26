import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageContainer } from '~/components';
import { useStores } from '~/hooks';
import { Home, Details } from '~/pages';
import { Path } from './routePaths';

const RoutesContainer: FC = () => {
  const { app } = useStores();
  console.log(app.wallpaperPath);
  return (
    <BrowserRouter>
      <PageContainer wallpaperPath={app.wallpaperPath}>
        <Routes>
          <Route path={Path.HOME} element={<Home />} />
          <Route path={Path.DETAILS} element={<Details />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
};

export { Routes };

export default observer(RoutesContainer);
