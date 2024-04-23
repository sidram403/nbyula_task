import React, { useEffect, useState } from 'react'

const storedId = localStorage.getItem('userDetails')

const Output = () => {
        const [requestedData, setRequestedData] = useState({userId:""})
    
    

    useEffect(() =>{
        const fetchDetails = async() =>{
            const storedId = localStorage.getItem('userDetails')
            const requestedData = {
                userId: storedId
            }
            try {
                const res = await fetch('http://localhost:3000/server/user/getDetails', {
                    method: 'POST',
                    headers:{"content-type": "application/json"},
                    body: JSON.stringify(requestedData)
                })
                const data = await res.json()
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    })

  return (
    <div style={{boxShadow:"10px 10px 5px 12px white", border:"1px solid black", padding:"15px", borderRadius:"20px", width:"400px", height:"200px"}} >
        <p>UserName</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum doloribus repellendus dignissimos adipisci debitis et, aut quo ratione consequatur ipsa? Animi magni quisquam, esse doloremque veniam facere facilis voluptatem et!</p>
        <div>
            <button>Upvode</button>
            <button>Downvode</button>
        </div>
    </div>
  )
}

export default Output