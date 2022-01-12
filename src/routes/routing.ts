export enum Routes {
  HOME = '/',
  TEST = '/test',
}

export type RoutesType = typeof Routes[keyof typeof Routes];
