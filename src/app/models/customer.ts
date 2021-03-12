
import { ResponseModel } from './responseModel';
export interface Customer extends ResponseModel{
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
}
