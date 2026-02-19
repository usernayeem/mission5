import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const specialty = await SpecialtyService.specialty(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Specialty created successfully",
    data: specialty,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const specialties = await SpecialtyService.getAllSpecialties();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialties retrieved successfully",
    data: specialties,
  });
});

const getSpecialtyById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.getSpecialtyById(id as string);
  if (!specialty) {
    return sendResponse(res, {
      httpStatusCode: 404,
      success: false,
      message: "Specialty not found",
    });
  }
  sendResponse(res, {
    httpStatusCode: 200,
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
    return sendResponse(res, {
      httpStatusCode: 404,
      success: false,
      message: "Specialty not found",
    });
  }
  sendResponse(res, {
    httpStatusCode: 200,
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
  sendResponse(res, {
    httpStatusCode: 200,
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
