import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response ) => {
    const payload = req.body;

    try {
        const specialty = await SpecialtyService.specialty(payload);
        res.status(201).json({
            success: true,
            message: "Specialty created successfully",
            data: specialty
        });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const SpecialtyController = {
    createSpecialty
}