import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { data } from 'react-router-dom'

function Card({ people }) {
    const [userData, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            
            setData(response.data)
        })
        
        
    })
  return (
    <>
      {/* {people.map((person, index) => (
        <div key={index}>
          {person} <br /> <br />
        </div>
      ))} */}

    <div>
       <h2>jsonplaceholder</h2>
         {userData.map((data) => 
         (
                <div key={data.id} style={{background: "grey", textAlign: "center"}}>
                    <h3>{data.title}</h3>
                    <p>{data.name}</p>
                     
                </div>
            )
         )}
    </div>
  
    </>
  )
}

export default Card
