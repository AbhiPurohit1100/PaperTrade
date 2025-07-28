"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-2xl w-full flex flex-col items-center px-6 py-16 rounded-3xl shadow-2xl border border-slate-700 bg-slate-900 bg-opacity-90">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg text-center">
          Welcome to PaperTrade Exchange
        </h1>
        <p className="text-lg text-slate-300 mb-8 text-center max-w-xl">
          Experience lightning-fast simulated trading on real market data.
          <br />
          No risk, just pure learning and fun. Track your PnL, test strategies, and
          master the markets!
        </p>
        <button
          className="mt-4 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors text-white text-xl font-bold shadow-lg tracking-wide"
          onClick={() => router.push("/markets")}
        >
          Start Trading
        </button>
        <div className="mt-12 flex flex-row gap-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl text-green-400 font-bold">0%</span>
            <span className="text-slate-400 text-sm mt-1">Real Money Risk</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-blue-400 font-bold">Live</span>
            <span className="text-slate-400 text-sm mt-1">Market Data</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-yellow-400 font-bold">∞</span>
            <span className="text-slate-400 text-sm mt-1">Unlimited Trades</span>
          </div>
        </div>
        <div className="mt-16 opacity-60">
          
        </div>
      </div>
    </div>
  );
}
