"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileForm({ initialData = {}, isEdit = false }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    role: "",
    about: "",
    ...initialData,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [educationFields, setEducationFields] = useState(
    initialData.education && initialData.education.length > 0
      ? initialData.education
      : [{ institution: "", degree: "", year: "", score: "" }]
  );
  const [skills, setSkills] = useState(initialData.skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [projects, setProjects] = useState(
    initialData.projects && initialData.projects.length > 0
      ? initialData.projects
      : []
  );
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Education handlers
  const handleEducationChange = (index, field, value) => {
    const updatedFields = [...educationFields];
    updatedFields[index][field] = value;
    setEducationFields(updatedFields);
  };

  const addEducationField = () => {
    setEducationFields([
      ...educationFields,
      { institution: "", degree: "", year: "", score: "" },
    ]);
  };

  const removeEducationField = (index) => {
    const updatedFields = educationFields.filter((_, i) => i !== index);
    setEducationFields(updatedFields);
  };

  // Skills handlers
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  // Projects handlers
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([
        ...projects,
        { ...newProject, technologies: newProject.technologies || [] },
      ]);
      setNewProject({ title: "", description: "", technologies: [] });
    }
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Prepare complete data with education, skills, and projects
      const completeData = {
        ...formData,
        education: educationFields,
        skills,
        projects,
        // MongoDB requires an _id for updates
        ...(isEdit && initialData._id ? { _id: initialData._id } : {}),
      };

      const endpoint = isEdit ? "/api/profile/edit" : "/api/profile/create";

      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save profile");
      }

      // Success message
      alert(
        isEdit
          ? "Profile updated successfully!"
          : "Profile created successfully!"
      );
      router.push("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isEdit ? "Edit Your Profile" : "Create Your Profile"}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                readOnly={isEdit} // Email can't be changed if editing
              />
              {isEdit && (
                <p className="text-xs text-gray-500 mt-1">
                  Email cannot be changed
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                University/Institution*
              </label>
              <input
                type="text"
                name="university"
                value={formData.university || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role/Position*
              </label>
              <input
                type="text"
                name="role"
                value={formData.role || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="E.g., Computer Science Student"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Me
            </label>
            <textarea
              name="about"
              value={formData.about || ""}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share something about yourself, your interests, and career goals..."
            ></textarea>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
            Education
          </h3>

          {educationFields.map((field, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Education #{index + 1}</h4>
                {educationFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEducationField(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={field.institution}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Degree/Certificate
                  </label>
                  <input
                    type="text"
                    value={field.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years
                  </label>
                  <input
                    type="text"
                    value={field.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2020-2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GPA/Score
                  </label>
                  <input
                    type="text"
                    value={field.score}
                    onChange={(e) =>
                      handleEducationChange(index, "score", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addEducationField}
            className="text-blue-600 font-medium hover:underline flex items-center"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Another Education
          </button>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Skills</h3>

          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a skill (e.g., JavaScript, Data Analysis)"
              />
              <button
                type="button"
                onClick={addSkill}
                className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {skills.length === 0 && (
            <p className="text-gray-500 text-sm">
              No skills added yet. Add some skills to improve your profile.
            </p>
          )}
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Projects</h3>

          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium mb-3">Add New Project</h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newProject.title}
                  onChange={handleProjectChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleProjectChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={addProject}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Add Project
              </button>
            </div>
          </div>

          {projects.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-3">Your Projects</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between">
                      <h5 className="font-medium">{project.title}</h5>
                      <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm my-2">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {loading ? "Saving..." : isEdit ? "Save Changes" : "Create Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
