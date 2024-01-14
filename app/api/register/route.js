
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { email, firstName, lastName, password, emailVerified, address } = body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      emailVerified,
      hashedPassword,  // Use the correct field name
      address,
    },
  });

  return NextResponse.json(user);
}
