
import React from 'react'//imr
import { useSelector,useDispatch } from 'react-redux'
import {AppBar, Typography, Toolbar,Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import { Link , useNavigate   } from 'react-router-dom'
import { signOut } from '../../Redux/actions/authActions'
const useStyles = makeStyles({
    
  root: {
   flexGrow: 1
  },
    linkStyle: {
      color:"#fafafa",
      textDecoration:"none"
    
    },
   
  });

//ctrl + d
const NavBar = () => {//sfc
    const classes = useStyles()
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log(state);
    const auth = useSelector((state) => state.auth);
    
    const navigate = useNavigate();
    const handleSignOut = () => {
      dispatch(signOut());
      navigate("/signin")
    }
    

    return ( 
        <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.root}>
                <Link className={classes.linkStyle} to='/'>
                toDoApp:
                </Link>
            </Typography>
            {auth._id ? (
              <>
                <Typography variant='subtitle2' className={classes.root}>
                Logged in as {auth.name}
              </Typography>
          
            <Button color = "inherit" onClick={()=> handleSignOut()}>
              SignOut
            </Button>
            </>
            ) : (
                  <>
              <Button color = "inherit" >
              <Link className={classes.linkStyle} to='/signin'>
              SignIn
              </Link>
             </Button>
   
             <Button color = "inherit">
               <Link className={classes.linkStyle} to='/signup'>
                  SignUp</Link>
             </Button>
             </>
            )
          
          }
            


            </Toolbar>
        </AppBar>
        </>
     );
}
 
export default NavBar;