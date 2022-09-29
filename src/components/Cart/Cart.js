import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { addToDb, getData } from '../../fakeDb/fakedb';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;


    let total = 0;
    for (const exercise of cart) {
        total = total + parseFloat(exercise.time);
    }
    const [carts, setCarts] = useState([10]);
    const addBreak = () => {

        setCarts(cart)
    }

    const handleCart = (time) => {
        setCarts(time);
        addToDb(time)
    }
    useEffect(() => {
        const storedData = getData();
        setCarts(storedData);
    }, []);

    const notify = () => {
        toast("Hey Toha !! You completed the assignment")
    };

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
                    <h1 className='text-2xl m-4'>50<span className='text-slate-500 text-sm'>kg</span></h1>
                    <h3 className='text-1xl m-4 text-slate-600'>Weight</h3>
                </div>
                <div>
                    <h1 className='text-2xl m-4'>5.4</h1>
                    <h3 className='text-1xl m-4 text-slate-600'>Height</h3>
                </div>
                <div>
                    <h1 className='text-2xl m-4 '>23<span className='text-slate-500 text-sm'>yrs</span></h1>
                    <h3 className='text-1xl m-4 text-slate-600'>Age</h3>
                </div>
            </div>
            <div className='shadow-lg shadow-indigo-500/40 mt-10'>
                <h2 className='text-2xl m-2 text-center'>Add A Break</h2>
                <div className='display: flex justify-center'>
                    <button onClick={() => handleCart(10)} className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>10s</button>
                    <button onClick={() => handleCart(20)} className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>20s</button>
                    <button onClick={() => handleCart(30)} className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>30s</button>
                    <button onClick={() => handleCart(40)} className=' rounded-3xl  bg-amber-400 w-1/12 m-2'>40s</button>
                </div>
            </div>
            <div>
                <h1 className='text-2xl mt-10'>Exercise Details</h1>
                <p className='bg-slate-200 h-10 px-2 mt-3'>Exercise Time: {total}min</p>
                <p className='bg-slate-200 h-10 px-2 mt-3'>Break Time: {carts}s</p>
            </div>
            <div>
                <button onClick={notify} className='text-2xl mt-16 bg-rose-500 p-3 rounded-md ml-8'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;