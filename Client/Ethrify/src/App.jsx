import "./App.css";
import { Navbar , Footer , Welcome , Loader , Transactions } from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
   </div>
  )

}

export default App;
