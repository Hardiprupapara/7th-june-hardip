import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../feature/todo/todoSlice'

export const store = configureStore({
    reducer: { 
        counter:counterSlice },
})