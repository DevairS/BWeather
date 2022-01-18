import { format } from 'date-fns';

export const convertDate = (date: number): string => {
  return format(new Date(date * 1000), 'HH:mm:ss');
};
