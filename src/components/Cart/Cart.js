import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <div className='	display: flex'>
                <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/152089751_2731863293810800_7553920304324723875_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=12FWwWXqQSAAX_JOacy&_nc_ht=scontent.fdac24-2.fna&oh=00_AT-lpIyDfziNUF9RYONE-9GLSQjB0oGfVr5qHvkhXN6QAA&oe=635AA100" alt="" />
                <div>
                    <h1 className='text-3xl ml-5'>Toha Islam</h1>
                    <p className='ml-5 text-slate-500'> Laxmipur, Bangladesh</p>
                </div>
            </div>
            <div className='display: flex m-3 shadow-lg shadow-indigo-500/40 mt-7'>
                <div>
                    <h1 className='text-2xl m-4'>75<span className='text-slate-500 text-sm'>kg</span></h1>
                    <h3 className='text-1xl m-4 text-slate-600'>Weight</h3>
                </div>
                <div>
                    <h1 className='text-2xl m-4'>6.5</h1>
                    <h3 className='text-1xl m-4 text-slate-600'>Height</h3>
                </div>
                <div>
                    <h1 className='text-2xl m-4 '>23<span className='text-slate-500 text-sm'>yrs</span></h1>
                    <h3 className='text-1xl m-4 text-slate-600'>Age</h3>
                </div>
            </div>
            <div className='shadow-lg shadow-indigo-500/40 mt-10'>
                <h2 className='text-2xl m-2 text-center'>Add A Break</h2>
                <div className='display: flex justify-center '>
                    <h2 className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>10s</h2>
                    <h2 className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>10s</h2>
                    <h2 className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>10s</h2>
                    <h2 className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>10s</h2>
                </div>
            </div>
            <div>
                <h1 className='text-2xl mt-10'>Exercise Details</h1>
                <input className='bg-slate-200 h-10 px-2 mt-3' type="text" placeholder='Exercise Time ' />
                <input className='bg-slate-200 h-10 px-2 mt-3' type="text" placeholder='Break Time' />
            </div>
            <div>
                <button className='text-2xl mt-16 bg-rose-500 p-3 rounded-md ml-8'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;