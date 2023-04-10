import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const FeatureCard = () => {
    return (
        <div className="card rounded-md border-2 px-10 py-7">
            <div className="">
                <img className='w-24 rounded-lg' src="https://img.icons8.com/clouds/256/google-logo.png" alt="" />
            </div>
            <div className="card-content">
                <h3 className="my-2 text-xl font-semibold">jobTitle</h3>
                <p className="text-[#757575]">companyName</p>
                <div className='flex gap-3 my-3'>
                    <button className='px-5 rounded-sm border border-blue-500 text-blue-500'>jobType</button>
                    <button className='px-5 rounded-sm border border-blue-500 text-blue-500'>time</button>
                </div>

                <div className='flex gap-3 text-[#757575]'>
                    <p className='flex gap-2'>
                        <MapPinIcon className="h-5 w-5 text-[#534943]" />
                        location
                    </p>
                    <p className='flex gap-2'>
                        <CurrencyDollarIcon className="h-5 w-5 text-[#534943]" />
                        salary
                    </p>
                </div>
                <div class="basis-1/4 flex flex-row items-center my-3">
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            py-2 px-6 rounded-sm font-semibold '>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;