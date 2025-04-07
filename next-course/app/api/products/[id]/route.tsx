import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId: number = parseInt(params.id);

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product)
    return NextResponse.json(
      { error: "This product doesn't exist" },
      { status: 404 }
    );

  const newProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return NextResponse.json(newProduct);
}
