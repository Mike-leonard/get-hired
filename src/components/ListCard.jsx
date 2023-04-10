import React from 'react';

const ListCard = ({item}) => {
    const { icon, title , text} = item;
    return (
        <div className="card rounded-md bg-[#DBCFC7] px-10 py-7">
            <div className="my-5 "> 
                <img className='h-20 bg-[#cac6c3] rounded-lg p-1' src={icon} alt="" />
            </div>
            <div className="card-content">
                <h3 className="my-2 text-xl font-semibold">{title}</h3>
                <p className="text-[#622e2e] "> { text}</p>
            </div>
        </div>
    );
};

export default ListCard;