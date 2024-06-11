import  { useEffect, useState } from 'react'

function UseApi() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      // Update the document title using the browser API
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) =>{
          
          setData(json)
          console.log(json)
  
        } )
        .finally(() => {
          setLoading(false);
        });
    }, []);
    
  return {
    data,
    loading}
   
}

export default UseApi
