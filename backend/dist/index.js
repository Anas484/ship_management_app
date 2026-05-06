import 'dotenv/config';
import express from "express";
import { AuthRouter } from "./routes/AuthRouter.js";
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/auth", AuthRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map