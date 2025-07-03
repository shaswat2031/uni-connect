import React from "react";
import Navbar from "./Components/Navbar";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to University Connect
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            "Bridging Students, Building Futures."
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            A platform to connect students, showcase talents, and explore career
            opportunities.
          </p>
          <div className="mt-10">
            <Link
              href="/student-connect"
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors mx-2"
            >
              Get Started
            </Link>
            <Link
              href="#about"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors mx-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            University Connect
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-700">
            About the Project
          </h3>
          <p className="text-gray-600 mb-6 text-lg text-center">
            University Connect is a student-driven platform designed to connect,
            collaborate, and grow. Whether you're looking to showcase your
            skills, find mentors, or explore new opportunities, this platform
            provides the perfect space for students to engage and thrive.
          </p>
          <p className="text-gray-600 text-lg text-center">
            Our goal is to create a dynamic ecosystem where students can
            discover potential career paths, build meaningful connections, and
            access exclusive learning resources.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-10 text-lg text-center max-w-4xl mx-auto">
            The brilliant minds behind University Connect, working together to
            create a platform that bridges students with opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Harshita Mutha</h3>
                <p className="text-blue-600 mb-3 font-medium">
                  Reports Documentation & Database Manager
                </p>
                <p className="text-gray-600 mb-4">
                  Harshita ensures a seamless user experience by crafting
                  intuitive designs and structuring platform documentation. She
                  plays a vital role in UI/UX improvements and platform
                  accessibility.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Connect
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sugam Bhardwaj</h3>
                <p className="text-blue-600 mb-3 font-medium">UI/UX Designer</p>
                <p className="text-gray-600 mb-4">
                  Sugam is the creative force behind the platform's visual
                  identity, focusing on user-centric designs that enhance
                  interaction and engagement.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Connect
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Vansh Patel</h3>
                <p className="text-blue-600 mb-3 font-medium">
                  Backend Developer & Project Leader
                </p>
                <p className="text-gray-600 mb-4">
                  Vansh is responsible for the backend development, ensuring
                  smooth API communication, database management, and robust
                  server-side functionality.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Connect
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Shaswat Prasad</h3>
                <p className="text-blue-600 mb-3 font-medium">
                  Frontend Developer
                </p>
                <p className="text-gray-600 mb-4">
                  Shaswat specializes in developing engaging and dynamic user
                  interfaces, ensuring smooth and responsive experiences across
                  all devices. He focuses on creating interactive components and
                  optimizing performance.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Platform Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Student Profiles</h3>
              <p className="text-gray-600">
                Create and manage your profile, showcase skills, and connect
                with peers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-2">Talent Marketplace</h3>
              <p className="text-gray-600">
                Offer and hire student services like design, coding, and content
                creation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Messaging System</h3>
              <p className="text-gray-600">
                Chat with students and collaborate on projects in real-time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-gray-600">
                Earn and display certifications to boost credibility.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                Career Opportunities
              </h3>
              <p className="text-gray-600">
                Find internships, jobs, and networking events tailored for
                students.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                Safe and secure login to protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Certified Today!</h2>
          <p className="text-xl mb-8">
            Validate your skills and boost your career with our certification
            program.
          </p>

          <div className="bg-white rounded-lg p-8 text-gray-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Get Certified</h3>
            <p className="text-xl mb-4">
              Validate Your Skills, Boost Your Career
            </p>
            <h4 className="text-lg font-semibold mb-4">
              Pass the Test & Get Certified!
            </h4>
            <p className="text-gray-600 mb-6">
              Want to prove your expertise? Take our certification test, pass
              with confidence, and earn a verified certificate from our
              platform.
              <br />
              <br />
              Your certification is more than just a document—it's a testament
              to your dedication and knowledge.
            </p>

            <Link
              href="/certifications"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Start Your Certification Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
