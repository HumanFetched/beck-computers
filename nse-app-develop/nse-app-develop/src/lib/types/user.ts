export type UserTypes = 'user';

export type PasswordValidationType =
  | '1Lower'
  | '1Upper'
  | '1Special'
  | 'length';
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImage: string;
  companyName?: string;
  country?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  vatOrGstNumber?: string;
  dialCode?: string;
}
