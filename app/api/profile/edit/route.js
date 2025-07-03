import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(request) {
  try {
    const { db } = await connectToDatabase();
    const userData = await request.json();

    // Ensure we have an ID to update
    if (!userData._id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Extract the ID and remove it from the update data
    const userId = userData._id;
    delete userData._id;

    // Add last updated timestamp
    userData.lastUpdated = new Date();

    // Update the user document
    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: userData });

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
