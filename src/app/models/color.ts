import { ResponseModel } from './responseModel';

export interface Color extends ResponseModel{
  colorId: number;
  colorName: string;
}
