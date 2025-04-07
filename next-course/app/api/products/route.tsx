import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

interface Product {
  id: number;
  name: string;
  price: number;
}

export async function GET(request: NextRequest) {
  const products: Product[] = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
