import { useEffect, useState } from "react";

async function fetchCurrencyData(base, quote) {
    const apiEndpoint = `https://api.frankfurter.dev/v2/rates?base=${base.toUpperCase()}`;
    try {
        // Fetch data from the api endpoint
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            return {
                success: false,
                status: response.status,
                message: response.statusText,
            };
        }

        // Convert string response to JSON
        const data = await response.json();

        const finalResult = data.find(
            (dataObj) => dataObj.quote === quote.toUpperCase(),
        );

        if (!finalResult) {
            return {
                success: false,
                message: "Currency not found",
            };
        }

        return {
            success: true,
            data: finalResult,
        };
    } catch (err) {
        return {
            success: false,
            message: err.message,
        };
    }
}

function useCurrencyData(base, quote) {
    // useState init
    const [data, setData] = useState(null);

    useEffect(() => {
        if (base === quote) {
            return;
        }

        let ignore = false;
        async function loadData() {
            const result = await fetchCurrencyData(base, quote);
            if (!ignore) {
                setData(result);
            }
        }

        loadData();

        return () => {
            ignore = true;
        };
    }, [base, quote]);

    if (base === quote) {
        return null;
    }

    return data;
}

export default useCurrencyData;
