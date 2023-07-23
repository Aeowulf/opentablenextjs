import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';
import { JWT_SECRET } from './env_substitution';
export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerToken = req.headers.get('authorization') as string;

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: 'Unauthorized request' }),
      { status: 401 }
    );
  }

  const token = bearerToken.split(' ')[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: 'Unauthorized request' }),
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(JWT_SECRET())

  console.log(secret)

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: 'Unauthorized request boop' }),
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ['/api/auth/me'],
};