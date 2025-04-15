import { Request } from "express";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string
}

export type UserFromReq = Omit<IUser, "id">;

export interface CustomRequestBody<T> extends Request {
  body: T;
}