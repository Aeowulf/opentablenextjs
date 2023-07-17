import { NextResponse, NextRequest } from "next/server"
import validator from "validator"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import * as jose from 'jose'

const prisma = new PrismaClient()

export async function POST(request : NextRequest, response : NextResponse) {
  const errors: string[] = []
  
  const { email, password} = await request.json()

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: 'Email is invalid. Try again.'
    },
    {
      valid: validator.isLength(password, { min: 1 }),
      errorMessage: 'Password is invalid. Try again.'
    }
  ]

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage)
    }
  })

  if (errors.length) {
    return NextResponse.json({errorMessage : errors[0]}, {status : 400})
  }

  const userWithEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!userWithEmail) {
    return NextResponse.json(
      {errorMessage : 'Email or password is invalid.'}, 
      {status : 401}
    )
  }

  const isMatch = await bcrypt.compare(password, userWithEmail.password)

  if (!isMatch) {
    return NextResponse.json(
      {errorMessage : 'Email or password is invalid.'}, 
      {status : 401}
    )
  }

  const alg = 'HS256'

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const token = await new jose.SignJWT({ email : userWithEmail.email })
    .setProtectedHeader({ alg })
    .setExpirationTime('24h')
    .sign(secret)

  return NextResponse.json({token}, {status : 200})
}