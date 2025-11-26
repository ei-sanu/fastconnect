export default function Setup() {
  const steps = [
    {
      number: 1,
      title: "Click 'Generate & Download' and enter your LPU credentials.",
      description: "Your registration number and WiFi password will be embedded in the extension."
    },
    {
      number: 2,
      title: "Extract the downloaded ZIP file to a folder.",
      description: "Choose a safe location on your computer where you won't accidentally delete it."
    },
    {
      number: 3,
      title: "Open chrome://extensions in your browser.",
      description: "Or go to Menu > Extensions > Manage Extensions."
    },
    {
      number: 4,
      title: "Turn on Developer Mode in the top-right corner.",
      description: "This allows you to install unpacked extensions."
    },
    {
      number: 5,
      title: "Click 'Load unpacked' and select the extracted folder.",
      description: "Browse to the folder containing manifest.json and touchlogin.js."
    },
    {
      number: 6,
      title: "Connect to LPU Wi-Fi and visit the login page once.",
      description: "The extension will automatically fill and submit your credentials."
    },
    {
      number: 7,
      title: "You're all set! Auto-login is now active.",
      description: "FASTNET will handle all future logins automatically."
    }
  ];

  return (
    <section id="setup" className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Connected in <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">60 seconds</span>
          </h2>
          <p className="text-xl text-gray-300">
            No coding required — just download and install
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:bg-cyan-500/15 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg text-white font-semibold mb-1">{step.title}</p>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-600/10 to-emerald-600/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4 shadow-lg shadow-green-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-2xl font-semibold text-white mb-2">
            Perfectly set up!
          </p>
          <p className="text-gray-300 max-w-md mx-auto">
            FASTNET will now auto-connect you to LPU Wi-Fi every single time. No more manual logins!
          </p>
        </div>

        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-yellow-300 font-semibold mb-1">Security Reminder</p>
              <p className="text-yellow-200/80 text-sm">
                Your credentials are stored locally in the extension files. Keep your extension folder secure and don't share it with others. If you change your WiFi password, generate a new custom build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
