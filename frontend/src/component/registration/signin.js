
    import { Link } from 'react-router-dom';
    import './signin.css'
    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
  
    const Signin=()=>{
        const navigate=useNavigate();
        const [userInput,setUserInput]=useState({email:'',password:''});
        
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setUserInput((prevInput) => ({
        ...prevInput,
        [name]: value, 
        }));
    
        }
     
    const fatchapi=async()=>{
        try{

        
        const response=await fetch('http://localhost:5000/users/login',{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userInput)
        })
        console.log(response,'this is response ');
        const data=await response.json();
        if(!response.ok)
        {
            console.log("this response is not ok")
            // console.log('http error',response.status)``
        }
        else if(data.data==="password is not match" || data.data==="user email is invalid"
        ){
           console.log (data.data)
        }
        else{
            console.log(data)
            localStorage.setItem('userToken',data.token)
            localStorage.setItem('userId',data.id)

            navigate('/dashboard', { replace: true });
        }
     
        
        
    }catch(error){
        console.log(error,'this is catch error')
    }
    }
        return(
            <div className="container-fluid" style={{backgroundColor:'#093545',width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:"4%"}}>
            <div className="text-white font-weight-bold fs-1">Sign in</div>
            <div className='col-lg-3 col-md-5 col-sm-8'>
            <input className='px-2 py-2 border-0 rounded-1 w-100  text-white' name='email' placeholder="email"  style={{backgroundColor:'#224957' } } onChange={handleChange} value={userInput.email}></input>
            </div>
            <div className='col-lg-3 col-md-5 col-sm-8 border'>
                <input className='px-2 py-2 border-0 rounded-1 w-100 text-white'  name='password' placeholder="password"  style={{backgroundColor:'#224957'}} onChange={handleChange} value={userInput.password}></input>
            </div>
            <div className='col-lg-3 col-md-5 col-sm-8'><button className="btn btn-primary btn-lg w-100"  onClick={fatchapi}>login</button></div>
            <Link to ="/signUp">SignUp</Link>
            </div>
        )
    }
    export default Signin;