import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch data from the database
  // if not found, return 404 error
  // else, return data

  if (params.id > 10)
    return NextResponse.json(
      { error: "The user doesn't exist" },
      { status: 404 }
    );

  return NextResponse.json({ id: 1, name: "Hamza" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  // Fetch user with the given id
  // if doesn't exist, return 404

  if (params.id > 11)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Update the user
  // Return the updated user

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 11)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ status: 200 });
}
