import React from 'react';
import { Link } from 'react-router-dom';
import './AdmissionGoing.css';
const AdmissionGoing = () => {
 
    return (
        <div className='lg:my-20 my-10 text-center py-12 text-white dark:text-white bg'>
           <div className='flex items-center justify-center'>
           <h3 className='font-bold py-4 lg:text-2xl text-sm'>Admission Going </h3>
           <div className='w-7 h-7 border-4 border-dashed rounded-full animate-spin ml-2 mr-1 border-green-600'></div>n
           </div>
            <ul className='flex flex-wrap justify-center list-none'>
                <li className='px-2 text-lg'> ✔ Unlock your future with us.</li>
                <li className='px-2 text-lg'> ✔ Quality education for a prosperous future.</li>
                <li className='px-2 text-lg'> ✔ Taking your career to new heights.</li>
            </ul>
            <Link to='/courses'><button className="lg:px-16 px-8 py-2 lg:my-4 my-2 bg-purple-700 text-white rounded-full">Apply Now</button></Link>
        </div>
    );
};

export default AdmissionGoing;