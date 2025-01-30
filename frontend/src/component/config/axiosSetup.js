import axios from 'axios'
axios.interceptors.request.use((config)=>{
const token= localStorage.getItem('userToken');
console.log(token)
if(token){
    config.headers['Authorization']=`Bearer ${token}`;
}
else {
    config.headers['Content-Type']='application/json'
    console.log(config.url);
}
return config
},error=>Promise.reject(error))

export default axios;