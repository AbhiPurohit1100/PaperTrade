"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTickers } from "@/app/utils/httpClient";

export default function Page() {
    const [markets, setMarkets] = useState<{ symbol: string; lastPrice: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
        getTickers().then(data => {
            setMarkets(data.map((t: any) => ({
                symbol: t.symbol,
                lastPrice: t.lastPrice
            })));
        });
    }, []);

    return (
        <div className="flex flex-col items-center pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <h1 className="text-3xl font-extrabold mb-8 text-white tracking-tight drop-shadow-lg">Markets</h1>
            <div className="w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-700">
                <table className="w-full text-left rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-slate-800 text-slate-300">
                            <th className="py-3 px-4 font-semibold text-lg">Market</th>
                            <th className="py-3 px-4 font-semibold text-lg">Last Price</th>
                            <th className="py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {markets.map(market => (
                            <tr
                                key={market.symbol}
                                className="border-b border-slate-700 hover:bg-slate-800 transition-colors group"
                            >
                                <td className="py-3 px-4 text-white font-mono text-base group-hover:text-blue-400 transition-colors">
                                    {market.symbol.replace("_", " / ")}
                                </td>
                                <td className="py-3 px-4 text-green-400 font-semibold text-base tabular-nums">
                                    {Number(market.lastPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-500 transition-colors text-white px-5 py-2 rounded-lg font-semibold shadow-md"
                                        onClick={() => router.push(`/trade/${market.symbol}`)}
                                    >
                                        Trade
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {markets.length === 0 && (
                            <tr>
                                <td colSpan={3} className="py-8 text-center text-slate-400 text-lg">
                                    Loading markets...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}