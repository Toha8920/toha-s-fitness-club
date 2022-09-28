import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { img } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;