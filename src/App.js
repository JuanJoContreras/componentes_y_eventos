import { useState } from 'react';
import './index.css';
import Titulo from './Components/Titulo';
import Input from './Components/Input';
import Boton from './Components/Boton';

function App() {

  const[estado,setEstado] = useState(false)
 
  return (
    <div className="App">
     <Titulo texto="Formulario" />
     <Input setHabilitado={setEstado} />
     <Boton habilitado={estado} />     
    </div>
  );
}

export default App;
