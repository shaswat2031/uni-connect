import React from "react";
import Navbar from "../Components/Navbar";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg p-8 text-white relative">
          <div className="absolute top-4 right-4">
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Edit Profile
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-white rounded-full h-32 w-32 flex items-center justify-center border-4 border-white shadow-xl">
              <span className="text-5xl">👨‍🎓</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">Rahul Sharma</h2>
              <p className="text-blue-100">
                Computer Science Student @ Delhi University
              </p>
              <div className="flex items-center justify-center md:justify-start mt-2 space-x-2">
                <span className="bg-green-500 rounded-full h-2.5 w-2.5"></span>
                <span className="text-sm">Online</span>
                <span className="text-sm mx-2">•</span>
                <span className="text-sm">Last updated: Just now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-b-lg">
          {/* Quick Stats */}
          <div className="flex flex-wrap border-b">
            <div className="w-1/2 md:w-1/4 p-4 text-center border-r border-b md:border-b-0">
              <div className="text-2xl font-bold text-blue-600">42</div>
              <div className="text-gray-500 text-sm">Connections</div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center border-b md:border-b-0 md:border-r">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center border-r">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-gray-500 text-sm">Certifications</div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">94%</div>
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
                  Computer Science student with a passion for web development
                  and AI. Looking to build meaningful connections with peers and
                  industry professionals. Currently learning React and exploring
                  machine learning concepts.
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
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="mb-4">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Delhi University</h4>
                      <span className="text-gray-500 text-sm">
                        2021 - Present
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Bachelor of Technology, Computer Science
                    </p>
                    <p className="text-gray-500 text-sm">
                      Current GPA: 3.8/4.0
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium">Delhi Public School</h4>
                      <span className="text-gray-500 text-sm">2019 - 2021</span>
                    </div>
                    <p className="text-gray-600">High School, Science Stream</p>
                    <p className="text-gray-500 text-sm">Score: 92%</p>
                  </div>
                </div>
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
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "HTML/CSS",
                    "Python",
                    "Java",
                    "Git",
                    "SQL",
                    "Node.js",
                    "UI/UX",
                    "Problem Solving",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium">Smart Learning Assistant</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      An AI-powered study companion using React and TensorFlow
                    </p>
                    <div className="flex gap-1">
                      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                        React
                      </span>
                      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                        TensorFlow
                      </span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium">Campus Connect App</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Mobile app for connecting students on campus
                    </p>
                    <div className="flex gap-1">
                      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                        React Native
                      </span>
                      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                        Firebase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3 bg-gray-50 p-6 border-l">
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
                <div className="space-y-3">
                  <div className="bg-white border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        Web Development Fundamentals
                      </h4>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Verified
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">Issued: Oct 2022</p>
                  </div>
                  <div className="bg-white border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Python Data Science</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Verified
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">Issued: Mar 2023</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
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
                        Earned a new certification
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Connected with 3 new students
                      </p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connections */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Connections</h3>
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    See all
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mb-1">
                        <span className="text-gray-500 text-sm">👤</span>
                      </div>
                      <p className="text-xs text-gray-700 text-center truncate w-full">
                        User {i}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
