"use client";

import { useState } from "react";

const donationAmounts = [
  { amount: 25, description: "Provides art supplies for one child" },
  { amount: 100, description: "Funds mentorship for a week" },
  { amount: 500, description: "Creates a safe space for a month" },
];

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleDonate = async () => {
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : null);
    if (!amount || amount <= 0) return;

    setIsProcessing(true);
    console.log("DONATE AMOUNT:", amount);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowMessage(true);
    setIsProcessing(false);

    // TODO: Implement Stripe Checkout
    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    // await stripe?.redirectToCheckout({ sessionId: "placeholder" });
  };

  return (
    <section id="donate" className="bg-ss-surface">
      <div className="ss-section">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Fuel the Mission
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ss-muted">
            Your generosity directly supports creating safe spaces, connecting kids with caring mentors,
            and providing the supplies and resources needed to help vulnerable youth heal and grow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-white text-slate-900 shadow-xl p-6 sm:p-8">
          {showMessage ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Stripe Checkout integration will be connected soon. Your donation will help change lives.
              </p>
              <button
                onClick={() => setShowMessage(false)}
                className="mt-4 text-ss-primary hover:text-ss-primary/80 font-medium"
              >
                Make Another Donation
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Choose Your Impact</h3>
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  {donationAmounts.map((item) => (
                    <button
                      key={item.amount}
                      onClick={() => {
                        setSelectedAmount(item.amount);
                        setCustomAmount("");
                      }}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedAmount === item.amount
                          ? "border-ss-primary bg-ss-primary/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-lg">${item.amount}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-primary focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleDonate}
                disabled={isProcessing || (!selectedAmount && !customAmount)}
                className="w-full bg-gradient-to-r from-ss-primary to-ss-accent text-slate-900 py-4 px-6 rounded-lg font-semibold text-lg hover:from-ss-primary/90 hover:to-ss-accent/90 focus:outline-none focus:ring-2 focus:ring-ss-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isProcessing ? "Processing..." : "Donate with Stripe"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure payments powered by Stripe. 100% of donations go directly to our mission.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
