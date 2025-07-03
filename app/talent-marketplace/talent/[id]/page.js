"use client";
import React from "react";
import Navbar from "../../../Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { talentData } from "../../data/mockTalentData";

export default function TalentDetailPage({ params }) {
  const router = useRouter();
  const id = parseInt(params.id);
  const talent = talentData.find((t) => t.id === id);

  if (!talent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Talent Not Found</h1>
          <p className="mb-4">The talent you're looking for doesn't exist.</p>
          <Link
            href="/talent-marketplace"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Back to Talent Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="mr-4 text-blue-600 hover:text-blue-800"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold">Talent Details</h1>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src={talent.image || "/placeholder-talent.jpg"}
              alt={talent.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">{talent.title}</h2>
                <p className="text-gray-600">{talent.name}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {talent.category}
                </span>
                <p className="font-bold text-xl mt-2">
                  ${talent.hourlyRate}/hr
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-700">{talent.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {talent.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-4 mt-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-700">{talent.education}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Availability</h3>
                <p className="text-gray-700">{talent.availability}</p>
              </div>
            </div>

            {talent.portfolio && talent.portfolio.length > 0 && (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
                <ul className="list-disc list-inside text-blue-600">
                  {talent.portfolio.map((item, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <a
                href={`mailto:${talent.contact}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
              >
                Hire {talent.name.split(" ")[0]}
              </a>
            </div>
          </div>
        </div>

        {/* Only display for the talent owner in a real app with authentication */}
        <div className="mt-6 flex justify-end">
          <Link
            href={`/talent-marketplace/edit/${talent.id}`}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
          >
            Edit Listing
          </Link>
          <button className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-md">
            Delete Listing
          </button>
        </div>
      </div>
    </div>
  );
}
