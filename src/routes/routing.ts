export enum Routes {
  HOME = '/',
}

export type RoutesType = typeof Routes[keyof typeof Routes];
