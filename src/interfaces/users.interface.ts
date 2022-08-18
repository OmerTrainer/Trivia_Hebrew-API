
export interface IUser {
  id: number;
  name: string;
  f_id: string;
  email: string;
  trophies: number;
  isOnline: boolean;
  searchingForGame: boolean;
  last_sign_in: Date;
  first_sign_in: Date;
  lives: number;
}
 