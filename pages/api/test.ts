import type { NextApiRequest, NextApiResponse } from "next";

export interface User {
  name: string;
  age: number;
  address: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const data = req.body;
  console.log(data);
  res.status(200).json(data);
}
