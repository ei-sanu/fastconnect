import { Github, Linkedin, Instagram, Mail, Shield, Code2, Lock, Globe } from 'lucide-react';

export default function Developer() {
  return (
    <section id="developer" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built by <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Somesh</span>
          </h2>
          <p className="text-gray-400">Cybersecurity Enthusiast • Open Source Developer</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-2xl shadow-cyan-500/50">
                SR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Somesh Ranjan Biswal</h3>
              <p className="text-cyan-300 text-center mb-2">B.Tech CSE @ LPU</p>
              <p className="text-gray-400 text-center text-sm mb-6">Cybersecurity & Automation Enthusiast</p>

              <div className="flex gap-3 flex-wrap justify-center">
                <a href="https://github.com/ei-sanu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300">
                  <Github className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="https://somesh.social" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-cyan-400" />
                </a>
                <a href="mailto:somesh@example.com" className="p-3 bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm Somesh Ranjan Biswal, a B.Tech CSE student at Lovely Professional University and a cybersecurity enthusiast who believes that great software solves real problems.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Tired of clicking the same login portal every day? I built FASTNET — an ultra-fast browser extension that automates the tedious process and gives you instant Wi-Fi access. No ads, no tracking, just speed.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm passionate about building automation tools, exploring cybersecurity, and creating open-source solutions that make life easier for students and developers.
              </p>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What I focus on:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
                    <Code2 className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">Browser Extensions & Automation</h5>
                      <p className="text-gray-400 text-sm">Creating tools that save time and boost productivity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
                    <Shield className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">Cybersecurity Research</h5>
                      <p className="text-gray-400 text-sm">Exploring vulnerabilities and defensive strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
                    <Lock className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">Open Source Projects</h5>
                      <p className="text-gray-400 text-sm">Building transparent tools for the community</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://somesh.social" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5" />
                Visit My Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}