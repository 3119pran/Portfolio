import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-gray-300 overflow-auto flex flex-col items-center pt-24" id="home"> {/* Added pt-24 */}
      {/* Profile Image */}
      <img
        className="w-48 h-fit object-cover rounded-full mt-6 shadow-lg"
        src="https://imgs.search.brave.com/qjmCdDsCFq-6rgW7YYB8Z9LzO7BwK_5FqPy5hA7n-Uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtcHJvZmlsZS1w/aWN0dXJlLWVyZW4t/eWVhZ2VyLTBtbDQ1/aTc4cXZhMGUwemgu/anBn"
        alt="Eren Yeager Profile"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold mt-4 text-center text-gray-800">
        Hi, I'm Eren Yeager
      </h1>

      {/* Description */}
      <div className="mt-4 px-4 max-w-3xl">
        <p className="text-lg font-medium text-gray-700 leading-relaxed text-center">
          Eren Yeager is the main protagonist of *Attack on Titan*. He begins as
          a passionate and impulsive young man who desires to eradicate all
          Titans after witnessing his mother's death during a Titan attack.
          Raised in the walled city, Eren initially joins the military to fight
          against the Titans. Over time, he discovers he possesses the power to
          transform into a Titan, which plays a crucial role in humanity's
          survival.
        </p>
      </div>
    </div>
  );
}
