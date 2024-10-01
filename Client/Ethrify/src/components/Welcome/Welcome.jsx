import "./Welcome.css";
import test from '/test.jpg'
import { PaymentContext } from "../../context/PaymentContext";
import { useContext } from "react";
const Welcome = () => {
  // destruct the value from provider
  const { connectToWallet, connectedAccount, setFormData, formData, handleChange  } = useContext(PaymentContext);
  console.log(connectToWallet)

  return (
    <div className="welcome-container">
      <div className="welcome-page">
        <h1 className="welcome-title">
         Send Crypto Across the world
        </h1>
        <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Ethrify. </p>
      <div className="connect-button">
        {connectedAccount ? null : (
          <button onClick={connectToWallet}>
          Connect Wallet
        </button>
        )}
      </div>
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
              <div className="sub-image">
                    <img className="sub-main" src={test} alt="" />
              </div>
      </div>

    </div>
  );
};

export default Welcome;
