import React from "react";

const PaymentModal = ({ bookOrders }) => {
  return (
    <div>
      {/* The button to open modal */}

      <input type="checkbox" id="paymentModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Course : {bookOrders?.courseName}</h3>
          <p className="py-2 font-medium">Price: {bookOrders?.price}</p>
          <p className="font-medium">Name: {bookOrders?.customer}</p>
          <p className="font-medium">Email: {bookOrders?.customerEmail}</p>
          <div className="modal-action">
            <label
              htmlFor="paymentModal"
              className="py-1 px-8 text-white bg-purple-600"
            >
              Pay
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
