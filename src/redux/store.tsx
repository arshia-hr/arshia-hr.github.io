import { configureStore } from "@reduxjs/toolkit";
import  MenuSlice  from "./MenuSlice";

export const store = configureStore({
    reducer: {
        Menu:  MenuSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch