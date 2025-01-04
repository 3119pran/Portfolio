import React from 'react';

export default function Contact() {
  return (
    <div className="h-screen bg-slate-600 " id='contact'>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white">Contact</h1>
        <div className="border-b-4 w-20 mx-auto mt-2 rounded-full border-white"></div>

        <div className="flex flex-col md:flex-row md:space-x-4 mt-6 w-full max-w-4xl">
          {/* Email Section */}
          <div className="bg-black p-5 rounded-lg text-white flex-1">
            <h2 className="text-2xl font-semibold mb-3">Email</h2>
            <p className="text-lg">
              Email me at{' '}
              <a href="mailto:sunnpraneeth@gamil.com" className="text-blue-400">
                sunnpraneeth@gmail.com
              </a>
            </p>
          </div>

          {/* Phone Section */}
          <div className="bg-black p-5 rounded-lg text-white flex-1 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-3">Phone</h2>
            <p className="text-lg">
              Reach me at <a href="tel:+123456789" className="text-blue-400">
                +123456789
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
