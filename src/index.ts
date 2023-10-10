import express from "express";
import * as deep from "./utils";

const app = express();
export const port = 3222;
app.use(express.json());

app.listen(port, deep.startServer);

export default app;
