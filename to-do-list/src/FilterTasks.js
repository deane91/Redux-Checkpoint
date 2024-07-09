// FilterTasks.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from './store';

const FilterTasks = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(filterTasks(null))}>All</button>
            <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
            <button onClick={() => dispatch(filterTasks('not done'))}>Not Done</button>
        </div>
    );
};

export default FilterTasks;
