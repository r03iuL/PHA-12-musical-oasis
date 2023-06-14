
import { loadStripe } from '@stripe/stripe-js';

import useCart from "../../../Hook/useCart";
import CheckoutForm from "./checkOutForm";
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
// TODO: provide publishable Key

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;