import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Slices/CounterSlice';

const Counter = () => {

    //agar slice ke andar ka data access krna hai toh use selector ka use krna pdega , jab bhi state ko fetch krne ki koshish krte hai pehle store ke pass call jata hai phir slice ke pass
    const count = useSelector((state) => state.counter.value); //ui pr bhi change hojayega agar data change hoga inside slice , useSelector ki internal working?
    //what is state? matlab kis tareeke ka object
    const dispatch = useDispatch(); //to call reducers we need to call useDispatch , usse hota kya hai? internal working?
    //useDispatch main slice ka name dalne ki zarurat nhi pd rhi unke functions ko access krne ke liye why? kyunki useSelector main toh pd rhi thi

  return (
    <div>
        <button onClick={()=> dispatch(increment())}>
            Increment
        </button>
        <br/>
        <br/>

        <div>{count}</div>

        <br/>
        <br/>

        <button onClick={()=> dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter