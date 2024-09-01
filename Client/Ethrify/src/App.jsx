import "./App.css";
import { Navbar , Footer , Welcome , Loader , Transactions } from "./components";
const App = () => {
  return (
    <div className="app-component">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
   </div>
  )

}

export default App;
