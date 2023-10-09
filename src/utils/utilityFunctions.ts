import { Request, Response } from "express";
import { port } from "..";

export const startServer = () => {
  console.log(
    `\x1b[32m⚡️[server]\x1b[0m: Server is running at http://localhost:${port}\n\x1b[32m⚡️[server]\x1b[0m: Press Ctrl + C to stop the server`,
  );
};

export const welcome = (req: Request, res: Response) => {
  console.log(
    `\x1b[32m⚡️[server]\x1b[0m: Welcome to DEEP - Learning Backend Development!`,
  );
  res.send("Welcome to DEEP - Learning Backend Development! 🚀");
};
