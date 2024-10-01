import "./Welcome.css";
import test from '/test.jpg'
import { PaymentContext } from "../../context/PaymentContext";
import { useContext } from "react";
const Welcome = () => {
  // destruct the value from provider
  const { connectToWallet, connectedAccount, setFormData, formData, handleChange  } = useContext(PaymentContext);
  console.log(connectToWallet)

  const handleSubmit = () => {
    const {addressTo, amount, note, ref} = formData;
    e.preventDefault();

    if(!addressTo && !amount && !note && !ref){
      alert("Fill in all the fields before submitting");
    }

    sendPayment
  }

  return (
    <div className="welcome-container">
      <div className="welcome-page">
        <h1 className="welcome-title">
          {/* Send crypto anywhere & anytime .  Explore the Crypto world with us where you can easily buy and sell cryptocurrencies. */}
          Quanta iusteque iste Rutilius nullus Terentii scribi optari
          praeceptrice appellant semel doctrina similique petentium gaudemus suo
          successionem maledici vera eventurum male summum! Coniuncta intervalla
          volunt omnes disputationi non maledici paene; Diligenter propter
          Chremes intuemur expleantur umbram frequenter physicis dicat
          certissimam Multoque laetetur, Omnesque Phaedrum multis ecce
          loqueretur concessum Aristippi videamus quales corporisque efficit
        </h1>
      </div>
      <div className="welcome-sub">
        <h1 className="welcome-subtitle">
          {/* Send crypto anywhere & anytime .  Explore the Crypto world with us where you can easily buy and sell cryptocurrencies. */}
          Quanta iusteque iste Rutilius nullus Terentii scribi optari
          praeceptrice appellant semel doctrina similique petentium gaudemus suo
          successionem maledici vera eventurum male summum! Coniuncta intervalla
          volunt omnes disputationi non maledici paene; Diligenter propter
          Chremes intuemur expleantur umbram frequenter physicis dicat
          certissimam Multoque laetetur, Omnesque Phaedrum multis ecce
          loqueretur concessum Aristippi videamus quales corporisque efficit
        </h1>
      <div className="send-money-input">
        <input 
          placeholder="To" 
          name="addressTo" 
          type="text"
          handleChange={handleChange}
          />
          <input 
          placeholder="Amount" 
          name="amount" 
          type="number"
          handleChange={handleChange}
          />
          <input 
          placeholder="Amount" 
          name="amount" 
          type="number"
          handleChange={handleChange}
          />
          <input 
          placeholder="Note" 
          name="note" 
          type="text"
          handleChange={handleChange}
          />
          <input 
          placeholder="Ref" 
          name="ref" 
          type="text"
          handleChange={handleChange}
          />
      </div>
      <div className="send-button">
          <button onClick={handleSubmit}>
          Send
        </button>
      </div>
      </div>
      {/* <div className="connect-button">
        {connectedAccount ? null : (
          <button onClick={connectToWallet}>
          Connect Wallet
        </button>
        )}
      </div> */}

    </div>
  );
};

export default Welcome;
