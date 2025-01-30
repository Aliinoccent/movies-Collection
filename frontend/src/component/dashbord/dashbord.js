import {  useNavigate } from "react-router-dom";
import Header from "./header";
import a from "../../img/a.jpg";
import b from "../../img/b.jpg"
import c from "../../img/c.jpg"
import d from "../../img/d.jpg"
import { useEffect, useState } from "react";
import DeleteMovie from "./deleteMovie";

const Dashbord = () => {
  const [movieData, setmoveData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    movieApi();
  }, []);

  const movieApi = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userToken");
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setmoveData(data.movieData);
    console.log(movieData);
  };
  function getRandomLetter() {
    const letters = ['a', 'b', 'c', 'd'];
    const randomIndex = Math.floor(Math.random() * letters.length);
    console.log(letters[randomIndex])
    return letters[randomIndex];
  }
  const refresh=()=>{
    movieApi();
  }
  const fatchapi = () => {
    navigate("/movieCreate", { replace: true });
  };
  return (
    <div
      className=" container-fluid w-100"
      style={{ backgroundColor: "#093545", height: "100%" }}
    >
      <Header />
      {movieData.length === 0 ? (
        <div className="  d-flex justify-content-center align-items-center flex-lg-column gap-4 vh-100 ">
          <div
            className="text-white display-4"
            style={{ fontFamily: "sans-serif" }}
          >
            Your movie list is empty
          </div>
          <div className="col-lg-3 col-md-5 col-sm-8">
            <button
              className="btn  btn-lg w-100 text-white"
              style={{ backgroundColor: "#2bd17e", fontWeight: "bold" }}
              onClick={fatchapi}
            >
              Add new movie
            </button>
          </div>
        </div>
      ) : (
    <div className="container">
        <div className="row d-flex justify-content-center gap-3 mt-5 ">{
        movieData.map((user) =>{
          const fullImagePath = user.image ?`http://localhost:5000/${user.image.replace(/\\/g, '/')}`: '';
          console.log(fullImagePath);
         return  (
            <div
                className="col-lg-3   border border-0 m-2"
                style={{ width: 282, height: 524 ,backgroundColor:'#092c39',borderRadius:30   }}
              >
                <DeleteMovie data={user._id} prop={refresh}/>
                <img
                className=""
                  src={fullImagePath}
                  alt="not img"
                  style={{
                    width: 266,
                    height: 400,
                    marginTop:20,
                    objectFit: "cover",
                    borderRadius:30

                  }}
                />
                <div className="text-white h3">{user.title}</div>
                <div className="text-white  ">{user.year }</div> 
              </div>

        )})}
         </div>
         <button
              className="btn  btn-lg w-100 text-white"
              style={{ backgroundColor: "#2bd17e", fontWeight: "bold" }}
              onClick={fatchapi}
            >
              Add new movie
            </button>
        </div>
      )}
      
    </div>
  );
};

export default Dashbord;
