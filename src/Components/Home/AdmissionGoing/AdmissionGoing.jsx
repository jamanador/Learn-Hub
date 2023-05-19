import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionGoing = () => {
    const admissions = ["Unlock your future with us.", "Quality education for a prosperous future." ,"Taking your career to new heights."]
    return (
        <div className='text-center py-8'>
            <h3 className='font-bold py-4 lg:text-2xl text-sm'>Admission Going On</h3>
            {
                admissions?.map((admission,index)=> <li key={index} admission={admission}>{admission}</li>)
            }
            <Link to='/courses'><button className="lg:px-16 px-8 py-2 bg-purple-700 text-white">Apply Now</button></Link>
        </div>
    );
};

export default AdmissionGoing;