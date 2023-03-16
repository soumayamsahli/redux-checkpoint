
import { v4 as uuidv4 } from 'uuid';
import { ADD, COMPLETE, DELETE } from '../action/Types';
const todo=[
    {
        id:uuidv4,
        COMPLETE:false,
        title:"task"
    }
]
const todoReducer=(state=todo,action) =>{
    switch (action.type) {
        case ADD:return[...state,{title:action.payload, id:uuidv4,COMPLETE:false}]
        case DELETE:return state.filter(el=>el.id!==action.payload)
        case COMPLETE:return state.map(el=>el.id===action.payload?{...el,COMPLETE}:el)
        
            break;
    
            default: return state
    }


}
export default todoReducer