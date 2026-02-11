import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../shared/catchAsync";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const specialty = await SpecialtyService.specialty(payload);
  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: specialty,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const specialties = await SpecialtyService.getAllSpecialties();
  res.status(200).json({
    success: true,
    message: "Specialties retrieved successfully",
    data: specialties,
  });
});

const getSpecialtyById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.getSpecialtyById(id as string);
  if (!specialty) {
    return res.status(404).json({
      success: false,
      message: "Specialty not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Specialty retrieved successfully",
    data: specialty,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedSpecialty = await SpecialtyService.updateSpecialty(
    id as string,
    payload,
  );
  if (!updatedSpecialty) {
    return res.status(404).json({
      success: false,
      message: "Specialty not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Specialty updated successfully",
    data: updatedSpecialty,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const isDeleted = await SpecialtyService.deleteSpecialty(id as string);
  if (!isDeleted) {
    return res.status(404).json({
      success: false,
      message: "Specialty not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Specialty deleted successfully",
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty,
};
