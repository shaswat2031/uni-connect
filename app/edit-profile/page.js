"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ProfileForm from "../Components/ProfileForm";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProfileData() {
      try {
        const response = await fetch("/api/profile");

        if (!response.ok) {
          if (response.status === 404) {
            // No profile found, redirect to create profile
            router.push("/create-profile");
            return;
          }
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setProfileData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile data. Please try again later.");
        setLoading(false);
      }
    }

    fetchProfileData();
  }, [router]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8 flex justify-center items-center h-96">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8">
          <div className="bg-red-100 text-red-700 p-6 rounded-lg text-center">
            <p className="mb-4">{error}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Try Again
              </button>
              <button
                onClick={() => router.push("/profile")}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Return to Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Edit Your Profile
        </h1>
        <ProfileForm initialData={profileData} isEdit={true} />
      </div>
    </div>
  );
}
