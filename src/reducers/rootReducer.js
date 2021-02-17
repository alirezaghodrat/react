const initState ={
   posts:[
       {id:'1',title:'title1',body:'body of title 1'},
       {id:'2',title:'title2',body:'body of title 2'},
       {id:'3',title:'title3',body:'body of title 3'},
   ]  
}

const rootReducer=(state=initState,action)=>{
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return{
            ...state,
            posts: newPosts
        }
    }
     return state
}

export default rootReducer