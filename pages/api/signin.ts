import type { NextApiRequest, NextApiResponse } from 'next';

export interface User {
  name: string;
  age: number;
  address: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  res.status(200).json({ name: '비사이드 스타터팀', age: 10, address: '서울시' });
}
