import { NextResponse } from "next/server";

import connectDB from "@/mongo/db";
import SpotData from "@/mongo/model/spot";
import UserData from "@/mongo/model/userdata";
import { auth } from "@clerk/nextjs/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const data = await req.json();

    const spot = await SpotData.create({...data,spotId:uuidv4(),});

   
    await UserData.findOneAndUpdate({ "user.userId": userId },
        { $push: { createdspots: { spotId: spot.spotId } } },
        { upsert: true });

    return NextResponse.json(
      { message: "Spot created successfully", spot },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating spot:", error);
    return NextResponse.json(
      { error: "Error creating spot" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const spots = await SpotData.find({});
    return NextResponse.json({ spots });
  } catch (error) {
    console.error("Error fetching spots:", error);
    return NextResponse.json(
      { error: "Error fetching spots" },
      { status: 500 }
    );
  }
}