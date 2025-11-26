export default function Features() {
  const handleAutoConnectClick = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-4">
                Live Demo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lightning-Fast Connection
              </h2>
              <p className="text-gray-300 mb-6">
                FASTNET instantly fills your credentials, accepts terms, and logs you in — all in one seamless second.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Extension status: <span className="text-green-400 font-semibold">Active</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Connection time: <span className="text-cyan-400 font-semibold">&lt; 1 second</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Auto-connect: <span className="text-green-400 font-semibold">Enabled</span></span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-4">https://internet.lpu.in/24online/…</div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">User Name</label>
                  <input
                    type="text"
                    value="1240••••••"
                    disabled
                    className="w-full px-4 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Password</label>
                  <input
                    type="password"
                    value="••••••••••"
                    disabled
                    className="w-full px-4 py-2 bg-blue-900/30 border border-cyan-500/30 rounded-lg text-white"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="w-4 h-4 text-cyan-600 bg-blue-900/30 border-cyan-500/50 rounded"
                  />
                  <span className="text-sm text-gray-300">I agree with Terms & Conditions</span>
                </div>
                <button
                  onClick={handleAutoConnectClick}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
                >
                  Auto Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
