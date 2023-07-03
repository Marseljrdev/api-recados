import { Request, Response } from "express";
import { users } from "../database/users.database";
import { recados } from "../database/recados.database";
import { Recados } from "../models/recados.models";

export class RecadosController {
  public list(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = users.find((user) => user.id === id);

      if (!result) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Recados was successfully listed",
        data: result.recados?.map((item) => item.toJson()),
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: "Servidor em manutenção, tente novamente mais tarde",
      });
    }
  }

  public create(req: Request, res: Response) {
    try {
      const { descricao, detalhes } = req.body;

      if (!descricao) {
        return res.status(400).send({
          success: false,
          message: "Descricao was not providded",
        });
      }

      if (!detalhes) {
        return res.status(400).send({
          success: false,
          message: "Detalhes was not providded",
        });
      }

      const newRecado = new Recados(descricao, detalhes);
      recados.push(newRecado);

      return res.status(200).send({
        success: true,
        message: "Recados added successfully",
        // data: newRecado.toJson(),
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: "Servidor em manutenção, tente novamente mais tarde",
      });
    }
  }
}
