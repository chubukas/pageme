import { BrowserRouter } from "react-router-dom";

import HeroBackground from "./components/HeroBackground"
import AllRoutes from "./routes"


function App() {
  return (
    <BrowserRouter>
      <HeroBackground >
        <AllRoutes />
      </HeroBackground>
    </BrowserRouter>
  );
}

export default App;
