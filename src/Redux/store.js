import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './todoReducer';
import authReducer from './authReducer';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        auth: authReducer
    }
})
export default store