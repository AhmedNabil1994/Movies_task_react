const INITIAL_STATE={
    fav:[]
}
export const favReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case "Add_fav":
            return{
                fav:[...state.fav,action.payload]
            }
        case "Rem_fav":
            return{
                fav:state.fav.filter(i=> i !== action.payload)
            }
        default:
            return state;

    }
}