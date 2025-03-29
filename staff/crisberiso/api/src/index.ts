import express, { json, Request, Response } from "express";
import "dotenv/config.js";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import {User, UserFromReq, CustomRequestBody} from "./types";
import "crypto"

const USERS_DB_PATH = path.join(process.cwd(), "src", "database", "users.json") //forma de hacer una ruta dinámica

const api = express();

const PORT = process.env.PORT || 7500;

const jsonBodyParser = json();

api.get("/ping", (_req: Request, res: Response) => {
  res.json({ message: "pong 🏓" });
})

api.post("/users", jsonBodyParser, (req: CustomRequestBody<UserFromReq>, res: Response) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    res.status(400).json({ message: "invalid fields" });
    return;
  }

  return readFile(USERS_DB_PATH, "utf-8")
    .then(data => JSON.parse(data) as User[])
    .then(users => {
      const user = users.find(user => user.username === username);

      if (user) {
        res.status(409).json({message: "user already exists"})
        
        return;
      }

      const newUser: User = {
        id: crypto.randomUUID(),
        username,
        email,
        password
      }

      users.push(newUser);

      writeFile(USERS_DB_PATH, JSON.stringify(users, null, 2)) // TODO preguntar a frank: aqui en la clase del martes al poner el return delante de writeFile te chillaba el ts, pero a mí no, funciona igualmente todo, por que?
        .then(() => {
          res.status(201).send();
        })
    })
})

api.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))