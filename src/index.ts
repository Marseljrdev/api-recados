import express from "express";
import cors from "cors";
import { UserRoutes } from "./routes/user.routes";
import { RecadosRoutes } from "./routes/recados.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", UserRoutes());
app.use("/", RecadosRoutes());

app.listen(3333, () => {
  console.log("api is running...");
});
