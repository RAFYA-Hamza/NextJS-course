import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // Fetch data from the database

  // Getting the data using prisma client to fetch it from the db
  const user = await prisma.user.findMany();

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  // Validate
  // If invalid, return 404
  // Else, return Data

  const body = await request.json();
  const validation = schema.safeParse(body);

  // validate the entered values using ZOD librery
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  // check if the user already exist based on his email
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User aleady exist!" }, { status: 400 });

  // Creating the data using prisma for saving it on db and send it as a response
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser);
}
