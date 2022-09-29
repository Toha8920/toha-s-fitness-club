import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';

import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleClick = (exercise) => {
        const newCart = [...cart, exercise];
        setCart(newCart)
    };

    return (

        <div className='fitness-container'>

            <div className="exercise-container">
                {
                    exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id} handleClick={handleClick}></Exercise>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Exercises;