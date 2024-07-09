// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector(state => state.task.tasks);
    const filter = useSelector(state => state.task.filter);

    const filteredTasks = filter
        ? tasks.filter(task => filter === 'done' ? task.isDone : !task.isDone)
        : tasks;

    return (
        <div>
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
