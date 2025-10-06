import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_MMheuIaylzRgDGXNyBaKBRp5RBdATE9NMBO9rxAU&currencies=EUR,USD,CHF,GBP&base_currency=PLN";

                const response = await axios.get(apiUrl);

                if (response.status !== 200) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const { data } = response;

                setRatesData({
                    state: "success",
                    rates: data.data,
                    date: data.meta.last_updated_at,
                });

            } catch (error) {
                console.error("Błąd pobierania danych:", error);
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};
