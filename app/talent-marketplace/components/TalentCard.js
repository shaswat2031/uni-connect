import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TalentCard({ talent }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={talent.image || "/placeholder-talent.jpg"}
          alt={talent.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{talent.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {talent.category}
          </span>
        </div>
        <p className="text-gray-600 mt-1">{talent.name}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {talent.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">${talent.hourlyRate}/hr</span>
          <Link
            href={`/talent-marketplace/talent/${talent.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details
          </Link>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {talent.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
          {talent.skills.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              +{talent.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
