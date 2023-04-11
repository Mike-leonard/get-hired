import React from 'react';
import { CurrencyDollarIcon, QueueListIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useLocation, useParams } from 'react-router-dom';

const JobDescription = () => {

    const params = useParams()
    const jobLists = useLoaderData()
    const job = jobLists.find(job => job.id === params.id)
    const { id, jobDescription, jobResponsibility,
        educationalRequirements, experiences, salary,
        jobTitle, contactInformation, location
    } = job
    return (
        <div className=' my-10 mx-24'>

            <div className="flex flex-row gap-10 justify-center">
                <div className="basis-4/5">
                    <h6 className='mb-5'><span className='font-semibold'>Job Description:</span> {jobDescription}</h6>

                    <h6 className='mb-5'><span className='font-semibold'>Job Responsibility:</span> {jobResponsibility}</h6>

                    <h6 className='font-semibold mb-2'>Educational Requirements:</h6>
                    <p className='mb-5'> {educationalRequirements} </p>
                    <h6 className='font-semibold mb-2'>Experiences:</h6>
                    <p className=''>{experiences}</p>
                </div>

                <div className="basis-2/6">
                    <div className='bg-[#DBCFC7] p-4 rounded-md text-sm'>
                        <h4 className='font-bold my-3'>Job Details</h4>
                        <hr />
                        <h6 className='mt-5 mb-2 flex gap-2'>
                            <CurrencyDollarIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Salary:</span>
                            {salary} (Per Month)
                        </h6>
                        <h6 className='flex gap-2'>
                            <QueueListIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Job Title:</span>
                            {jobTitle}
                        </h6>
                        <h4 className='font-bold my-3'>Contact Information</h4>
                        <hr />
                        <h6 className='mt-5 mb-2 flex gap-2'>
                            <PhoneIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Phone:</span>
                            {contactInformation.phone}
                        </h6>
                        <h6 className='flex gap-2 mb-2'>
                            <EnvelopeIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Email:</span>
                            {contactInformation.email}
                        </h6>
                        <h6 className='flex gap-2 mb-2'>
                            <MapPinIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Address:</span>
                            {location}
                        </h6>
                    </div>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            p-3 rounded-lg font-semibold mt-5 w-full '>Apply Now</button>
                </div>
            </div>



        </div>
    );
};

export default JobDescription;