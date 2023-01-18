import React, { useEffect } from "react";
import './App.css';
import Routes from './routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { __getUser } from './redux/modules/userSlice';


const App = () => {
  const { me } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getUser())
  },[])

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
