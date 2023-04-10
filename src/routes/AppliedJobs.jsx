import React from 'react';
import AppliedCard from '../components/AppliedCard';


const AppliedJobs = () => {
    const data= [1,2,3,4]
    return (
        <div className='p-5 my-8'>
            <div className='py-2 mb-2 flex justify-end w-8/12 mx-auto'>
                <select id="pet-select" className='p-2 rounded-sm'>
                    <option value="">Filter By</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
            </div>

            {
                data.map(single => <AppliedCard />)
            }
        </div>
    );
};

export default AppliedJobs;