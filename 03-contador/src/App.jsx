import './App.css'
import {useState} from 'React';
import Counter from './counter/Counter';

function App() {
  //El estado
  const [contador,setContador]=useState(0);
  return(
    <div>
      <p>
        Haz hecho click {contador} veces a este boton
      </p>
      <button onClick={()=>{setContador(contador+1)}}>Incrementar</button>
    </div>
  );
}

export default App
