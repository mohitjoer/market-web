
import connectDB from "@/mongo/db";
import SpotData from "@/mongo/model/spot";

import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function GET() {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = user.id;
  try {
    await connectDB();
    const spots = await SpotData.find({createduserid :userId});
    return NextResponse.json({ spots });
  } catch (error) {
    console.error("Error fetching spots:", error);
    return NextResponse.json(
      { error: "Error fetching spots" },
      { status: 500 }
    );
  }
}