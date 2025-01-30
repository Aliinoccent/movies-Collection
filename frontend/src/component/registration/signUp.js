import { useState } from 'react';
import './signin.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const SignUp=()=>{
    const navigation=useNavigate()
    const [userInput,setUserInput]=useState({userName:'',email:'',password:''})
    const handleChange=(e)=>{
    const {name,value}=e.target
    setUserInput((previous)=>({
        ...previous,
        [name]:value
    }))
    }
    const fatchapi=async()=>{
        try{
            const fatchdata=await fetch('http://localhost:5000/users/',{
                method : 'POST' ,
                headers:{
                   "Content-Type": "application/json", 
                },
                body:JSON.stringify(userInput)
             })
            
         if (!fatchdata.ok) {
            throw new Error(`HTTP error! status: ${fatchdata.status}`);
        
        }
      
          const data = await fatchdata.json();
          
          console.log(data);
          if (data){
            navigation('/' ,{rturn:true})
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
    }
    return(
        <div className="container-fluid" style={{backgroundColor:'#093545',width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:"4%"}}>
        <div className="text-white font-weight-bold fs-1">Sign Up</div>
        <div className='col-lg-3 col-md-5 col-sm-8'> <input className="border-0 w-100 px-2 py-2 text-white"name='userName' placeholder="name" onChange={handleChange} value={userInput.userName}  style={{backgroundColor:'#224957'}}></input></div>
        <div className='col-lg-3 col-md-5 col-sm-8'>  <input className="border-0 w-100 px-2 py-2 text-white" name="email"placeholder="email" onChange={handleChange}  value={userInput.email} style={{backgroundColor:'#224957'}}></input></div>
        <div className='col-lg-3 col-md-5 col-sm-8'> <input  className="border-0 w-100 px-2 py-2 text-white"name="password"placeholder="password" onChange={handleChange}  value={userInput.password} style={{backgroundColor:'#224957'}}></input></div>
        <div className='col-lg-3 col-md-5 col-sm-8'><button className="btn btn-primary btn-lg w-100"  onClick={fatchapi}>signUp</button></div>           <Link to="/">login</Link>
        </div>
    )
}
export default SignUp;