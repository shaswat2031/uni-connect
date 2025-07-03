import React from "react";
import Navbar from "../Components/Navbar";

export default function TalentMarketplacePage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Talent Marketplace</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
            Find internships, jobs, and project opportunities. Connect with
            employers looking for university talent and kickstart your career.
          </p>
          {/* Add more content for Talent Marketplace page */}
        </div>
      </div>
    </div>
  );
}
