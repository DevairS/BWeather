declare namespace Weather {
  type Condition = {
    id: number;
    main: string;
    description: string;
    icon: Icon.Name;
  };

  type Temp = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  type Data = {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Condition[];
    base: string;
    main: Temp;
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
    dt_txt: string;
    main: Temp;
    pop: number;
    sys: {
      pod: string;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    weather: Condition[];
  };
}
