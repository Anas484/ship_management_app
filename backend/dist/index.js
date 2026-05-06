import 'dotenv/config';
import express from "express";
import { AuthRouter } from "./routes/AuthRouter.js";
import { UserRouter } from './routes/UserRouter.js';
import { ShipRouter } from './routes/ShipRouter.js';
import cors from 'cors';
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/ship", ShipRouter);
app.use("/api/v1/shipDetails", ShipRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map