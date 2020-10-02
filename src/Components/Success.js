import React from 'react';


const Success = ({ title, years, image }) => {

    return (
        <div className="success">
            <div className="success_name">
            <h3>{title}</h3>
            <p style={{marginTop: 5}}>Sezony:</p>
            <p style={{ fontSize: 15}}>{years}</p></div>
            <div className="success_image"><img style={{width: 200, height: 100}}src={image} alt="cup" /></div>
        </div>
    );
}

export default Success
