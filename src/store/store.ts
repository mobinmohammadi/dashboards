import { configureStore } from "@reduxjs/toolkit";
import  ToastReducer  from './../redux/toast.slicer'

export const store = configureStore({
    reducer : {
        toast : ToastReducer
    }
})