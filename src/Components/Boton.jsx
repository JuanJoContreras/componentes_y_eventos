import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const Boton = ({habilitado}) => {
  return (
    <div className="Boton">
    <Button variant="primary" type="submit" disabled={!habilitado}>Iniciar Sesion
    </Button>
    </div>
  )
}

export default Boton