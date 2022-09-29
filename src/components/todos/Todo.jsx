
import React from 'react'//imr
import { useDispatch } from 'react-redux';


import { Typography , Button , ButtonGroup } from '@material-ui/core';
import { Create, Delete, CheckCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import Moment from 'react-moment';

import { checkTodo , deleteTodo} from '../../Redux/actions/todoActions';

const useStyles = makeStyles({
    todoStyle:{
        margin: "20px auto",
        padding: "20px",
        border: "2px solid #bodbdb",
        borderRadius:"9px",
        display:"flex",
        justifyContent:"space-between"
    },
    grayStyle:{
        color:"#8f8f8f"
    },
    isComplete:{
        color:"green"
    },
    checked:{
        textDecoration:"line-through"
    }
})

//ctrl + d
const Todo = ({todo ,setTodo}) => {//sfc


    const classes = useStyles()
    const dispatch = useDispatch()
    const handleUpdateClick = () => {
        setTodo(todo)

        window.scrollTo({
            top: 0,
            left:0,
            behavior: "smooth"
        })
    }

const handaleChack = (id)=>{
  dispatch(checkTodo(id))
}
const handleDelete = (id)=>{
  dispatch(deleteTodo(id))
}

    return ( 
        <>
        <div className={classes.todoStyle}>
            <div>
                {todo.isComplete ?
             (<Typography variant='subtitle1' className= {classes.checked}>
              {todo.name}
            </Typography>) : (
            <Typography variant='subtitle1'>
              {todo.name}
            </Typography>)  
            
            }
              
                <Typography className={classes.grayStyle} variant='body2'>
                  Author: Chaoo
                </Typography>
                <Typography className={classes.grayStyle} variant='body2'>
                  Added:<Moment fromNow>{todo.date}</Moment>
                </Typography>
            </div>
            <div>
                <ButtonGroup size='small' aria-label="oulined primaty button group">
                <Button onClick={()=> handaleChack(todo._id)}>

                    {todo.isComplete ? (    
                             
                        <CheckCircle color='action' className={classes.isComplete}/>
                    ) : (  
                   
                        <CheckCircle color='action'/>
                    )}
                    
                    </Button>

                    <Button onClick={() => handleUpdateClick()}>
                        <Create color='primary'/>
                    </Button>
                    <Button onClick={() => handleDelete(todo._id)}>
                        <Delete color='secondary'/>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
        </>
     );
}
 
export default Todo;