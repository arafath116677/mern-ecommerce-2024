const express = require("express");
const SSLCommerzPayment = require("sslcommerz-lts");
const router = express.Router();

router.post("/initiate", async (req, res) => {
    const { totalAmount, customer } = req.body;

    const data = {
        total_amount: totalAmount,
        currency: "BDT",
        tran_id: "REF" + Date.now(),
        success_url: "https://your-backend.com/api/payment/success",
        fail_url: "https://your-backend.com/api/payment/fail",
        cancel_url: "https://your-backend.com/api/payment/cancel",
        ipn_url: "https://your-backend.com/api/payment/ipn",
        product_name: "Test Product",
        product_category: "Ecommerce",
        product_profile: "general",
        cus_name: customer.name,
        cus_email: customer.email,
        cus_add1: customer.address,
        cus_phone: customer.phone,
        cus_city: "Dhaka",
        cus_country: "Bangladesh",
        shipping_method: "NO",
        multi_card_name: "",
    };

    const sslcz = new SSLCommerzPayment(
        process.env.SSL_STORE_ID,
        process.env.SSL_STORE_PASSWORD,
        false
    );

    try {
        const response = await sslcz.init(data);
        res.status(200).json({ GatewayPageURL: response.GatewayPageURL });
    } catch (error) {
        res.status(500).json({ error: "Payment initialization failed" });
    }
});

router.post("/success", (req, res) => {
    console.log("Payment Success:", req.body);
    res.redirect("https://your-frontend.com/payment-success");
});

router.post("/fail", (req, res) => {
    console.log("Payment Failed:", req.body);
    res.redirect("https://your-frontend.com/payment-fail");
});

router.post("/cancel", (req, res) => {
    console.log("Payment Cancelled:", req.body);
    res.redirect("https://your-frontend.com/payment-cancel");
});

module.exports = router;
