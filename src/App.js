import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
  const admin = false;
  return (
    <div className="App">
      <Header />
      <AllRoutes admin={admin} />
      <Footer />
    </div>
  );
}

export default App;
