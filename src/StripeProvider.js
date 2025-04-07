import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51R6DaOH6MqYhcDi3LMz3N61TkFdRnv0RHY2TjArdkQ95KSiF04zBKhlaiAuDtp7m9nFzFwZhoutY3UGKOpN7SiG800k1x8r7KN"); // вставь свой публичный ключ

const StripeProvider = ({children}) => {
    return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;