"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import ProfileForm from "../Components/ProfileForm";

export default function CreateProfilePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Create Your Profile
        </h1>
        <ProfileForm />
      </div>
    </div>
  );
}
