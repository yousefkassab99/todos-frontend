import React , {useEffect}from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';
// BrowserRouter

import Todos from './components/todos/Todos';
import NavBar from './components/navBar/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { loadUser } from './Redux/actions/authActions';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const useStyles = makeStyles({
  constentStyle:{
    margin: "30px auto"
  }
})

function App() {

  const classes = useStyles()
  const dispatch =useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  } ,[dispatch])
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Container maxWidth="md">
      <NavBar />
      <Container  className={classes.constentStyle} maxWidth="sm">
        <Routes>
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/" element={<Todos />} />
        </Routes>
      </Container>
    </Container>
  </BrowserRouter>
  </>
  );
}

export default App;
