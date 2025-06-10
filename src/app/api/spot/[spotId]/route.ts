import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/mongo/db";
import SpotData from "@/mongo/model/spot";

type SpotParams = Promise<{ spotId: string }>;

export async function GET(req: NextRequest, { params }: { params: SpotParams }) {
  const { spotId } = await params;
  await connectDB();
  const spot = await SpotData.findOne({ spotId });
  return NextResponse.json({ success: true, spot });
}

export async function PUT(req: NextRequest, { params }: { params: SpotParams }) {
  const { spotId } = await params;
  await connectDB();
  const data = await req.json();
  const updated = await SpotData.findOneAndUpdate({ spotId }, data, { new: true });
  return NextResponse.json({ success: true, spot: updated });
}

export async function DELETE(req: NextRequest, { params }: { params: SpotParams }) {
  const { spotId } = await params;
  await connectDB();
  const deleted = await SpotData.findOneAndDelete({ spotId });

  if (!deleted) {
    return NextResponse.json({ success: false, message: "Spot not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Spot deleted" });
}
