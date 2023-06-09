import { prisma } from "../../../prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");

  const data = await prisma.shoes.findMany({
    where: {
      OR: [
        {
          type: {
            contains: search ?? "",
            mode: "insensitive",
          }
        },
        {
          name: {
            contains: search ?? "",
            mode: "insensitive",
          }
        }
      ],
      
    },
    include: {
      images: true,
      sizes: true,
    },
  });

  return NextResponse.json(data);
}
