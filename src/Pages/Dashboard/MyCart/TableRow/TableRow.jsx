import React from "react";

const TableRow = ({ index, booking, setBookOrders }) => {
    // console.log(booking);
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={booking?.courseImage}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <span>{booking?.courseName}</span>
              <br></br>
              <small>Price : {booking?.price}</small>
            </div>
          </div>
        </td>
        <td>
          {" "}
          <div>
            <span>{booking?.customer}</span>
            <br></br>
            <small>{booking?.customerEmail}</small>
          </div>
        </td>
        <td>
          <button onClick={() => setBookOrders(booking)}>
            <label htmlFor="paymentModal" className="btn btn-ghost btn-xs">
              Pay
            </label>
          </button>
        </td>
        <td>
          <label htmlFor="paymentModal" className="btn btn-ghost btn-xs">
            Delete
          </label>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
