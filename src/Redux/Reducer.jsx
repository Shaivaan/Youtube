import { ADD_DATA } from "./Action"

let data = JSON.parse(localStorage.getItem("obj")) || {};
const init_store = {
    data:data
}

export const reducer = (store = init_store,{type,payload})=>{
    if(type == ADD_DATA){
        return {store,data:payload}
    }else{
        return store
    }
}