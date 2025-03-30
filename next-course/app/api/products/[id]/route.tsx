import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 11)
    return NextResponse.json(
      { error: "This product doesn't exist" },
      { status: 404 }
    );

  return NextResponse.json({
    id: params.id,
    name: `Product ${params.id}`,
    price: params.id * 2,
  });
}
