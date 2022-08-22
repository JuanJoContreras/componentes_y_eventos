import React from 'react'
import Form from 'react-bootstrap/Form';


const Input = ({setHabilitado}) => {

  return (
    <Form className="Formulario">
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="Nombre">Nombre</Form.Label>
      <Form.Control type="text" name="nombre"  placeholder="Ingresa un texto" />
      </Form.Group>

      <Form.Group className="mb-3 p-2 text-center" controlId="formBasicPassword">
      <Form.Label className="Clave">Contraseña</Form.Label>
      <Form.Control type="password" name="clave" onChange={(e) => e.target.value === '252525'? setHabilitado(true):setHabilitado(false)} maxlength="6"  placeholder="Ingresa una contraseña" />
      </Form.Group>
            
    </Form>
  );
}


export default Input