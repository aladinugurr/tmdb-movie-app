import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Pages from "./Pages/Pages";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/context";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Pages />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
