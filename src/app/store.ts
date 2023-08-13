import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/tasksSlice.ts';

export type RootState = ReturnType<typeof store.getState>


const store = configureStore({
    reducer:{tasks: taskReducer}
})

export default store;