import { data } from "../data";
import validate from "../validations";
import errors from "../errors";
import { User } from "../types";

const {DuplicityError, SystemError} = errors

const registerUser = (username: string, email: string, password: string): Promise<void> => {
  validate.username(username);
  validate.email(email);
  validate.password(password);

  return data.loadCollection<User>("users")
    .catch(error => {
      throw new SystemError(error.message)
    })
    .then(users => {
      const user = users.find(user => user.username === username);

      if (user) {
        throw new DuplicityError("user already exists")
      }

      const newUser: User = {
        id: crypto.randomUUID(),
        username,
        email,
        password
      }

      users.push(newUser);

      return data.saveCollection("users", users)
        .catch(error => {
          throw new SystemError(error.message)
        })
    })
}

export default registerUser;