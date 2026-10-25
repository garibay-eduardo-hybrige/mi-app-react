import { Button } from "./components/Button";

function App() {
  return (
    <div className="p-10 flex gap-4">
      {/* Botón normal por defecto */}
      <Button>Botón primario</Button>
      
      {/* Botón outline CON bordes completamente redondeados */}
      <Button variant="outline" rounded>Botón redondeado</Button> 
      
      {/* Botón destructivo */}
      <Button variant="destructive">Botón destructivo</Button>
    </div>
  );
}

export default App;