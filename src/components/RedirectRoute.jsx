import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const RedirectRoute = () => {
   const navigate = useNavigate();

  // Redirigimos el usuario a "/pedidos"
   useEffect(() => {
     navigate('/pedidos');
   }, [])

  return null;
}

export default RedirectRoute