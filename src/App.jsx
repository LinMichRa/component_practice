import './App.css';
import MyComponent from './components/MyComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  const name= 'Linda Ramírez';

  return (
    <>
      <div>
        <h3>Practica de Componentes</h3>
        {/* Cargar Primer Componente */}
        <MyComponent
        name ={name}
        lastName = 'Delgado'/>

        <hr />
        {/* Cargar Seuundo Componente */}
        <h4>Segundo Componente</h4>
        <SecondComponent />
      </div>
    </>
  )
}

export default App
