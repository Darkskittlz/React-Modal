import './App.css';
import ParticleBackground from "./ParticleBackground"

function App() {
  return (
    <div>
      <ParticleBackground />
      {/* <CenterTitle /> */}
    </div>
  );
}

function CenterTitle(){
  return(
    <div className="text_div center_all">
      <div className="center_all">
        <h1>DARKMEOW PRODUCTIONS</h1>
      </div>
    </div>
  )
}

export default App;
