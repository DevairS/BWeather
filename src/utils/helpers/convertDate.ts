import { format } from 'date-fns';

export const convertDate = (date: number, type: string): string => {
  return format(new Date(date * 1000), type);
};
