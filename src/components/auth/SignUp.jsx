import React , {useState}from 'react'//imr
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate} from 'react-router-dom';
import {Typography, TextField, Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';


import { signUp } from '../../Redux/actions/authActions';




const useStyles = makeStyles({
    fromStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow:"0px 0px 12px -3px #000000"

    },
    spacing:{
        marginTop :"20px"
    }
})


const SignUp = () => {//sfc
     
    const navigate = useNavigate();
    const classes = useStyles()
     const dispatch =useDispatch()
     const auth = useSelector((state) => state.auth)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })


    const handaleSubmit = (e) => {
       e.preventDefault()
       dispatch(signUp(user))
       setUser({
        name: "",
        email: "",
        password: "",
       })

    }

    if (auth._id) return  navigate('/');

    return ( 
        <>
        <form
        className={classes.fromStyle}
        noValidate
        autoCapitalize='off'
        onSubmit={handaleSubmit}
        >
            <Typography variant='h5'> signUp:</Typography>

            <TextField
            id="enter-name"
            label="enterName"
            variant='outlined'
            fullWidth
            value={user.name}
            onChange= {(e) => setUser({...user, name: e.target.value})}
            className={classes.spacing}
            />
            <TextField
            id="enter-email"
            label="enterEmail"
            variant='outlined'
            fullWidth
            value={user.email}
            onChange= {(e) => setUser({...user, email: e.target.value})}
            className={classes.spacing}
            />
            <TextField
             className={classes.spacing}
            id="enter-password"
            type="password"
            label="enterpassword"
            variant='outlined'
            value={user.password}
            onChange= {(e) => setUser({...user, password: e.target.value})}
            fullWidth
            />
            <Button
             className={classes.spacing}
            variant='contained'
            color="primary"
            type="submit"
            >
                SignUp
            </Button>

           
        </form>
        </>
     );
}
 
export default SignUp;