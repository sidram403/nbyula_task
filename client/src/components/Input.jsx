import React, { useState } from 'react'

const Input = () => {
    const [formDetails, setFormDetails] = useState({})
    

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/server/user/store", {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formDetails),
            })

            const data = await response.json();
            console.log(data);
            const storeData = JSON.stringify(data.details._id)
            localStorage.setItem("userDetails", storeData )
        } catch (error) {
            console.log(error);
        }
    } 
    const handleChange = (e) =>{
        setFormDetails({...formDetails, [e.target.id]: e.target.value})
    }

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", }}>
        <form onSubmit={handleSubmit}>
        <div style={{margin:"20px"}}>
            <input style={{padding:"10px 20px"}} type="text" placeholder='User Name' id='username' onChange={handleChange} />
        </div>
        <div style={{margin:"20px"}}>
            <input style={{padding:"10px 20px"}} type="text" placeholder='Any text' id='content' onChange={handleChange} />
        </div>
        <button style={{padding:"10px 20px", margin:"20px"}}>Submit</button>
        </form>
        
    </div>
  )
}

export default Input