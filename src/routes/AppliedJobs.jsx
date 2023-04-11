import React from 'react';
import AppliedCard from '../components/AppliedCard';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const { savedJobList } = useLoaderData()
    console.log(savedJobList)
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
                savedJobList.map(single => <AppliedCard single={single} key={single.id} />)
            }
        </div>
    );
};

export default AppliedJobs;