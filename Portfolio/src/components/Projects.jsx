import React from "react";

export default function Projects() {
  return (
    <div className="h-screen bg-gray-300 overflow-auto" id="projects">
      <div className="container mx-auto flex flex-col h-full px-4 md:px-0 mt-15 pt-20"> {/* Added pt-20 */}
        {/* Header */}
        <h1 className="text-5xl font-bold mt-6 text-center">Projects</h1>
        <p className="text-lg font-semibold mt-4 text-center md:text-3xl">
          Here are some of the projects I have worked on:
        </p>

        {/* Profile Image */}
        <div className="flex justify-center mt-6">
          <a href="https://imgs.search.brave.com/vU_w02-wYengDjaVNw9qEcXJacnI_hqp7Aiqh75NkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/OTAwNDg2OC9maWxl/L29yaWdpbmFsLTE2/OTE3OTEwN2FjZThi/NmMwZTJhYTU3Njli/MGE0NWMzLnBuZz9y/ZXNpemU9NDAweDA">
            <img
              className="max-w-full max-h-96 object-contain rounded-full"
              src="https://imgs.search.brave.com/vU_w02-wYengDjaVNw9qEcXJacnI_hqp7Aiqh75NkNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/OTAwNDg2OC9maWxl/L29yaWdpbmFsLTE2/OTE3OTEwN2FjZThi/NmMwZTJhYTU3Njli/MGE0NWMzLnBuZz9y/ZXNpemU9NDAweDA"
              alt="My Profile"
            />
          </a>
        </div>

        <div className="md:flex md:space-x-4 mt-6 w-full max-w-4xl mx-auto">
          {/* Tools and Technologies */}
          <div className="bg-gray-100 rounded-md shadow-lg mt-2 p-6 max-h-80 overflow-y-auto">
            <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4">
              Tools and Technologies for Farmers App
            </h2>
            {/* Other content here */}
          </div>

          <div className="bg-gray-100 rounded-md shadow-lg mt-2 p-6 max-h-80 overflow-y-auto">
            <h1 className="text-4xl font-bold text-center mb-6">
              Features of Farmers App
            </h1>
            {/* Core and Advanced Features content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
