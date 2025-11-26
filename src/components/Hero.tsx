import { Code2, Rocket, Shield, Wifi, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/15 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in">
          <Wifi className="w-4 h-4" />
          Lightning-fast Auto-Connect
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
          FASTNET
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Connect to LPU Wi-Fi in one click.<br />
          <span className="text-cyan-300">Auto-fills credentials, accepts terms, and logs you in instantly.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
          <a href="#download" className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <Rocket className="w-5 h-5 mr-2" />
            Get Started Now
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#developer" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-cyan-500/50 transform hover:scale-105 transition-all duration-300">
            About Developer
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-cyan-500/15 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 text-center">
            <div className="relative inline-block mb-4">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              {/* Icon container */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-full border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Zap className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Lightning Fast</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Connected in under 1 second</p>
          </div>

          <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-cyan-500/15 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 text-center">
            <div className="relative inline-block mb-4">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              {/* Icon container */}
              <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-full border border-green-400/30 group-hover:border-green-400/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Shield className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">100% Secure</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Everything stays on your device</p>
          </div>

          <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-cyan-500/15 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 text-center">
            <div className="relative inline-block mb-4">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              {/* Icon container */}
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-full border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Code2 className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Open Source</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Built by Somesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
