import { Request, Response, NextFunction } from "express";

export const catchAsync = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch",
        error: error.message,
      });
    }
  };
};
