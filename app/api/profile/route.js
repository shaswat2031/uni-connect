import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // In a real app, you'd get the user ID from the session
    // For demo purposes, we'll fetch the first user from the database
    const user = await db.collection("users").findOne({});

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Format dates for front-end
    const formattedUser = {
      ...user,
      createdAt: user.createdAt?.toISOString() || new Date().toISOString(),
      lastUpdated: user.lastUpdated?.toISOString() || new Date().toISOString(),
      online: true, // Assume current user is online
    };

    return NextResponse.json(formattedUser);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }
}

// Also implement a simple create profile endpoint for direct API testing
export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    const userData = await request.json();

    // Check required fields
    if (!userData.name || !userData.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db
      .collection("users")
      .findOne({ email: userData.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Add timestamps
    const newUser = {
      ...userData,
      createdAt: new Date(),
      lastUpdated: new Date(),
    };

    // Insert new user
    const result = await db.collection("users").insertOne(newUser);

    return NextResponse.json(
      {
        success: true,
        message: "Profile created successfully",
        userId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { error: "Failed to create profile" },
      { status: 500 }
    );
  }
}
