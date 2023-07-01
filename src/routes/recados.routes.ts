import { Request, Response, Router } from "express";
import { RecadosController } from "../controller/recados.controller";

export const RecadosRoutes = () => {
  const app = Router({
    mergeParams: true,
  });

  app.get("/users/:id/recados", new RecadosController().list);
  app.post("/users/:id/recados", new RecadosController().create);

  return app;
};
