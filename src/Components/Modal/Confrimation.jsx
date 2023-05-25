import React from 'react';

const Confrimation = ({successAction,modalData}) => {
    console.log(modalData);
    return (
        <div>
        <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="confirmation-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Course : {modalData?.courseName}</h3>
            <h3 className="text-lg font-bold">Price : {modalData?.price}</h3>
            <p className="py-2 text-green-500 font-bold text-sm">Customer: {modalData.customer}</p>
            <button
                onClick={() => successAction(modalData._id)}
                className="px-2 text-sm py-1 text-white bg-red-500"
              >
                Confirm Delete
              </button> 
          </div>
        </div>
      </div>
    );
};

export default Confrimation;