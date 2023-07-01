import { Request, Response } from "express";
import { users } from "../database/users.database";
import { User } from "../models/user.models";

export class UserController {
  public list(req: Request, res: Response) {
    try {
      const resultUser = users;

      if (!resultUser) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).send({
        success: true,
        message: "User were successfully",
        data: resultUser.map((user) => user.toJson()),
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: "Servidor em manutenção, tente novamente mais tarde",
      });
    }
  }

  public obter(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getId = users.find((user) => user.id === id);

      if (!getId) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Id user were successfully",
        data: getId.toJson(),
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
      const { name, cpf, email, password } = req.body;

      if (!name) {
        return res.status(400).send({
          success: false,
          message: "Name was not providded",
        });
      }

      if (!cpf) {
        return res.status(400).send({
          success: false,
          message: "Cpf was not providded",
        });
      }

      if (!email) {
        return res.status(400).send({
          success: false,
          message: "E-mail was not providded",
        });
      }

      if (!password) {
        return res.status(400).send({
          success: false,
          message: "Password was not providded",
        });
      }

      const newUser = new User(name, cpf, email, password);
      users.push(newUser);

      return res.status(201).send({
        success: true,
        message: "User was created successfully",
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: "Servidor em manutenção, tente novamente mais tarde",
      });
    }
  }

  public login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.status(400).send({
          success: false,
          message: "Email was not providded",
        });
      }

      if (!password) {
        return res.status(400).send({
          success: false,
          message: "Password was not providded",
        });
      }

      const getUser = users.find((user) => user.email === email);
      console.log(getUser);

      if (!getUser) {
        return res.status(404).send({
          success: false,
          message: "Usuario nao existe",
        });
      }

      if (getUser.password !== password) {
        return res.status(401).send({
          success: false,
          message: "Acesso nao autorizado",
        });
      }

      return res.status(200).send({
        success: true,
        message: "User is logged",
        data: {
          id: getUser.id,
          name: getUser.name,
          email: getUser.email,
          password: getUser.password,
        },
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: "Servidor em manutenção, tente novamente mais tarde",
      });
    }
  }
}
