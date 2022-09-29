
import React from 'react'//imr
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';
import { useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
//ctrl + d
const Todos = () => {//sfc
    
    const auth =useSelector((state) => state.auth)
    const navigate = useNavigate();

    const [ todo , setTodo ] =useState({
        name: "",
        isComplete: false
     })

     if(!auth._id) return navigate('/signin') 

    return ( 
        <>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ListTodos todo={todo} setTodo={setTodo} />
     
        </>
     );
}
 
export default Todos;