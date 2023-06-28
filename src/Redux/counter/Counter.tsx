import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT, TOGGLE, INCREASE } from '../store/reducer';

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const counter: number = useSelector((state: any) => state.counter);
    const show = useSelector((state: any) => state.inToggledOn)

    const incrementHandler = () => {
        dispatch({ type: INCREMENT });
    };

    const decrementHandler = () => {
        dispatch({ type: DECREMENT });
    };
    
    const increaseHandler = () => {
        dispatch({ type: INCREASE , payload: 10});
    };

    // const toggleHandler = () => {
    //     dispatch({ type: TOGGLE });
    // };

    return (
        <div>
            <h2>Redux Counter</h2>
            {!show && <div className='counter-btn'>{counter}</div>}
            <div>
                <button className='counter-btn' onClick={incrementHandler}>Increment</button>
                <button className='counter-btn' onClick={increaseHandler}>Increase by 10</button>
                <button className='counter-btn' onClick={decrementHandler}>Decrement</button>
            </div>
            {/* <button className='counter-btn' onClick={toggleHandler}>Toggle</button> */}
        </div>
    );
};

export default Counter;
