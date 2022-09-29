import React, {useState} from 'react'//imr
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate} from 'react-router-dom';

import { signIn } from '../../Redux/actions/authActions';


import {Typography, TextField, Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';

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


const SignIn = () => {//sfc
    const navigate = useNavigate();

    const classes = useStyles()
    const auth = useSelector((state) => state.auth)
    const dispatch= useDispatch()
    const {creds, setCreds} = useState({
        email:"",
        password: "",

    }) 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds.email, creds.password));
        setCreds({ email: "", password: "" });
      };
    

    if (auth._id) return navigate('/');

    return ( 
        <>
        <form
        className={classes.fromStyle}
        noValidate
        autoCapitalize='off'
        onSubmit={handleSubmit}
        >
            <Typography variant='h5'> SignIn:</Typography>

            <TextField
            id="enter-email"
            label="enterEmail"
            variant='outlined'
            fullWidth
            value={creds.email}
            onChange = {(e) => setCreds({...creds , email: e.target.value}) }
            className={classes.spacing}
            />
            <TextField
             className={classes.spacing}
            id="enter-password"
            type="password"
            label="enterpassword"
            variant='outlined'
            fullWidth
            value={creds.password}
            onChange = {(e) => setCreds({...creds , password: e.target.value}) }
            />
            <Button
             className={classes.spacing}
            variant='contained'
            color="primary"
            type="submit"
            >
                SignIn
            </Button>

           
        </form>
        </>
     );
}
 
export default SignIn;