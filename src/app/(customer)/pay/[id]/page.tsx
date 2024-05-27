"use client";

import CheckoutForm from "@/src/components/Checkout";
import Container from "@/src/components/Container";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

/**
 * Represents the props for the PayPage component.
 */
interface PayPage {
  /**
   * The parameters object containing the order ID.
   */
  params: {
    /**
     * The ID of the order.
     */
    id: string;
  };
}

/**
 * Represents the payment page.
 * @param {PayPage} props - The component props.
 * @returns {JSX.Element} The JSX element representing the payment page.
 */

export default function PayPage({ params }: { params: { id: string } }) {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = params;

  /**
   * Fetches the client secret for the payment intent.
   *
   * This useEffect hook runs once when the component is mounted or when the `id` changes.
   * It sends a POST request to the server to create a payment intent and retrieve the client secret.
   * If the request is successful, the client secret is saved in the component's state.
   * If the request fails, an error is logged to the console.
   */

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };
  return (
    <div className="mt-16 shadow-md bg-slate-200">
      <Container>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </Container>
    </div>
  );
}
