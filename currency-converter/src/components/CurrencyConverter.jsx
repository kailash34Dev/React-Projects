import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import SwapButton from "./SwapButton";
import useCurrencyData from "../hooks/useCurrencyData";

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [currencyOptions, setCurrencyOptions] = useState([]);

    // Fetch list of all currencies on load
    useEffect(() => {
        fetch("https://api.frankfurter.dev/v1/currencies")
            .then((res) => res.json())
            .then((data) => setCurrencyOptions(Object.keys(data)))
            .catch((err) => console.error("Failed to fetch currencies", err));
    }, []);

    const currencyInfo = useCurrencyData(from, to);

    // Calculate convertedAmount directly during render (Derived State)
    let convertedAmount = "";
    if (amount !== "") {
        if (from === to) {
            convertedAmount = amount;
        } else if (currencyInfo && currencyInfo.success && currencyInfo.data) {
            convertedAmount = Number(
                (amount * currencyInfo.data.rate).toFixed(2),
            );
        }
    }

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
    };

    return (
        <div className="w-full max-w-md mx-auto border border-white/30 rounded-2xl p-6 backdrop-blur-xl bg-white/40 shadow-2xl transition-all duration-300 hover:bg-white/50">
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 drop-shadow-sm font-sans tracking-wide">
                Currency Converter
            </h1>
            <div className="relative">
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={currencyOptions}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                        className="shadow-sm transition-shadow hover:shadow-md border border-white/50 pb-6"
                    />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <SwapButton onClick={swap} />
                </div>

                <div className="w-full mt-1">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={currencyOptions}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        amountDisable={true}
                        className="shadow-sm transition-shadow hover:shadow-md border border-white/50 pt-6"
                    />
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;
