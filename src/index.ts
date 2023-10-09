import express from "express";
import * as deep from "./utils";

const app = express();
export const port = 3222;

app.get("/", deep.welcome);

app.listen(port, deep.startServer);

// DO NOT CHANGE any of the codes below this line
app.use("/deep", deep.deep);
app.use(deep.RouteNotFoundMiddleware);
app.use(deep.ErrorHandlerMiddleware);
// DO NOT CHANGE any of the codes above this line