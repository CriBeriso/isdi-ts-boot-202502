import { Response } from "express";
import { CustomRequestBody, UserFromReq } from "../types.js";
import service from "../services/index.js";
import createFunctionalHandler from "../middlewares/createFunctionalHandler.js";

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