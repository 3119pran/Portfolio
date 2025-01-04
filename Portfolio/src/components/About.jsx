import React from "react";

export default function About() {
  return (
    <div className="h-screen bg-gray-600 overflow-auto " id="about">
      <div className="container mx-auto flex flex-col md:justify-center items-center h-full px-4">
        {/* Header */}
        <h1 className="text-6xl font-bold mt-5 text-center text-white">About Me</h1>
        <div className="border-b-4 w-20 mx-auto mt-2 rounded-full border-white"></div>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-6 w-full max-w-4xl">
          {/* Section 1 */}
          <div className="bg-black p-5 rounded-lg text-white flex-1">
            <h2 className="text-2xl font-semibold mb-3">Eren Yeager</h2>
            <p className="text-lg">
              Eren Yeager is the main protagonist of *Attack on Titan*, a complex character driven by a fierce desire for freedom and a burning hatred for the Titans. 
              Born within the walls protecting humanity, his life changes forever when Titans destroy his hometown and kill his mother. 
              This tragedy ignites Eren’s determination to eliminate every Titan and explore the world beyond the walls.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-black p-5 rounded-lg text-white flex-1 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-3">A Hero's Journey</h2>
            <p className="text-lg">
              Eren joins the military, where he discovers his ability to transform into a Titan, making him a crucial asset in humanity’s fight for survival. 
              Initially impulsive and hot-headed, Eren's character evolves into a morally complex figure, grappling with difficult decisions and the weight of his choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
