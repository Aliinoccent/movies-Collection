

import axios from '../config/axiosSetup'


const DeleteMovie=({data,prop})=>{
    console.log(data);
    const handleApi=async(movieId)=>{
        try{
    
         const data= await  axios.delete(`http://localhost:5000/movies/${movieId}`);
         console.log(data);
         prop();
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div>
            <i class="fa-solid fa-delete-left" style={{color:'white '}} onClick={()=>handleApi(data)}></i> 
        </div>
    )
}
export default DeleteMovie;