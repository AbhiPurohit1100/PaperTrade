import React from "react";

export function ProfitLoss({
    position,
    currentPrice,
}: {
    position: { price: number; quantity: number } | null;
    currentPrice: number;
}) {
    if (!position) return <div className="text-white px-4">No open position</div>;
    const pnl = (currentPrice - position.price) * position.quantity;
    return (
        <div className="text-white px-4 flex flex-col items-end">
            <div>Bought at: {position.price}</div>
            <div>Current: {currentPrice}</div>
            <div>
                PnL:{" "}
                <span className={pnl >= 0 ? "text-green-500" : "text-red-500"}>
                    {pnl.toFixed(2)}
                </span>
            </div>
        </div>
    );
}