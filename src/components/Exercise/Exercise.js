import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { exercise, handleClick } = props;
    const { img, CategoryName, age, time } = exercise;

    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="m-2">
                <h2 className='text-1xl mt-0'>{CategoryName}</h2>
                <p>For age: {age}</p>
                <p>Time required:{time}</p>
            </div>
            <button onClick={() => handleClick(exercise)} className='bg-green-600 hover:bg-green-800 w-full btn h-10 text-white border-none'>Add to list</button>
        </div>
    );
};

export default Exercise;