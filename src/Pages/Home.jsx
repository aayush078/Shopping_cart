import React, { useEffect, useState } from 'react'
import Product from '../Components/Product';
import Spinner from '../Components/Spinner';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";    const [Loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProductData(){
      setLoading(true);

      try{
        const result = await fetch(API_URL);
        const data = await result.json();
        setPosts(data);
      }

      catch(error){
        console.log("Error int fetching data",error);
        setPosts([]);
      }
      setLoading(false);
    }

    useEffect( () => {
      fetchProductData();
    },[])


  return (
    <div>
      {
        Loading ? (<Spinner/> ) :
        (
          posts.length > 0 ?
          (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-6 min-h-[80vh] '>
              {
                posts.map((post) =>(
                  <Product key={post.id} post={post} />
                ))
              }
            </div>
          ):
          ( <div className='flex justify-center items-center'>
             <p> No Data Found </p> 
            </div>
          )
        )
      }
    </div>
  )
}

export default Home