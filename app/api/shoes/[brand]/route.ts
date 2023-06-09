import { prisma } from "../../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, {
  params
} : {
  params: { 
    brand: string
  },
}) {

  const data = await prisma.shoes.findMany({
    where: {
      brand: params.brand.toUpperCase(),
    },
    include: {
      images: true,
      sizes: true,
    }
  });

  return NextResponse.json(data);
}
