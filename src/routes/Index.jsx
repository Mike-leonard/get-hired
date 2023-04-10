import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import FeatureCard from '../components/FeatureCard';
import { useLoaderData } from 'react-router-dom';

const getCategoryItems = async () => {

}


const Index = () => {

    /* job category data fetch */
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('category-list.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    /* Feature Job list data getting by loader */
    let [showButton, setShowButton] = useState(true)
    const [jobs, setJobs] = useState([])
    const jobLists = useLoaderData()
    const initialJobData = jobLists.slice(0, 4)

    useEffect(() => {
        setJobs(initialJobData);
    }, []);

    const seeAllJobs = () => {
        setJobs(jobLists)
        setShowButton(!showButton)
    };
    console.log(jobs)

    return (
        <div className='p-5 my-8'>
            <section className='Job-category'>
                <h2 className='text-4xl font-bold text-center'>Job Category List</h2>
                <p className='text-center mt-4 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='flex gap-10 my-8 justify-center'>
                    {
                        data.map(item => <ListCard item={item} key={item.id} />)
                    }
                </div>
            </section>

            <section className='Featured-jobs my-16'>
                <h2 className='text-4xl font-bold text-center'>Featured Jobs</h2>
                <p className='text-center mt-4 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-2 gap-8 my-5 w-9/12 mx-auto'>
                    {
                        jobs.map(item => <FeatureCard key={item.id} />)
                    }
                </div>

                <div className="basis-1/4 flex flex-row  justify-center my-3">
                    {
                        showButton && <button onClick={seeAllJobs} className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white
            py-3 px-6 rounded-md font-semibold '>Sell All Jobs</button>
                    }
                </div>
            </section>


        </div>
    );
};

export default Index;