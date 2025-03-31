import errors from "./errors";
const { ValidationError } = errors;

const validateUsername = (username: string) => {
  if (typeof username !== "string") {
    throw new ValidationError("Invalid username");
  }
}

const validateEmail = (email: string) => {
  if (typeof email !== "string") {
    throw new ValidationError("Invalid email");
  }
  
  if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  ) {
    throw new ValidationError("Invalid email");
  }
}

const validatePassword = (password: string) => {
  if (typeof password !== "string") {
    throw new ValidationError("Invalid password");
  }

  if (password.length < 8) {
    throw new ValidationError("Invalid password length");
  }
}

const validate = {
  username: validateUsername,
  email: validateEmail,
  password: validatePassword
}

export default validate;