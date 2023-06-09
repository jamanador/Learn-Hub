// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";

// const CheckOutForm = ({ paymentData }) => {
//   const { price,courseName,customerEmail } = paymentData;
//   const [cardError, setCardError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [clientSecret, setClientSecret] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//       body: JSON.stringify({ price }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setClientSecret(data.clientSecret);
//       });
//   }, [price]);

//   const handleSubmit = async (e) => {
//     setLoading(true)
//     e.preventDefault();
//     if (!stripe || elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card == null) {
//       return;
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });
//     if (error) {
//       setCardError(error.message);
//     } else {
//       setCardError("");
//     }
//     const { paymentIntent, error: confirmError } =
//     await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: card,
//         billing_details: {
//           courseName: courseName,
//           customerEmail: customerEmail,
//         },
//       },
//     });

//     if(confirmError){
//         setCardError(confirmError.message)
//         return;
        
//     }
//     console.log("PaymentIntent",paymentIntent);

//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#FFFFFF",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           type="submit"
//           className="my-6 rounded-md py-1 px-6 bg-black text-white font-medium"
//           disabled={!stripe}
//         >
//           {/* {loading ? <SmallSpinner /> : "Confirm Now"} */}
//           confirm Now
//         </button>
//       </form>
//       <p className="py-3 font-medium text-red-500">{cardError}</p>
//     </>
//   );
// };

// export default CheckOutForm;
