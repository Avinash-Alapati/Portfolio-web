import React from 'react';
import { portfolioData } from '../mock';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-mono text-center">
          <span className="text-emerald-400">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">about.js</span>
              </div>
              <div className="font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = {'{'}
                </p>
                <p className="text-gray-400 ml-4">
                  name: <span className="text-emerald-400">'{portfolioData.name}'</span>,
                </p>
                <p className="text-gray-400 ml-4">
                  role: <span className="text-emerald-400">'{portfolioData.role}'</span>,
                </p>
                <p className="text-gray-400 ml-4">
                  focus: <span className="text-emerald-400">'{portfolioData.currentFocus}'</span>
                </p>
                <p className="text-gray-400">{'};'}</p>
              </div>
            </div>

            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>{portfolioData.bio}</p>
              
              {portfolioData.education && (
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="text-emerald-400" size={24} />
                    <h3 className="text-xl font-semibold text-white font-mono">Education</h3>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-emerald-400 font-semibold">{portfolioData.education.degree}</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{portfolioData.education.institution}</p>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative">
                <div className="w-64 h-[320px] md:w-96 md:h-[400px] border-4 border-slate-700 shadow-2xl rounded-lg relative top-[3px] overflow-hidden">
                  <img
                    src="https://customer-assets.emergentagent.com/job_3763a0ea-fdb9-4d7e-9855-7cec761d7816/artifacts/n8f6bl02_Avinash.jpg"
                    alt="Avinash Alapati"
                    className="w-full h-full object-contain"
                  />
                </div>



                <div className="absolute inset-0 border-2 border-emerald-400 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;