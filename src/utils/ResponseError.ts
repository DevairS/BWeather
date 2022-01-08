/* eslint-disable @typescript-eslint/no-empty-function */
import { AxiosError } from 'axios';

const defaultErrorMessage =
  'Erro inesperado. Verifique sua internet e tente novamente.';

export default class ResponseError {
  message = '';

  error = 0;

  // eslint-disable-next-line no-useless-constructor
  constructor({ response }: AxiosError) {}
}
