// app/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "首页",
};
export default function Home() {
  return (
    <div className="min-h-screen"> 
      <div className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block">Welcome to</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mt-3">
                Next.js App
              </span>
            </h1>
            
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
              A modern, responsive, and beautiful application built with Next.js 13+ and Tailwind CSS.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Get Started
              </a>
              
              <a
                href="#"
                className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-300 font-medium rounded-lg shadow-lg hover:bg-purple-900/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Performance", description: "Lightning fast rendering with server-side generation." },
              { title: "Reliability", description: "Built with TypeScript for type safety and fewer bugs." },
              { title: "Scale", description: "Optimized for any size project from small apps to enterprise solutions." }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-purple-400">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Next.js App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}