import React from "react";
import Navbar from "../Components/Navbar";

export default function StudentConnectPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Student Connect</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
            Connect with students from universities around the world. Share
            experiences, collaborate on projects, and build your academic
            network.
          </p>
          {/* Add more content for Student Connect page */}
        </div>
      </div>
    </div>
  );
}
