export const addFav=(payload)=>{
    return{
        type:"Add_fav",
        payload
    }
}
export const remFav=(payload)=>{
    return{
        type:"Rem_fav",
        payload
    }
}