import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => { //initialState wala object pass hojayega
            state.value +=1;
        },
        decrement: (state) =>{
            state.value -=1; //action creator generate hojate hai sare reducer function ke liye , agar function ko slice main se bahar nikalna hai toh woh action creator se nikalna pdega , sare functions ki implementation action creator main store hojati hai.
            //what is action creator , and what kind of thing is a slice how it is stored in memory?
        }
    }
})

export const {increment , decrement} = CounterSlice.actions; //we can access action creator .actions after writing slice name
export default CounterSlice.reducer; //jo functionality slice main store krna chahte hai usse reducer ke andar likhte hai, what does writing reducers do? why we need to export reducer