import React from "react";
import Navbar from "../Components/Navbar";

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="bg-gray-200 rounded-full h-24 w-24 flex items-center justify-center">
              <span className="text-3xl text-gray-500">👤</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">User Name</h2>
              <p className="text-gray-600">University Student</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-xl font-medium mb-2">Profile Details</h3>
            {/* Add profile details here */}
          </div>
        </div>
      </div>
    </div>
  );
}
