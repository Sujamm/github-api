import { Request, Response } from "express";
import { getCommitByUser } from "./SearchController";

export default [
  {
    path: "/",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getCommitByUser(query.q);
        res.status(200).send(result);
      }
    ]
  }
];