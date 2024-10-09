import App from './App.jsx'
import './index.css'
import { PaymentProvider } from './context/PaymentContext.jsx'
import ReactDOM from "react-dom/client";
 import AnimatedBackground from './AnimatedHeader.jsx';

// Render the React app
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* Global Animated Background */}
    <AnimatedBackground />

    {/* Main Content */}
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Main Title */}
      <h1 className="main-title">
        Connect <span className="thin">Three</span>
      </h1>

      {/* PaymentProvider wrapping the main App component */}
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </div>
  </>
);
