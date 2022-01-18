export enum Path {
  HOME = '/',
  DETAILS = '/details',
}

export type RoutesType = typeof Path[keyof typeof Path];
