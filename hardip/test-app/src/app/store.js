import { configureStore } from '@reduxjs/toolkit'
import ProoductSlice from '../reducers/ProoductSlice'

export const store = configureStore({
    reducer: {
        ProductData: ProoductSlice
    },
})