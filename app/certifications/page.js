import React from "react";
import Navbar from "../Components/Navbar";

export default function CertificationsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Certifications</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
            Explore and earn certifications to enhance your skills and boost
            your resume. We offer a variety of courses in partnership with top
            universities and industry leaders.
          </p>
          {/* Add more content for Certifications page */}
        </div>
      </div>
    </div>
  );
}
