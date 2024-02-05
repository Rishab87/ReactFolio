import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
//CUSTOM HOOK
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData(tag){ 
        setLoading(true);
        //tag wala url se uper se htakr idhr daldiya kyunki uper function ke bahar toh tag defined hi nhi 
        console.log(`${randomMemeUrl}&tag=${tag}&rating=g`);
        const {data} = await axios.get(tag? (`${randomMemeUrl}&tag=${tag}`): (randomMemeUrl));
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData(tag);
    },[])

    return {gif , loading , fetchData}; //yeh cheeze return krayi hai kyunki yeh Random.js ya Tag.js main use kr rhe hai
}

export default useGif;