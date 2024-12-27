import { cookies } from 'next/headers';
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value || null; 
  try {
    const order = await razorpay.orders.create({
      amount: 100*1500, 
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    return new Response(JSON.stringify({ orderId: order.id }), {
      status: 200,
      headers: {
        'Set-Cookie': `token=${token || order.id}; Path=/; HttpOnly`,
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error("Error creating order:", error);
    return new Response(JSON.stringify({ error: "Error creating order" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
