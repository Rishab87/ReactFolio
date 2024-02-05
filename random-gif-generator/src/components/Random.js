import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

 //what is process.env what does it mean , aur aise key dalne ki zarurat kya hai jab directly idhr copy paste kr skte the API key?
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY error 401 with with this
const API_KEY = 'WCULgaGe8JxKJtq66wJszz9l6ArDwzwK';

const Random = () => {


    // const [gif,setGif] = useState("");
    // const [loading, setLoading] = useState(false);

    // async function fetchData(){ //har bar random gif isliye aa rhi hai kyunki hum random gif ki api use kr rhe hai , url main dekho
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
    //     const {data} = await axios.get(url); //we need to install axios it is also used to fetch data , ismain json format main hi milta hai data .json krne ki zarurat nhi data ko , promise return krta hai , it is more secured?-->kaise find out?,should we use axios or fetch or both ?
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }


    // //agar data print krayenge api ka toh do baar ajayega agar React.Strictmode lga ho .render main toh why? , what is strictmode?
    // useEffect(()=>{
    //     fetchData()
    // },[])

    const {gif,loading,fetchData} = useGif();
  return (
    <div className='w-1/2 bg-slate-100 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold py-2 mt-[15px]'>A Random GIF</h1>
        {
            loading? (<Spinner/>):(<img src={gif} width={450} />)
        }
        <button onClick={()=> fetchData()} className='w-10/12 bg-blue-500 text-lg py-5 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random