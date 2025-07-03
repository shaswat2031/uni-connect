"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const router = useRouter();

  useEffect(() => {
    async function fetchProfileData() {
      try {
        // If userId is provided in query params, fetch that user's profile, otherwise fetch current user's profile
        const endpoint = userId ? `/api/profile/${userId}` : "/api/profile";
        const response = await fetch(endpoint);

        if (!response.ok) {
          if (response.status === 404) {
            setProfileData(null);
          } else {
            throw new Error("Failed to fetch profile data");
          }
        } else {
          const data = await response.json();
          console.log("Fetched profile data:", data); // For debugging
          setProfileData(data);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile data. Please try again later.");
        setLoading(false);
      }
    }

    fetchProfileData();
  }, [userId]);

  const handleEditProfile = () => {
    router.push("/edit-profile");
  };

  const handleCreateProfile = () => {
    router.push("/create-profile");
  };

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
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If no profile is found and it's the current user (not viewing someone else's profile)
  if (!profileData && !userId) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
            <p className="text-gray-600 mb-6">
              You don't have a profile yet. Create one to connect with other
              students and showcase your talents.
            </p>
            <button
              onClick={handleCreateProfile}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              Create Your Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If viewing someone else's profile and it's not found
  if (!profileData && userId) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
            <p className="text-gray-600 mb-6">
              The profile you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format date for better display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Calculate how long ago the profile was updated
  const getTimeAgo = (dateString) => {
    if (!dateString) return "Recently";

    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return formatDate(dateString);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        {/* Profile Actions */}
        {!userId && (
          <div className="mb-4 flex justify-end">
            <button
              onClick={handleEditProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Edit Profile
            </button>
            <button
              onClick={() => {
                /* Add logic for sharing profile */
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share Profile
            </button>
          </div>
        )}

        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg p-8 text-white relative">
          {!userId && (
            <div className="absolute top-4 right-4">
              <button
                onClick={handleEditProfile}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Edit Profile
              </button>
            </div>
          )}
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-white rounded-full h-32 w-32 flex items-center justify-center border-4 border-white shadow-xl">
              {profileData.profilePicture ? (
                <img
                  src={profileData.profilePicture}
                  alt={profileData.name}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <span className="text-5xl">👨‍🎓</span>
              )}
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">
                {profileData.name || "User Name"}
              </h2>
              <p className="text-blue-100">
                {profileData.role || "Student"} @{" "}
                {profileData.university || "University"}
              </p>
              <div className="flex items-center justify-center md:justify-start mt-2 space-x-2">
                <span
                  className={`${
                    profileData.online ? "bg-green-500" : "bg-gray-400"
                  } rounded-full h-2.5 w-2.5`}
                ></span>
                <span className="text-sm">
                  {profileData.online ? "Online" : "Offline"}
                </span>
                <span className="text-sm mx-2">•</span>
                <span className="text-sm">
                  Last updated: {getTimeAgo(profileData.lastUpdated)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-b-lg">
          {/* Quick Stats */}
          <div className="flex flex-wrap border-b">
            <div className="w-1/2 md:w-1/4 p-4 text-center border-r border-b md:border-b-0">
              <div className="text-2xl font-bold text-blue-600">
                {profileData.connections?.length || 0}
              </div>
              <div className="text-gray-500 text-sm">Connections</div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center border-b md:border-b-0 md:border-r">
              <div className="text-2xl font-bold text-blue-600">
                {profileData.projects?.length || 0}
              </div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center border-r">
              <div className="text-2xl font-bold text-blue-600">
                {profileData.certifications?.length || 0}
              </div>
              <div className="text-gray-500 text-sm">Certifications</div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {profileData.profileStrength || 0}%
              </div>
              <div className="text-gray-500 text-sm">Profile Strength</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Main Profile Content */}
            <div className="md:w-2/3 p-6">
              {/* About Me */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  About Me
                </h3>
                <p className="text-gray-700">
                  {profileData.about || "No information provided."}
                </p>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  Education
                </h3>
                {profileData.education && profileData.education.length > 0 ? (
                  <div className="border-l-2 border-blue-600 pl-4">
                    {profileData.education.map((edu, index) => (
                      <div key={index} className="mb-4 last:mb-0">
                        <div className="flex justify-between">
                          <h4 className="font-medium">
                            {edu.institution || "Institution"}
                          </h4>
                          <span className="text-gray-500 text-sm">
                            {edu.year || "N/A"}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {edu.degree || "Degree"}
                        </p>
                        {edu.score && (
                          <p className="text-gray-500 text-sm">
                            Score: {edu.score}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">
                    No education information added yet.
                  </p>
                )}
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Skills
                </h3>
                {profileData.skills && profileData.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No skills added yet.</p>
                )}
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Projects
                </h3>
                {profileData.projects && profileData.projects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.projects.map((project, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {project.description}
                        </p>
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex gap-1 flex-wrap">
                              {project.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No projects added yet.</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3 bg-gray-50 p-6 border-l">
              {/* Profile info card */}
              <div className="bg-white border rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-2">Profile Info</h3>
                <div className="text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-gray-600">Member since</span>
                    <span>{formatDate(profileData.createdAt)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-gray-600">Last updated</span>
                    <span>{formatDate(profileData.lastUpdated)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Email</span>
                    <span className="text-blue-600">{profileData.email}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Certifications
                </h3>
                {profileData.certifications &&
                profileData.certifications.length > 0 ? (
                  <div className="space-y-3">
                    {profileData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white border rounded-lg p-3 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{cert.title}</h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            Verified
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Issued: {formatDate(cert.issueDate)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white border rounded-lg p-4 text-center">
                    <p className="text-gray-500 mb-3">No certifications yet</p>
                    <Link
                      href="/certifications"
                      className="text-blue-600 hover:underline"
                    >
                      Browse available certifications
                    </Link>
                  </div>
                )}
              </div>

              {/* Recent Activity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                {profileData.activities && profileData.activities.length > 0 ? (
                  <div className="space-y-4">
                    {profileData.activities.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {activity.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            {getTimeAgo(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No recent activity.</p>
                )}
              </div>

              {/* Connections */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Connections</h3>
                  {profileData.connections?.length > 0 && (
                    <a
                      href="#"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      See all
                    </a>
                  )}
                </div>
                {profileData.connections &&
                profileData.connections.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3">
                    {profileData.connections
                      .slice(0, 6)
                      .map((connection, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mb-1">
                            {connection.profilePicture ? (
                              <img
                                src={connection.profilePicture}
                                alt={connection.name}
                                className="h-full w-full rounded-full object-cover"
                              />
                            ) : (
                              <span className="text-gray-500 text-sm">👤</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-700 text-center truncate w-full">
                            {connection.name || `User ${i + 1}`}
                          </p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 mb-2">No connections yet</p>
                    <Link
                      href="/student-connect"
                      className="text-blue-600 hover:underline"
                    >
                      Find students to connect with
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to format education date ranges
function formatEducationDate(startYear, endYear) {
  if (!startYear && !endYear) return "Date not specified";
  if (!startYear) return `Until ${endYear}`;
  if (!endYear) return `${startYear} - Present`;
  return `${startYear} - ${endYear}`;
}
