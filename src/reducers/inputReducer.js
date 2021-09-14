const inputReducer = (state = '',action)=>{
    if(action.type === "NEW_ITEM"){
        state = action.EVENT;
    }
    return state;
}
export default inputReducer;