import React, {useEffect, useState} from "react";
import {useStripe, PaymentRequestButtonElement} from "@stripe/react-stripe-js";

function ApplePayButton({total}) {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        if (!stripe) return;

        const request = stripe.paymentRequest({
            country: 'RU',
            currency: 'rub',
            total: {
                label: "Macaroon Shop",
                amount: total * 100,
            },
            requestPayerName: true,
            requestPayerEmail: true,
        })

        request.canMakePayment().then(result => {
            if (result) setPaymentRequest(request)
        })
    }, [stripe, total]);

    return (
        <div>
            <PaymentRequestButtonElement options={{paymentRequest}}/>
        </div>
    )
}


export default ApplePayButton;