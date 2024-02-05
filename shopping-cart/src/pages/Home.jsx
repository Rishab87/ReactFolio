import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading , setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      alert("could not fetch data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return(
    <div className="mb-6">
      {
        loading ? <Spinner/> :
        posts.length>0? (
          <div className="grid sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] md:grid-cols-3">
          {
            posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
          }
          </div>
        ):
        <div className="flex justify-center items-center">
          <p>No Data Found!</p>
        </div>
      }
    </div>
  );
};

export default Home;