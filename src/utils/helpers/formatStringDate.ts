import { parseISO, format } from 'date-fns';

export const formatStringDate = (date: string, type: string): string => {
  const parseDate = parseISO(date);
  return format(parseDate, type);
};
