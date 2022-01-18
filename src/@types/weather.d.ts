declare namespace Weather {
  type Condition = {
    id: number;
    main: string;
    description: string;
    icon: Icon.Name;
  };

  type Data = {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Condition[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      speedFormat: string;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      message: number;
      country: string;
      sunrise: number;
      sunset: number;
      sunriseFormat?: string;
      sunsetFormat?: string;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };

  type Forecast = {
    dt: number;
    feels_like: {
      day: number;
      eve: number;
      morn: number;
      night: number;
    };
    temp: {
      day: number;
      eve: number;
      max: number;
      min: number;
      morn: number;
      night: number;
    };
    weather: Condition[];
  };
}
