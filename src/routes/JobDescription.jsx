import React from 'react';
import { CurrencyDollarIcon, QueueListIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const JobDescription = () => {
    return (
        <div className=' my-10 mx-24'>

            <div class="flex flex-row gap-10 justify-center">
                <div class="basis-4/5">
                    <h6 className='mb-5'><span className='font-semibold'>Job Description:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deseruntconsectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deserunt!</h6>

                    <h6 className='mb-5'><span className='font-semibold'>Job Responsibility:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deseruntconsectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deserunt!</h6>

                    <h6 className='font-semibold mb-2'>Educational Requirements:</h6>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deseruntconsectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deserunt!</p>
                        
                    <h6 className='font-semibold mb-2'>Experiences:</h6>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deseruntconsectetur adipisicing elit. Inventore soluta sit quia quasi explicabo labore! Quis quae sunt doloremque deserunt!
                    </p>
                </div>

                <div class="basis-2/6">
                    <div className='bg-[#DBCFC7] p-4 rounded-md text-sm'>
                        <h4 className='font-bold my-3'>Job Details</h4>
                        <hr />
                        <h6 className='mt-5 mb-2 flex gap-2'>
                            <CurrencyDollarIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Salary:</span>
                            100K-150K (Per Month)
                        </h6>
                        <h6 className='flex gap-2'>
                            <QueueListIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Job Title:</span>
                            Product Designer
                        </h6>
                        <h4 className='font-bold my-3'>Contact Information</h4>
                        <hr />
                        <h6 className='mt-5 mb-2 flex gap-2'>
                            <PhoneIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Phone:</span>
                            Product Designer
                        </h6>
                        <h6 className='flex gap-2 mb-2'>
                            <EnvelopeIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Email:</span>
                            Product Designer
                        </h6>
                        <h6 className='flex gap-2 mb-2'>
                            <MapPinIcon className="h-5 w-5 text-[#534943]" />
                            <span className='font-semibold'>Address:</span>
                            Product Designer
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