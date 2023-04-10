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
            <h2 className='text-4xl font-bold text-center'>Job Category List</h2>
            <p className='text-center mt-4 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='flex gap-10 my-8 justify-center'>
                {
                    data.map(item => <ListCard item={item} key={item.id} />)
                }
            </div>
        </div>
    );
};

export default Index;