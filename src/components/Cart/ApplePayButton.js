import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

export const useApplePay = (total) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        if (!stripe) return;

        const request = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: "Macaroon Shop",
                amount: total * 100,
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        request.canMakePayment().then(result => {
            if (result) setPaymentRequest(request);
        });
    }, [stripe, total]);

    return paymentRequest;
};