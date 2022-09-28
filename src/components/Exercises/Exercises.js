import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (

        <div className='fitness-container'>

            <div className="exercise-container">
                {
                    exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
                }
            </div>
            <div className="cart-container">
                <p>I am from cart</p>
            </div>
        </div>
    );
};

export default Exercises;