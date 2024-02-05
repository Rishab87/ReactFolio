import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//what is process.env what does it mean , aur aise key dalne ki zarurat kya hai jab directly idhr copy paste kr skte the API key?
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY error 401 with with this
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag , setTag] = useState("car");
    // const [gif,setGif] = useState("");
    // const [loading, setLoading] = useState(false);

    // async function fetchData(){ //har bar random gif isliye aa rhi hai kyunki hum random gif ki api use kr rhe hai , url main dekho , yeh api tag support krta hai matlab tag denge uske baisi pr bhi pr bhi response generate krdega matlab apni marzi se koi bhi value deke uska gif pa skte hai isi url se
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`;
    //     const {data} = await axios.get(url); //we need to install axios it is also used to fetch data , ismain json format main hi milta hai data .json krne ki zarurat nhi data ko , promise return krta hai , it is more secured?-->kaise find out?,should we use axios or fetch or both ?
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    //agar data print krayenge api ka toh do baar ajayega agar React.Strictmode lga ho .render main toh why? , what is strictmode?
    // useEffect(()=>{
    //     fetchData()
    // },[])
    //jsx code jitna bhi ho usse farak nhi pdta pr logical code jitna kam ho utna achaa hai , iss app main bohot repeat ho rha hai logical code isliye good practice ki uska hook banalo, jsx code se kyun farak nhi pdta jitna bhi ho?

    const {gif ,loading , fetchData} = useGif(tag);
    
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold py-2 mt-[15px]'>Random {tag} GIF</h1>
        {
            loading? (<Spinner/>):(<img src={gif} width={450} />)
        }
        <input type='text' className='w-10/12 text-lg py-5 rounded-lg mb-[20px] text-center' onChange={(event)=> setTag(event.target.value)}/>
        <button onClick={()=> fetchData(tag)} className='w-10/12 bg-slate-100 text-lg py-5 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag