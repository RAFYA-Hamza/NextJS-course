import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // Fetch data from the database

  const user = await prisma.user.findMany();

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  // Validate
  // If invalid, return 404
  // Else, return Data

  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
