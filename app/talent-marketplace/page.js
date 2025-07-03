import React from "react";
import Navbar from "../Components/Navbar";
import TalentList from "./components/TalentList";
import { talentData } from "./data/mockTalentData";
import Link from "next/link";

export default function TalentMarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Talent Marketplace</h1>
          <Link
            href="/talent-marketplace/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4 md:mt-0"
          >
            Add Your Talent
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mb-8">
          <p className="text-lg mb-4">
            Find internships, jobs, and project opportunities. Connect with
            employers looking for university talent and kickstart your career.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <input
              type="text"
              placeholder="Search talents..."
              className="border rounded-md px-4 py-2 flex-grow"
            />
            <select className="border rounded-md px-4 py-2">
              <option value="">All Categories</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="writing">Writing</option>
              <option value="education">Education</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TalentList talents={talentData} />
        </div>
      </div>
    </div>
  );
}
