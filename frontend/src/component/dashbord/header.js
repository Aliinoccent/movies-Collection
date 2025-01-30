import { useNavigate } from "react-router";
const Header=()=>{
    const navigation=useNavigate();
    const removeToken=()=>{
        localStorage.removeItem('userToken');
        navigation('/',{return :true})
    }
    return(
    <div className="container">
        <div className="row  justify-content-between w-100 ">
            <div className="col-6 text-white">My movies</div>
            <div className="col-6 text-end" ><button className="text-white bg-primary"  onClick={removeToken}>Logout</button> </div>

        </div>
    </div>
    )
}
export default Header