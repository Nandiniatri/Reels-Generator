import { configureStore } from "@reduxjs/toolkit";
import templatesReducers from '../features/templates/templateSlice'

export const store = configureStore({
    reducer:{
        templates: templatesReducers
    }
})
