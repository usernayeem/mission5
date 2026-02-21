import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { envVars } from "../config/env";

export const globalErrorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (envVars.NODE_ENV === "development") {
    console.log("Error from Global Error Handler", err);
  }

  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    error: err.message,
  });
};
