import React from "react";
import Navbar from "./Components/Navbar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-28 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
              University Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            "Bridging Students, Building Futures."
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-12">
            A platform to connect students, showcase talents, and explore career
            opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <Link
              href="/student-connect"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-64 text-center"
            >
              Get Started
            </Link>
            <Link
              href="#about"
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-64 text-center"
            >
              Learn More
            </Link>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a href="#about" className="text-white/70 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            University Connect
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            About the Project
          </h3>
          <p className="text-gray-600 text-lg mb-4">
            University Connect is a student-driven platform designed to connect,
            collaborate, and grow. Whether you're looking to showcase your
            skills, find mentors, or explore new opportunities, this platform
            provides the perfect space for students to thrive.
          </p>
          <p className="text-gray-600 text-lg">
            Our mission is to build a vibrant community for students to discover
            career paths, form meaningful relationships, and gain access to
            top-tier learning resources.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-4xl mx-auto">
            The passionate individuals behind University Connect, dedicated to
            bridging students with opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Harshita Mutha",
                role: "Reports Documentation & DB Manager",
                bio: "Ensures seamless documentation and plays a key role in UI/UX and platform accessibility.",
              },
              {
                name: "Sugam Bhardwaj",
                role: "UI/UX Designer",
                bio: "Focuses on crafting user-centric visuals and intuitive interface experiences.",
              },
              {
                name: "Vansh Patel",
                role: "Backend Dev & Project Leader",
                bio: "Manages backend, API integrations, and ensures overall project direction.",
              },
              {
                name: "Shaswat Prasad",
                role: "Frontend Developer",
                bio: "Builds responsive UIs and optimizes performance across platforms.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Platform Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "🎓",
                title: "Student Profiles",
                desc: "Showcase your skills and connect with peers.",
              },
              {
                icon: "🛍️",
                title: "Talent Marketplace",
                desc: "Offer and hire student-led services and projects.",
              },
              {
                icon: "💬",
                title: "Messaging System",
                desc: "Collaborate and chat with students in real-time.",
              },
              {
                icon: "📜",
                title: "Certifications",
                desc: "Earn and display credibility-boosting certifications.",
              },
              {
                icon: "🚀",
                title: "Career Opportunities",
                desc: "Discover internships, jobs, and networking events.",
              },
              {
                icon: "🔒",
                title: "Secure Authentication",
                desc: "Your data stays safe with our secure systems.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Certified Today!</h2>
          <p className="text-xl mb-8">
            Validate your skills and accelerate your career with our
            certification program.
          </p>

          <div className="bg-white text-gray-800 rounded-xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Take the Test</h3>
            <p className="text-lg mb-4">
              Validate your knowledge. Earn credibility.
            </p>
            <p className="text-gray-600 mb-6">
              Our certification test is designed to assess your core
              competencies. Pass and receive a verified certificate to
              strengthen your resume and LinkedIn profile.
            </p>
            <Link
              href="/certifications"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Start Your Certification
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
