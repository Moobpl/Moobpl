import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Privacy = () => {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!me) {
      navigate('/login')
    }
  }, [me, navigate])

  return (
    <div>Privacy</div>
  )
}

export default Privacy