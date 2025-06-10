import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/mongo/db";
import SpotData from "@/mongo/model/spot";

export async function GET(req: NextRequest, { params }: { params: { spotId: string } }) {
  await connectDB();
  const spot = await SpotData.findOne({ spotId: params.spotId });
  return NextResponse.json({ success: true, spot });
}

export async function PUT(req: NextRequest, { params }: { params: { spotId: string } }) {
  await connectDB();
  const data = await req.json();
  const updated = await SpotData.findOneAndUpdate({ spotId: params.spotId }, data, { new: true });
  return NextResponse.json({ success: true, spot: updated });
}
