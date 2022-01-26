declare namespace Weather {
  type Condition = {
    id: number;
    main: string;
    description: string;
    icon: Icon.Name;
  };

  type Current = {
    weather: Condition[];
    main: {
      temp: number;
      feelsLike: number;
      tempMin: number;
      tempMax: number;
      humidity: number;
    };
    wind: {
      speed: number;
      speedFormat: string;
    };
    sys: {
      sunrise: string;
      sunset: string;
    };
    name: string;
  };

  type Forecast = {
    dt: number;
    temp: {
      day: number;
    };
    weather: Condition[];
  };
}
