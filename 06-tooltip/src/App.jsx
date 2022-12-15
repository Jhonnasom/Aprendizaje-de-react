import TooltipText from "./tooltip/TooltipText"

function App() {

  return (
    <div className="App">
      <p><TooltipText tooltip={"Texto generado"}>Loren Ipsum</TooltipText> dolor sit amet, consecteur</p>
      <p>Si longus, levis dictacta sunt, De quien sucpeit dese, Eam tum addesse cum dolor o</p>
      <p>Vidense quam sit magna disension WUDIAND tusdf etian in <TooltipText tooltip={"Soy un tooltip text"}>Academia</TooltipText></p>
    </div>
  )
}

export default App
