import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_MMheuIaylzRgDGXNyBaKBRp5RBdATE9NMBO9rxAU&currencies=EUR%2CUSD%2CCHF%2CGBP&base_currency=PLN";

                const response = await axios(apiUrl);

                if (!response.status !== 200) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};
