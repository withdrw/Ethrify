import "./App.css";
import { Navbar , Footer , Welcome , Loader  } from "./components";
const App = () => {
  return (
    <div className="app-component">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Footer />
   </div>
  )

}

export default App;
