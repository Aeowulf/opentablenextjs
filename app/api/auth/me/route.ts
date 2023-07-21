import { NextResponse, NextRequest } from "next/server"
import validator from "validator"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import * as jose from 'jose'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function GET(request : NextRequest, response : NextResponse) {
  const bearerToken = request.headers.get('authorization')

  if (!bearerToken) {
    return NextResponse.json(
      {errorMessage : 'Unauthorized Request'}, 
      {status : 401}
    )
  }

  const token = bearerToken.split(' ')[1]

  if (!token) {
    return NextResponse.json(
      {errorMessage : 'Unauthorized Request'}, 
      {status : 401}
    )
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  try {
    await jose.jwtVerify(token, secret)
  } catch {
    return NextResponse.json(
      {errorMessage : `Unauthorized Request`}, 
      {status : 401}
    )
  }

  const payload = jwt.decode(token) as {email : string}

  if (!payload.email) {
    return NextResponse.json(
      {errorMessage : `Unauthorized Request`}, 
      {status : 401}
    )
  }

  const user = await prisma.user.findUnique({
    where : {
      email : payload.email
    },
    select : {
      id : true,
      first_name : true,
      last_name : true,
      email : true,
      city : true,
      phone : true,
    }
  })

  return NextResponse.json({ user })
}