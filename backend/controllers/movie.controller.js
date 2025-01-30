const movieModel = require("../models/movie/movie.model.js");
exports.addMovie = async (req, res) => {
  const { title, year, userId} = req.body;
  try {
    if (!title || !year) {
      return res.status(400).json({
        data: "Missing required fields: title, year",
        status: false,
        success: 400,
      });
    } else {
      image=req.file? req.file.path:null;
      if(!image){
        res.json({data:'image is not founds ',path:'null'})
      }
      else{
        console.log("movie add call", title, year,image);
        const newmovie = new movieModel({ title, year, user: req.user.id,image });
        const movie = await newmovie.save();
        return res.json({ data: movie, status: true, success: 200 });
      }
      
    }
  } catch (error) {
    return res.json({
      data: "someting errror to add movie",
      status: false,
      success: 500,
    });
  }
};
exports.getAll = async (req, res) => {
  try {
    const allMovies = await movieModel.find();
    if (allMovies) res.json({ data: allMovies, status: true, success: 200 });
    else {
      return res.json({
        data: "data is not found",
        status: false,
        success: 400,
      });
    }
  } catch (error) {
    res.json({ data: "something error to fatch all movies" });
  }
};
exports.updateMovie = async (req, res) => {
  const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(movie);
  try {

    if (!movie){ return res.status(404).json({ data: "movie not found " })};

    return res.json({data:movie,success:true,statusCode:200});
  } 
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteMovie= async (req,res)=>{
  const id= req.params.id;
 
  try{
    const foundMovie=await  movieModel.findByIdAndDelete({_id:id})
    if(!foundMovie){
      res.json({data:'movie not found',eror:404})
    }
    else{
      res.json({data:foundMovie, delete:'successfully',status:200,})
    }
  }
  catch(error){
    res.json({data:error.message,err:'this is error'})
  }
  
}