import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";

//configureStore creates a global store jaha pr apka sara centralised daaata pda hoga
export const store = configureStore({
    reducer: { //slice ke andar CounterSlice.reducer se reducer create kra hua hai , usmain reducer create krne se kya create hua matlab kya hua?
        counter: CounterSlice //reducer ke andar ke slice define kr diya hai
    },
})