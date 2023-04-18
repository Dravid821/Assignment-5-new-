import axios from "axios";
const Productdata= async (id)=>{
    return axios.get(`https://dummyjson.com/products/${id}`)
    .then(response=> response.data)
}
export default Productdata;