import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const AppliedCard = () => {
    return (
        <div className='border py-2 pl-2 pr-5 w-8/12 mx-auto my-2'>
            <div className="flex flex-row">
                <div className="basis-1/4 flex flex-row items-center justify-center">
                    <img className='w-32' src="https://thumbs.dreamstime.com/b/abc-initials-letter-company-logo-icon-abc-initials-letter-company-logo-148669540.jpg" alt="" />
                </div>
                <div className="basis-5/6 flex flex-col justify-center">
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
                <div className="basis-1/4 flex flex-row items-center">
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            p-2 rounded-sm font-semibold w-full '>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedCard;