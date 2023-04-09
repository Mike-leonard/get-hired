import React from 'react';

const ListCard = ({ icon, title, text }) => {
    return (
        <div className="card">
            <div className="card-icon">{icon}</div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default ListCard;