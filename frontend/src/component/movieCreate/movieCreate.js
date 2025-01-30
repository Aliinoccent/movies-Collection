import { useState } from "react";

const MovieCreate = () => {
    let [src, setSrc] = useState(null);
    let [movie, setMovie] = useState({ title: "", year: "", image: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSrc(reader.result); // Set the image preview
                setMovie({ ...movie, image: file }); // Store the file for later use
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    const fetchApi = async () => {
        const token = localStorage.getItem("userToken");
        console.log("This is token", token);

        const formData = new FormData(); // FormData to include the file
        formData.append("title", movie.title);
        formData.append("year", movie.year);
        formData.append("image", movie.image); // Attach the image file


        try {
            const response = await fetch("http://localhost:5000/movies/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData, // Send FormData
            });

            if (!response.ok) {
                console.log("HTTP error", response.status);
            }

            const data = await response.json();
            console.log(data.token);
            console.log(data);
            setMovie({ title: "", year: "", image: null });
            setSrc=(null)

        } catch (error) {
            console.log(error,'this is error');
        }
    };

    return (
        <div
            className="container-fluid "
            style={{ backgroundColor: "#093545", height: "100vh" }}
        >
            <div className=" flex-sm-column flex-md-row flex-lg-row container d-flex justify-content-between align-items-center h-100 ">

                <div
                   // Open file selector
                    className=" left flex-fill h-50 d-flex justify-content-center align-items-center flex-lg-row flex-md-column flex-sm-column"
                >
                    <div
                        onClick={() => document.getElementById("input").click()} 
                        className="border border-white w-50 h-50 rounded "
                        style={{ borderStyle: "dotted", }}
                    >
                        <input
                            type="file"
                            style={{ display: "none",}}
                            id="input"
                            onChange={handleFileChange} // Attach file change handler here
                        />
                        {src && (
                            <img
                                src={src}
                                alt="Preview"
                                style={{width:'100%',height:'100%', objectFit: "contain" }}
                            />
                        )}
                        <div className="text-white" style={{display:movie.image?'none':'block'}}>Insert Picture Here</div>
                    </div>
                </div>

                <div className="right flex-fill d-flex justify-content-center align-items-center flex-lg-column flex-sm-column flex-sm-column gap-4 ">
                    <div className="col-lg-6 col-md-5 col-sm-8" >
                        <input
                            className="px-2 py-2 border-0  w-100 text-white "
                            name="title"
                            placeholder="Title"
                            style={{ backgroundColor: "#224957" }}
                            onChange={handleChange}
                            value={movie.title}
                           
                        />
                    </div>
                    <div className="rounded-3 col-lg-4 col-md-5 col-sm-8 border-0">
                        <input
                            type="number"
                            className="px-2 py-2 border-0 rounded-1 w-100 text-white"
                            name="year"
                            placeholder="Year"
                            style={{ backgroundColor: "#224957" }}
                            onChange={handleChange}
                            value={movie.year}
                        />
                    </div>
                    <div className="row gap-2">
                        <div className="col-sm-12 col-md-8 col-lg-5 border rounded-2 ">
                            <button className="mx-2 btn py-2 w-100 text-white font-weight-bold">
                                Cancel
                            </button>
                        </div>
                        <div
                            className="col-sm-12 col-md-8 col-lg-5 border rounded-2"
                            style={{ backgroundColor: "#2bd17e" }}
                        >
                            <button
                                className="mx-2 btn py-2 w-100 text-white font-weight-bold"
                                onClick={fetchApi}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCreate;
