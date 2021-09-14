const inputReducer = (state = '',action)=>{
    if(action.type === "Item is added"){
        state = action.EVENT;
    }
    return state;
}
export default inputReducer;