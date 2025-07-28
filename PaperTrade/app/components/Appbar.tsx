"use client";
import { getTickers } from "../utils/httpClient";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ProfitLoss } from "./ProfitLoss";

export const Appbar = ({
    position,
    currentPrice,
}: {
    position: { price: number; quantity: number } | null;
    currentPrice: number;
}) => {
    const route = usePathname();
    const router = useRouter();

    return (
        <div className="text-white border-b border-slate-800">
            <div className="flex justify-between items-center p-2 min-h-[48px]">
                <div className="flex">
                    <div
                        className={`text-xl pl-4 flex flex-col justify-center cursor-pointer text-white`}
                        onClick={() => router.push('/')}
                    >
                        <button onClick={getTickers}>Exchange</button>
                    </div>
                    <div
                        className={`text-sm pt-1 flex flex-col justify-center pl-8 cursor-pointer ${
                            route.startsWith('/markets') ? 'text-white' : 'text-slate-500'
                        }`}
                        onClick={() => router.push('/markets')}
                    >
                        Markets
                    </div>
                    <div
                        className={`text-sm pt-1 flex flex-col justify-center pl-8 cursor-pointer ${
                            route.startsWith('/trade') ? 'text-white' : 'text-slate-500'
                        }`}
                        onClick={() => router.push('/trade/SOL_USDC')}
                    >
                        Trade
                    </div>
                </div>
                <div className="flex items-center ml-8">
                    <ProfitLoss position={position} currentPrice={currentPrice} />
                </div>
            </div>
        </div>
    );
}