import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { AlertCircle, CheckCircle, Download as DownloadIcon, Github, Lock, User } from 'lucide-react';
import { useState } from 'react';

export default function Download() {
  const [showConsent, setShowConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleDownloadClick = () => {
    setShowCustomForm(true);
  };

  const generateCustomExtension = async () => {
    if (!registrationNumber.trim() || !wifiPassword.trim()) {
      setError('Please fill in both fields');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const zip = new JSZip();

      // Manifest file - exact structure from your extension
      const manifest = {
        manifest_version: 3,
        name: "LPU Internet Portal Auto Login",
        version: "1.0",
        description: "Automatically logs you into the LPU 24 Online Internet Portal every time you connect to Wi-Fi — no manual steps needed. Your ID, password, and Terms & Conditions are filled and submitted instantly for a seamless, hassle-free login experience.",
        permissions: [
          "scripting"
        ],
        content_scripts: [
          {
            matches: [
              "https://internet.lpu.in/24online/webpages/*"
            ],
            js: [
              "touchlogin.js"
            ]
          }
        ]
      };

      // touchlogin.js with replaced credentials
      const touchloginScript = `window.addEventListener("load", function () {

    const username = "${registrationNumber.trim()}";            // ADD YOUR ID HERE
    const password = "${wifiPassword.trim()}";             // ADD YOUR PASSWORD HERE

    const userField = document.querySelector("input[name='username']");
    const passField = document.querySelector("input[name='password']");
    const termsCheck = document.querySelector("input[type='checkbox']");
    const loginBtn = document.querySelector("#loginbtn");

    function fireAll(el) {
        ["input", "change", "keyup", "keydown", "keypress", "click"].forEach(
            (evt) => el.dispatchEvent(new Event(evt, { bubbles: true }))
        );
    }

    if (userField) {
        userField.value = username;
        fireAll(userField);
    }

    if (passField) {
        passField.value = password;
        fireAll(passField);
    }

    if (termsCheck) {
        termsCheck.checked = true;
        fireAll(termsCheck);
    }

    if (loginBtn) {
        loginBtn.disabled = false;
        loginBtn.removeAttribute("disabled");
        loginBtn.style.opacity = "1";
        loginBtn.style.pointerEvents = "auto";
    }

    try {
        if (typeof appendUserName === "function") {
            appendUserName();
        }
    } catch (e) {
        console.log("appendUserName() not accessible");
    }

    setTimeout(() => {
        if (loginBtn) {
            loginBtn.click();
            console.log("Auto Login Clicked.");
        }
    }, 500);
});`;

      // Add files to ZIP
      zip.file('manifest.json', JSON.stringify(manifest, null, 4));
      zip.file('touchlogin.js', touchloginScript);

      // README file
      const readme = `# LPU Internet Portal Auto Login - Custom Build

**Registration Number:** ${registrationNumber}
**Generated:** ${new Date().toLocaleString()}

## Installation Instructions

1. Extract this ZIP file to a folder
2. Open Chrome and navigate to: chrome://extensions/
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the extracted folder containing manifest.json

## How It Works

This extension automatically logs you into the LPU 24 Online Internet Portal when you connect to campus Wi-Fi.

Your credentials are embedded in the extension:
- Username: ${registrationNumber}
- Password: ••••••••

## Security Notice

⚠️ **IMPORTANT:** This extension contains your login credentials in plain text.

- Keep this extension file secure
- Do not share this ZIP or extracted folder with anyone
- Only install on your personal devices
- If you change your password, generate a new custom build

## Troubleshooting

- Make sure you're connected to LPU campus Wi-Fi
- The extension only works on: https://internet.lpu.in/24online/webpages/*
- Check Chrome extensions page to ensure the extension is enabled
- Try refreshing the login page if auto-login doesn't trigger

## Support

For issues or updates, visit: https://github.com/ei-sanu/touchlogin

---
**FASTNET v2.0** - Built by students, for students.
`;
      zip.file('README.md', readme);

      // Generate and download ZIP
      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, `fastnet-${registrationNumber}.zip`);

      setConsentGiven(true);
      setShowCustomForm(false);
      setRegistrationNumber('');
      setWifiPassword('');
    } catch (err) {
      setError('Failed to generate extension. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="download" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">FASTNET</span> Now
          </h2>
          <p className="text-xl text-gray-300">
            Access the fastest Wi-Fi extension. Open source, transparent, and built by students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="https://github.com/ei-sanu/touchlogin" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:bg-cyan-500/15 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <Github className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-white mb-2">GitHub Repository</h3>
            <p className="text-gray-400 mb-4">View source code, contribute, and stay updated</p>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300">
              Explore on GitHub
              <span>→</span>
            </div>
          </a>

          <button onClick={handleDownloadClick} className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:bg-cyan-500/15 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 text-left">
            <DownloadIcon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-white mb-2">Download Extension</h3>
            <p className="text-gray-400 mb-4">Custom build with your credentials</p>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300">
              Generate & Download
              <span>→</span>
            </div>
          </button>
        </div>

        {showCustomForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-cyan-500/20 animate-scale-in">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Custom Extension Builder</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Enter your LPU credentials to generate a personalized extension with auto-login enabled.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Registration Number
                  </label>
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="e.g., 12012345"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Lock className="w-4 h-4 inline mr-2" />
                    WiFi Password
                  </label>
                  <input
                    type="password"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <p className="text-sm text-red-300">{error}</p>
                  </div>
                )}

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-sm text-yellow-300">
                    <strong>⚠️ Security Notice:</strong> Your credentials are only used to generate the extension and are never sent to any server. The extension is created entirely in your browser.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowCustomForm(false);
                    setError('');
                    setRegistrationNumber('');
                    setWifiPassword('');
                  }}
                  className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  disabled={isGenerating}
                >
                  Cancel
                </button>
                <button
                  onClick={generateCustomExtension}
                  disabled={isGenerating}
                  className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generating...' : 'Generate & Download'}
                </button>
              </div>
            </div>
          </div>
        )}

        {consentGiven && (
          <div className="mb-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 flex items-center gap-4 animate-fade-in">
            <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Download Started</h4>
              <p className="text-gray-300">Your custom FASTNET extension is downloading. Extract and load it as an unpacked extension in Chrome.</p>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Chrome, Edge, Brave (Desktop)</p>
                  <p className="text-gray-400 text-sm">All Chromium-based browsers supported</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Manifest V3 Compatible</p>
                  <p className="text-gray-400 text-sm">Latest extension standard</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">LPU Campus Wi-Fi Only</p>
                  <p className="text-gray-400 text-sm">Works with 24Online portal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Zero Data Collection</p>
                  <p className="text-gray-400 text-sm">Your privacy is protected</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              <span className="text-cyan-400 font-semibold">Version v1.0.0</span> — Latest stable build tested on LPU campus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
