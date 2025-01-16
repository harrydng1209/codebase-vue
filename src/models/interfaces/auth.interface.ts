import type { ERole } from '../enums/auth.enum';
import type { TActions, TSubjects } from '../types/auth.type';

export interface IForm {
  email: string;
  fullName: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
  type: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IPermission {
  action: TActions;
  subject: TSubjects;
}

export interface IUserInfo {
  createdAt: string;
  displayName: string;
  email: string;
  id: number;
  role: ERole;
  updatedAt: string;
  username: string;
}
