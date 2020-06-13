const stripeLib = require("stripe")
const stripe = stripeLib(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = cartState => {
    const totalPrice = cartState && cartState.reduce((acc, {price, quantity}) => {
        return acc + (price * quantity)
    }, 0)
    return Math.round(totalPrice)
};


export default async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "aud"
    });

    res.json({
        clientSecret: paymentIntent.client_secret
    })
}