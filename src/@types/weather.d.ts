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
}
