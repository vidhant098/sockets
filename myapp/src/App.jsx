import React, { useEffect, useState } from 'react'

const  App= () => {

const [data , setdata] = useState('')
 useEffect(()=>{
 
 const handleapi=   async ()=>{ 
   
 
   const  response = axios.get(  "https://dummyjson.com/recipes")

 } 
   

    
   handleapi() ;  

   console.log(response.dala.recipes)
      } , [])
  return ( 

     
    <div> 

<p> "https://dummyjson.com/recipes"</p> 



    </div>
  )
}

export default  App