import axios from "axios";

export default function SSLCommerzButton() {
  const initiatePayment = async () => {
    try {
      const res = await axios.post("https://your-backend.com/api/payment/initiate", {
        totalAmount: 1000,
        customer: {
          name: "Arafath",
          email: "test@example.com",
          phone: "017XXXXXXXX",
          address: "Dhaka"
        }
      });

      if (res.data.GatewayPageURL) {
        window.location.href = res.data.GatewayPageURL;
      } else {
        alert("Payment initiation failed.");
      }
    } catch (error) {
      alert("Something went wrong during payment.");
      console.error(error);
    }
  };

  return (
    <button
      onClick={initiatePayment}
      style={{
        padding: "10px 20px",
        backgroundColor: "#2b8a3e",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Pay with SSLCOMMERZ
    </button>
  );
}
