import { Response } from "express";
import { CustomRequestBody, UserFromReq } from "../types";
import service from "../services";
import createFunctionalHandler from "../middlewares/createFunctionalHandler";

const registerUserHandler = createFunctionalHandler<UserFromReq>(
  (req: CustomRequestBody<UserFromReq>, res: Response) => {
    const { username, email, password } = req.body;

    return service.registerUser(username, email, password)
      .then(() => {
        res.status(201).send
      }); 
  }
)

export default registerUserHandler;