import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 my-2 '>
            <div className='my-3'>
                <h3 className=' text-xl my-3'><span className='font-extrabold'>Question 01: </span> When we need to use Context API?</h3>
                <p className='text-[#236b22]'>
                    We use Context API to pass data to all routes. Initially, with props we pass data to one specific
                    Components, but sometimes we need these data to other components, thats time Context API helped.
                    Specifically, for avoiding prop drilling system.
                </p>
            </div>
            <div className='my-3'>
                <h3 className=' text-xl my-3'><span className='font-extrabold'>Question 02: </span> What is Custom Hook?</h3>
                <p className='text-[#236b22]'>
                Custom Hook is self-made hooks for React library. Sometimes we need any kind of customization, we use 
                custom hook. Like others hooks in react custom hook is reuseable. when we try to fetching data from json
                we can make these types of hooks and control data or error state.
                </p>
            </div>
            <div className='my-3'>
                <h3 className=' text-xl my-3'><span className='font-extrabold'>Question 03: </span> What is useRef, and the purpose of this Hook? </h3>
                <p className='text-[#236b22]'>
                Dom manipulation is hard task on react. useRef hook help to target specific dom element and do other  customization. useRef hooks provide (.current) property to perform modification things on DOM element.
                </p>
            </div>
            <div className='my-3'>
                <h3 className=' text-xl my-3'><span className='font-extrabold'>Question 04: </span> What is useMemo? </h3>
                <p className='text-[#236b22]'>
                useMemo hook memorize the return result of any function. when we are running synchronous large operations this task need time and its also blocking other operations for that we wrap this function with useMemo and put a dependency on it. thats why every time this dependency will change, this component will rerender.
                </p>
            </div>
        </div>
    );
};

export default Blog;