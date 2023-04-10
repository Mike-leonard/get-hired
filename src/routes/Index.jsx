import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';

const getCategoryItems = async () => {

}


const Index = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('category-list.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

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

                <div className="card rounded-md border-2 px-10 py-7">
                    <div className="my-5 ">
                        <img className='h-22  w-32 rounded-lg p-1' src="https://img.icons8.com/clouds/256/google-logo.png" alt="" />
                    </div>
                    <div className="card-content">
                        <h3 className="my-2 text-xl font-semibold">Hello</h3>
                        <p className="text-[#622e2e] ">Normal text</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Index;