import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

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

  // Create Patient Profile In Transaction After Sign Up Of Patient In USer Model
  try {
    const patient = await prisma.$transaction(async (tx) => {
      const patientTx = await tx.patient.create({
        data: {
          userId: register.user.id,
          name: payload.name,
          email: payload.email,
        },
      });
      return patientTx;
    });

    return { ...register, patient };
  } catch (error) {
    await prisma.user.delete({
      where: {
        id: register.user.id,
      },
    });
    throw error;
  }
};

interface ILoginUserPayload {
  email: string;
  password: string;
}

const loginUser = async (payload: ILoginUserPayload) => {
  const { email, password } = payload;

  const login = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if (login.user.status === UserStatus.Blocked) {
    throw new Error("User is blocked");
  }

  if (login.user.isDeleted || login.user.status === UserStatus.Deleted) {
    throw new Error("User is deleted");
  }

  return login;
};

export const AuthService = {
  registerPatient,
  loginUser,
};
