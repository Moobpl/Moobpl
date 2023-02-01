//훅
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import Header from '../components/Header';

const Service = () => {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const headstate = true;
  
  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

  return (
    <>
      <Header headstate={headstate}></Header>
    </>
  )
}

export default Service