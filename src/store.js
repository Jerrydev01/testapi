import { configureStore } from '@reduxjs/toolkit'
import userCovid from './features/covidSlice'

export const store = configureStore({
    reducer: {
        user: userCovid,
    },
})