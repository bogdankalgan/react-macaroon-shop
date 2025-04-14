import Stripe from 'stripe';

export const config = {
    api: {
        bodyParser: true,
    },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    console.log("🟡 create-checkout-session called:", req.method);
    console.log("📦 Получен запрос:", req.body);
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).send('ok');
    }

    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { line_items } = req.body;

    if (!line_items || !Array.isArray(line_items) || line_items.length === 0) {
        return res.status(400).json({ error: "Line items are missing or invalid" });
    }

    try {
        console.log("🔥 Line items на сервере:", line_items);
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: 'https://react-macaroon-shop.vercel.app/success',
            cancel_url: 'https://react-macaroon-shop.vercel.app/cancel',
        });

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({ url: session.url });
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e.message});
    }
}