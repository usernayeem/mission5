import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

interface IRegisterPatientPayload {
  name: string;
  email: string;
  password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
  const { name, email, password } = payload;

  const register = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  if (!register.user) {
    throw new Error("Failed to register patient");
  }

  return register;
};

export const AuthService = {
  registerPatient,
};
