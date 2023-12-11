import { fetchProducts } from "lib/commerce"
import { NextResponse } from "next/server";

export async function GET(request: Request, res: Response) {
    await fetchProducts();
    return  new Response("Products")
  }
  