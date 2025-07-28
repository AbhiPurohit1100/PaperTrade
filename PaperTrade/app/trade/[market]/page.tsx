"use client";
import { useState } from "react";
import { MarketBar } from "@/app/components/MarketBar";
import { SwapUI } from "@/app/components/SwapUI";
import { TradeView } from "@/app/components/TradeView";
import { Depth } from "@/app/components/depth/Depth";
import { Appbar } from "@/app/components/Appbar";
import { useParams } from "next/navigation";

export default function Page() {
    const { market } = useParams();
    const [position, setPosition] = useState<{ price: number; quantity: number } | null>(null);
    const [currentPrice, setCurrentPrice] = useState(0);

    return (
        <div className="flex flex-col flex-1 h-screen">
            <Appbar position={position} currentPrice={currentPrice} />
            <MarketBar market={market as string} onPriceChange={setCurrentPrice} />
            <div className="flex flex-row flex-1">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row h-[920px] border-y border-slate-800">
                        <div className="flex flex-col flex-1">
                            <TradeView market={market as string} />
                        </div>
                        <div className="flex flex-col w-[250px] overflow-hidden">
                            <Depth market={market as string} /> 
                        </div>
                    </div>
                </div>
                <div className="w-[10px] flex-col border-slate-800 border-l"></div>
                <div>
                    <div className="flex flex-col w-[250px]">
                        <SwapUI
                            market={market as string}
                            currentPrice={currentPrice}
                            position={position}
                            setPosition={setPosition}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}