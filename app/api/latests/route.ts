import { prisma } from "../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.latests.findMany({
    where: {
      status: "ACTIVE",
    },
  });

  return NextResponse.json(data);
}
