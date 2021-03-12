import { RentAl } from './rentAl';
import { ResponseModel } from './responseModel';

export interface RentalResponseModel extends ResponseModel{
  data: RentAl[];
}
