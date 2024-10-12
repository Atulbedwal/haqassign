// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { phoneNumber } = req.body;

    // Replace this with actual login logic, e.g., checking a database
    if (phoneNumber === '1234567890') { // Example condition
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid phone number' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}