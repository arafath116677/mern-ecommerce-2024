const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ac5rV8ax8Feqz3d9xTz-RtO7f1B6wmkVdHxXVTRo0Eu2gsmYE9ph26pMm3P6dozwAYNWqqe4sMpdEB5T",
  client_secret: "EAOW6foMITri3KCjMPXLczdyolT7yYcwYfcbjnmogZ2xTYozMgkrGGAH8cLLRo1L-00_OkjBp5gG0NPG",
});

module.exports = paypal;
