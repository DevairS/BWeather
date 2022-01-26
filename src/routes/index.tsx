import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageContainer } from '~/components';
import { useStores } from '~/hooks';
import { Home, Details } from '~/pages';
import { Path } from './routePaths';

const RoutesContainer: FC = () => {
  const { app, weather } = useStores();
  return (
    <BrowserRouter>
      <PageContainer wallpaperPath={app.wallpaperPath}>
        <Routes>
          <Route path={Path.HOME} element={<Home />} />
          {!weather.weatherData ? (
            <Route path={Path.DETAILS} element={<Navigate to={Path.HOME} />} />
          ) : (
            <Route path={Path.DETAILS} element={<Details />} />
          )}
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
};

export { Path };

export default observer(RoutesContainer);
