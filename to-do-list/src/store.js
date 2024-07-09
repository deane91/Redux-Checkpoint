// store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';

// Initial state
const initialState = {
    tasks: []
};

// Action types
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const FILTER_TASKS = 'FILTER_TASKS';

// Action creators
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const editTask = (id, newDescription) => ({
    type: EDIT_TASK,
    payload: { id, newDescription },
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
});

export const filterTasks = (status) => ({
    type: FILTER_TASKS,
    payload: status,
});

// Reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload.id 
                        ? { ...task, description: action.payload.newDescription } 
                        : task
                )
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload 
                        ? { ...task, isDone: !task.isDone } 
                        : task
                )
            };
        case FILTER_TASKS:
            return { 
                ...state, 
                filter: action.payload 
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    task: taskReducer,
});

const store = createStore(rootReducer);

export default store;
