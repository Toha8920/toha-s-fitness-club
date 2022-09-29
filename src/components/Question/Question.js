import React from 'react';

const Question = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-2xl text-red-600'>How does react work?</h1>
            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
    );
};

export default Question;