export const validationWallpaper = (wallpaper: string): boolean => {
  const wallpaperValid: Wallpaper.Name[] = [
    'Thunderstorm-11d',
    'Drizzle-09d',
    'Rain-10d',
    'Snow-13d',
    'Clear-01d',
    'Clear-01n',
    'Clouds-02d',
    'Clouds-02n',
  ];

  const valid = wallpaperValid.find((elem) => elem === wallpaper);
  if (valid) return true;
  return false;
};
