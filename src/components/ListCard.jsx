import React from 'react';

const ListCard = ({item}) => {
    const { icon, title , text} = item;
    console.log(icon)
    return (
        <div className="card">
            <div className="card-icon"> 
                <img src={icon} alt="" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-text"> { text}</p>
            </div>
        </div>
    );
};

export default ListCard;