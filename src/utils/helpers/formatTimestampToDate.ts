import { format } from 'date-fns';

export const formatTimestampToDate = (date: number, type: string): string => {
  return format(new Date(date * 1000), type);
};
