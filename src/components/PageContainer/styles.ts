import styled from 'styled-components';

interface Wallpaper {
  wallpaperPath: string;
}

export const Container = styled.div<Wallpaper>`
  width: 100%;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.wallpaperPath})`};
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
