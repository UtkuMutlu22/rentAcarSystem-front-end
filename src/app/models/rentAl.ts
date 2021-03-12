
import { ResponseModel } from './responseModel';

export interface RentAl extends ResponseModel{
  rentalId: number;
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;

}
