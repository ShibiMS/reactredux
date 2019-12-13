const initialState = {
    posts: {
        title:'',
        description: ''
    }   
};

const postReducer = (state = initialState, action: any) => {

    console.log('reducer works', action);
    if (action.type === "ADD_DATA") {       
        return state;
    }
    if(action.type==="BTN_TRIGGER"){
        console.log('Btn Add');       
        return {
            ...state,
            posts:{
                title:action.posts.title,
                description:action.posts.description
            }
        }
     
    }
    if(action.type==="BTN_UPDATE"){
        console.log('Btn update');       
        return {
            ...state,
            posts:{
                title:action.posts.title,
                description:action.posts.description
            }
        }
    }
    return state;

}
export default postReducer;