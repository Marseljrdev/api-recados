import { Request, Response, NextFunction } from "express";
import { users } from "../database/users.database";

export class UserMiddlewares {
  public static checkingDuplicateCpf(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { cpf } = req.body;

      const getCpf = users.find((user) => user.cpf === cpf);

      if (getCpf) {
        return res.status(400).send({
          success: false,
          message: "Cpf already exists",
        });
      }

      next();
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: "Erro interno no servidor, tente novamente mais tarde",
      });
    }
  }
}
