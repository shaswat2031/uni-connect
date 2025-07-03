import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const { db } = await connectToDatabase();

    let user;
    try {
      // Try to find user by ObjectId
      user = await db.collection("users").findOne({ _id: new ObjectId(id) });
    } catch (e) {
      // If ObjectId is invalid, try to find by username
      user = await db.collection("users").findOne({ username: id });
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Format the user data as needed (same as in the main profile route)
    const profileData = {
      name: user.name,
      profilePicture: user.profilePicture,
      university: user.university,
      role: user.role,
      lastUpdated: user.lastUpdated,
      online: false, // Assuming viewed profile is not online
      stats: {
        connections: user.connections?.length || 0,
        projects: user.projects?.length || 0,
        certifications: user.certifications?.length || 0,
        profileStrength: calculateProfileStrength(user),
      },
      about: user.about,
      education: user.education,
      skills: user.skills,
      projects: user.projects,
      certifications: user.certifications,
      activities: user.activities,
      connections: user.connections,
    };

    return NextResponse.json(profileData);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }
}

function calculateProfileStrength(user) {
  // Simple algorithm to calculate profile strength (same as in main profile route)
  let score = 0;
  const fields = [
    "name",
    "profilePicture",
    "university",
    "role",
    "about",
    "education",
    "skills",
    "projects",
    "certifications",
    "connections",
  ];

  fields.forEach((field) => {
    if (user[field]) {
      if (Array.isArray(user[field])) {
        score += Math.min(user[field].length * 5, 10);
      } else {
        score += 10;
      }
    }
  });

  return Math.min(Math.round((score / fields.length) * 10), 100);
}
