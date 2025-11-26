import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const upiId = '7008450074@yescred';

  const generateQRCode = async (amountValue: string) => {
    if (!amountValue || parseFloat(amountValue) <= 0) {
      setQrCode('');
      setShowQR(false);
      return;
    }

    setIsGenerating(true);

    const upiUrl = `upi://pay?pa=${upiId}&am=${amountValue}&cu=INR&tn=Support%20FASTNET`;
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;

    setTimeout(() => {
      setQrCode(qrApiUrl);
      setShowQR(true);
      setIsGenerating(false);
    }, 800);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    if (value && parseFloat(value) > 0) {
      generateQRCode(value);
    } else {
      setShowQR(false);
      setQrCode('');
    }
  };

  const quickAmounts = [50, 100, 200, 500];

  const handleQuickAmount = (amt: number) => {
    setAmount(amt.toString());
    generateQRCode(amt.toString());
  };

  return (
    <section id="donate" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Support FASTNET Development
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Help us build faster tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If FASTNET saves you time every day, support future open-source projects with a one-time contribution.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            Your contribution helps maintain FASTNET, cover server costs, and build more amazing open-source tools for LPU students.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-600/15 to-blue-600/15 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">UPI Donations</h3>
              <p className="text-gray-400 text-center mb-6">No tracking, no ads • Built for students</p>

              <div className="mb-6">
                <label className="block text-white font-medium mb-3 text-center">Enter amount (₹)</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-cyan-500/30 rounded-xl text-white text-center text-2xl font-semibold placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-4 gap-3 mb-8">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleQuickAmount(amt)}
                    className="py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white font-semibold hover:bg-cyan-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <div className="relative min-h-[350px] flex items-center justify-center">
                {!showQR && !isGenerating && (
                  <div className="text-center animate-fade-in">
                    <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-400 text-lg">Enter an amount to generate QR code</p>
                  </div>
                )}

                {isGenerating && (
                  <div className="text-center animate-fade-in">
                    <div className="relative w-64 h-64 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl animate-pulse"></div>
                      <div className="absolute inset-2 bg-gray-900 rounded-xl flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    </div>
                    <p className="text-cyan-400 text-lg font-semibold animate-pulse">Generating secure QR code...</p>
                  </div>
                )}

                {showQR && qrCode && !isGenerating && (
                  <div className="text-center animate-scale-in">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                      <div className="relative bg-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <img
                          src={qrCode}
                          alt="UPI QR Code"
                          className="w-64 h-64 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-4 mb-4">
                      <p className="text-gray-400 text-sm mb-1">Scan with any UPI app</p>
                      <p className="text-white font-semibold text-xl">₹{amount}</p>
                    </div>
                    <div className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-3">
                      <p className="text-gray-400 text-sm mb-1">UPI ID</p>
                      <p className="text-cyan-400 font-mono font-semibold">{upiId}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3 text-center">Your support helps build:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Better automation tools for students</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Support for more campus Wi-Fi portals</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Advanced security features</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Open-source ecosystem growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}