import { Specialty } from "../../generated/prisma/client";
import { SpecialtyCreateInput } from "../../generated/prisma/models";
import { prisma } from "../lib/prisma";


const specialty = async (payload : SpecialtyCreateInput) : Promise<Specialty> => {

    const specialty = await prisma.specialty.create({
        data : payload
    })

    return specialty;
}

export const SpecialtyService = {
    specialty
}