import { NextResponse, NextRequest } from "next/server"
import validator from 'validator'
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import * as jose from 'jose'

const prisma = new PrismaClient()

export async function GET(request : NextRequest, response : NextResponse) {
  return NextResponse.json({
    'hello' : 'there'
  })
}

export async function POST(
  request : NextRequest, 
  response : NextResponse
) {
  const { firstName, lastName, email, phone, city, password} = await request.json()

  const errors : string[] = []

  const validationSchema = [
    {
      valid: validator.isLength(firstName, { min: 1, max: 20 }),
      errorMessage: 'First name must be between 1 and 20 characters long.'
    },
    {
      valid: validator.isLength(lastName, { min: 1, max: 20 }),
      errorMessage: 'Last name must be between 1 and 20 characters long.'
    },
    {
      valid: validator.isEmail(email),
      errorMessage: 'Email must be a valid email address.'
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: 'Phone number is invalid.'
    },
    {
      valid: validator.isLength(city, { min: 1 }),
      errorMessage: 'City is invalid.'
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: 'Password must be stronger.'
    },
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

  if (userWithEmail) {
    return NextResponse.json({errorMessage : 'Email already associated with an account.'}, {status : 400})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      password: hashedPassword,
      city,
      phone,
      email,
    }
  })

  const alg = 'HS256'

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const token = await new jose.SignJWT({ email : user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime('24h')
    .sign(secret)

  return NextResponse.json({token}, {status : 200})
}
