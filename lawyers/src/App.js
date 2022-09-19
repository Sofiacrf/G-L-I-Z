import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Import Components
import NavbarComponent from "./components/NavBar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import RouteList from "./routes";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <RouteList />
      <FooterComponent />
    </Router>
  );
}

export default App;
