import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/mongodb";

export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    const userData = await request.json();

    // Validate required fields
    const requiredFields = ["name", "email", "university", "role"];
    for (const field of requiredFields) {
      if (!userData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Check if user with this email already exists
    const existingUser = await db
      .collection("users")
      .findOne({ email: userData.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "A user with this email already exists" },
        { status: 409 }
      );
    }

    // Add creation timestamp and default values
    const newUser = {
      ...userData,
      createdAt: new Date(),
      lastUpdated: new Date(),
      profileStrength: 0,
      connections: [],
      projects: [],
      certifications: [],
      activities: [],
    };

    // Insert the new user document
    const result = await db.collection("users").insertOne(newUser);

    return NextResponse.json(
      {
        success: true,
        userId: result.insertedId,
        message: "Profile created successfully",
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
