import { randomUUID } from "crypto";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest)
{
  const count: number = parseInt(req.nextUrl.searchParams.get('count') || '1');
  const uuid: string | string[] = count === 1 ? randomUUID() : Array.from({ length: count }, () => randomUUID());
  return NextResponse.json(uuid);
}