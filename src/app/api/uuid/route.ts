import { randomUUID } from "crypto";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest)
{
  const count: number = parseInt(req.nextUrl.searchParams.get('count') ?? '');
  if(req.nextUrl.searchParams.get('count') !== null)
  {
    const uuid: string[] = Array.from({ length: count }, () => randomUUID());
    return NextResponse.json(uuid);
  }
  else
  {
    const uuid: string = randomUUID();
    return NextResponse.json(uuid);
  }
}