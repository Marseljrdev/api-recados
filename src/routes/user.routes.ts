import { Router } from "express"
import { UserController } from "../controller/user.controller";
import { UserMiddlewares } from "../middlewares/user.middlewares";


export const UserRoutes = () => {
    const app = Router({
        mergeParams: true
    });

    app.get('/users', new UserController().list);
    app.get('/users/:id', new UserController().obter);
    app.post('/users', [UserMiddlewares.checkingDuplicateCpf], new UserController().create);
    app.post('/users/login', new UserController().login);

    return app;
}