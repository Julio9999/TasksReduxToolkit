import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../interfaces/tasks/task';
import { v4 } from 'uuid';

const initialState: InitialState[] = [{
    id: '1',
    title: 'Task 1',
    description: 'This is the task 1',
    completed: false
}, {
    id: '2',
    title: 'Task 2',
    description: 'This is the task 2',
    completed: false
}]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({...action.payload, id: v4()})
        },
        deleteTask : (state, action) => {
            return state.filter((task) => task.id != action.payload)
        },
        updateTask : (state, action) => {
            const index = state.findIndex((item) => item.id == action.payload.id)
            state[index] = {...action.payload.data, id: action.payload.id}
        }
    }
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;