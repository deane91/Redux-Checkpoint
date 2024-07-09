// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './store';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleEdit = (newDescription) => {
        dispatch(editTask(task.id, newDescription));
    };

    return (
        <div>
            <input 
                type="checkbox" 
                checked={task.isDone} 
                onChange={handleToggle} 
            />
            <span 
                style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
                onClick={() => handleEdit(prompt('Edit task description:', task.description))}
            >
                {task.description}
            </span>
        </div>
    );
};

export default Task;
