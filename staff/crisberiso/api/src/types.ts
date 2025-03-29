import { Request } from "express";

export type User = {
  id: string;
  username: string;
  email: string;
  password: string
}

export type UserFromReq = Omit<User, "id">;

export interface CustomRequestBody<T> extends Request {
  body: T;
}