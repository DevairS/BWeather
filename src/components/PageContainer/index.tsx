import { FC } from 'react';

import { Container } from './styles';

type Props = {
  wallpaperPath: string;
};

const PageContainer: FC<Props> = ({ wallpaperPath, children }) => {
  return <Container wallpaperPath={wallpaperPath}>{children}</Container>;
};

export default PageContainer;
