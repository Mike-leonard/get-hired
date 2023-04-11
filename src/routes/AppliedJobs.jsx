import React, { useEffect, useState } from 'react';
import AppliedCard from '../components/AppliedCard';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    /* state for filtering Applied jobs */
    const [savedJob, setSavedJob ] = useState([])
    let { savedJobList } = useLoaderData()

    useEffect( () => {
        setSavedJob(savedJobList)
    }, [])

    /* filter Implementation */
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            const jobFilter = savedJobList.filter(job => job.jobType === selectedValue)
            setSavedJob(jobFilter)
        }
      
    }

    return (
        <div className='p-5 my-8'>
            <div className='py-2 mb-2 flex justify-end w-8/12 mx-auto'>
                <select id="pet-select" className='p-2 rounded-sm' onChange={handleChange}>
                    <option value="">Filter By</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>
            </div>

            {
                savedJob.map(singleJob => <AppliedCard singleJob={singleJob} key={singleJob.id} />)
            }
        </div>
    );
};

export default AppliedJobs;