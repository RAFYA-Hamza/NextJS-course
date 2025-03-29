import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // Fetch data from the database

  return NextResponse.json([
    { id: 1, name: "Hamza" },
    { id: 2, name: "RAFYA" },
  ]);
}

export async function POST(request: NextRequest) {
  // Validate
  // If invalid, return 404
  // Else, return Data

  const body = await request.json();

  if (!body.name)
    return NextResponse.json(
      { error: "This filed is required" },
      { status: 404 }
    );

  return NextResponse.json({ id: 1, name: body.name });
}
