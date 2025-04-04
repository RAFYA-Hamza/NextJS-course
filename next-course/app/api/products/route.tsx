import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

interface Product {
  id: number;
  name: string;
  price: number;
}

export function GET(request: NextRequest) {
  const products: Product[] = [
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 3.5 },
  ];

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}
