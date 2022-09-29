import { toast} from "react-toastify"

const ADD = () => toast("A todo was ADDED... ");
const UPDATE = () => toast("A todo was UPDATED... ");
const CHECK = () => toast("A todo was CHANGED... ");
const DELETE = () => toast("A todo was DELETED... ");

const todoReducer = (state = [] ,action) =>{
    switch (action.type) {
      
            case "GET_TODOS":
            return action.todos.data
      
            case "Add_TODO":
            toast.success(ADD, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.todo.data, ...state]
      
            case "UPDATE_TODO":
            toast.success(UPDATE, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return state.map((todo) =>
              todo._id === action.todo.data._id ?  action.todo.data : todo )
       
            case "CHECK_TODO":
            toast.success(CHECK, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return state.map((todo) =>
              todo._id === action.todo.data._id ?  action.todo.data : todo )
        
        
            case "DELETE_TODO":
            toast.success(DELETE, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return state.filter((todo) =>
              todo._id !== action.todo.data._id  
              );

        default:
            return state;
    }
}

export default todoReducer