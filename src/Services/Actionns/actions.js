import axios from "axios"
import { FETCH_DATA_SUCCESS, FETCH_DATA_COME, FETCH_DATA_ERROR,} from "../Constant";
let url = "https://dummyjson.com/products"

export const fetchcome = () => {
    return {
        type: FETCH_DATA_COME,

    }
}
export const fetchsuccess = (user) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: user

    }
}
export const  fetcherror = (err) => {
    return {
        type: FETCH_DATA_ERROR,
        payload: err
    }
}
export const carddata = () => {
    return (dispatch)=>{
    dispatch(fetchcome())
    axios.get(url)
        .then((res) => {
            const data = res.data
            dispatch(fetchsuccess(data))
            console.log(res.data)
        }
        )
        .catch((err) => {
            const message = err.message
            dispatch(fetcherror(message))
            console.log(err.message)
        })
    }
}
export default carddata;