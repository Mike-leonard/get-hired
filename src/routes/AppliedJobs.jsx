import React from 'react';
import { CurrencyDollarIcon, QueueListIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const AppliedJobs = () => {
    return (
        <div className='p-5 my-8'>
            <div className='py-2 mb-2 flex justify-end w-8/12 mx-auto'>
                <select id="pet-select" className='p-2 rounded-sm'>
                    <option value="">Filter By</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                </select>
            </div>

            <div className='border py-2 pl-2 pr-5 w-8/12 mx-auto'>
                <div class="flex flex-row">
                    <div class="basis-1/4 flex flex-row items-center justify-center">
                        <img className='w-32' src="https://thumbs.dreamstime.com/b/abc-initials-letter-company-logo-icon-abc-initials-letter-company-logo-148669540.jpg" alt="" />
                    </div>
                    <div class="basis-5/6 flex flex-col justify-center">
                        <h6 className='font-semibold'>jobTitle</h6>
                        <p className='font-mono text-slate-500'>companyName</p>
                        <div className='flex gap-3 my-3'>
                            <button className='px-5 rounded-sm border border-blue-500 text-blue-500'>jobType</button>
                            <button className='px-5 rounded-sm border border-blue-500 text-blue-500'>time</button>
                        </div>
                        <div className='flex gap-3'>
                            <p className='flex gap-2'>
                                <MapPinIcon className="h-5 w-5 text-[#534943]" />
                                location
                            </p>
                            <p className='flex gap-2'>
                                <CurrencyDollarIcon className="h-5 w-5 text-[#534943]" />
                                salary
                            </p>
                        </div>
                    </div>
                    <div class="basis-1/4 flex flex-row items-center">
                        <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            p-2 rounded-sm font-semibold w-full '>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;