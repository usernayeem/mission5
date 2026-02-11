import { Specialty } from "../../generated/prisma/client";
import { SpecialtyCreateInput } from "../../generated/prisma/models";
import { prisma } from "../lib/prisma";

const specialty = async (payload: SpecialtyCreateInput): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: payload,
  });

  return specialty;
};

const getAllSpecialties = async (): Promise<Specialty[]> => {
  const specialties = await prisma.specialty.findMany();
  return specialties;
};

const getSpecialtyById = async (id: string): Promise<Specialty | null> => {
  const specialty = await prisma.specialty.findUnique({
    where: { id },
  });
  return specialty;
};

const updateSpecialty = async (
  id: string,
  payload: SpecialtyCreateInput,
): Promise<Specialty | null> => {
  const existingSpecialty = await prisma.specialty.findUnique({
    where: { id },
  });

  if (!existingSpecialty) {
    return null;
  }

  const updatedSpecialty = await prisma.specialty.update({
    where: { id },
    data: payload,
  });

  return updatedSpecialty;
};

const deleteSpecialty = async (id: string): Promise<boolean> => {

  const existingSpecialty = await prisma.specialty.findUnique({
    where: { id }
  });

  if (!existingSpecialty) {
    return false;
  }

  await prisma.specialty.delete({
    where: { id }
  });

  return true;
};

export const SpecialtyService = {
  specialty,
  getAllSpecialties,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty,
};
