import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const specialty = await SpecialtyService.specialty(payload);
    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: specialty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
      error: error.message,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const specialties = await SpecialtyService.getAllSpecialties();
    res.status(200).json({
      success: true,
      message: "Specialties retrieved successfully",
      data: specialties,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve specialties",
      error: error.message,
    });
  }
};

const getSpecialtyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve specialty",
      error: error.message,
    });
  }
};

const updateSpecialty = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  try {    const specialty = await SpecialtyService.updateSpecialty(id as string, payload);
    if (!specialty) {
      return res.status(404).json({
        success: false,
        message: "Specialty not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Specialty updated successfully",
      data: specialty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update specialty",
      error: error.message,
    });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await SpecialtyService.deleteSpecialty(id as string);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Specialty not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete specialty",
      error: error.message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty
};
