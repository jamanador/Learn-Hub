import React from 'react';

const Confrimation = ({successAction,modalData}) => {
    console.log(modalData);
    return (
        <div className='dark:text-black dark:bg-red-700'>
        <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="confirmation-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            
            <h3 className="text-lg font-bold">Course : <span className='text-purple-600'>{modalData?.courseName}</span></h3>
            <h3 className="text-sm font-bold">Price : {modalData?.price}</h3>
            <p className="py-2 text-black font-bold text-sm">Customer: {modalData.customer}</p>
            <button
                onClick={() => successAction(modalData._id)}
                className="px-2 text-sm py-1 rounded-full mt-2 text-white bg-red-500"
              >
                Confirm Delete
              </button> 
          </div>
        </div>
      </div>
    );
};

export default Confrimation;