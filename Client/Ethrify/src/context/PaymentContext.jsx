import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../utils/constants";

export const PaymentContext = React.createContext();

const { ethereum } = window
// window.ethereum
const getEthereumContract = () => {

    //Web3 provider is used to communicate with the Ethereum blockchain via Metamask (from window.ethereum)
    const provider = new ethers.providers.Web3Provider(ethereum)

    // ethereum account that signs payment (Metamask account)
    const signer = provider.getSigner();

    // create instance of smart contract using the 3: contractABI,contractAddress,signer
    const paymentContract = new ethers.Contract(contractABI,contractAddress,signer);
    // console.log(
    // {    provider,
    //     signer,
    //     paymentContract}
    //  )
    return paymentContract;
}


// provides other components access to the context value 
export const PaymentProvider = ({children}) => {
    const [connectedAccount, setConnectedAccount] = useState();
    const [formData, setFormData] = useState({ sendTo: '', amount: '', note: '', ref : ''});
     
    const handleChange = (e, name) => {
        setFormData(prevState => {
            const updatedFormData = Object.assign({}, prevState);
            updatedFormData[name] = e.target.value;
            // return updatedFormData;
        });
    }

    const checkWalletConnection = async () => {
        if(!ethereum){
            alert("Your wallet is not connected. Make sure you have metamask connected");
        }
        try {
            // Request the list of accounts connected to MetaMask
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            
            if(accounts.length === 0){
                alert("No wallet is connected. Please connect a wallet.");
            } else {
                console.log("Connected account:", accounts);
                setConnectedAccount(accounts[0]);
            }
        } catch (error) {
            console.error("Error fetching accounts:", error);
            alert("An error occurred while checking wallet connection.");
        }
    }

    const connectToWallet = async() => {
        try {
            if(!ethereum){
                alert("Your wallet is not connected. Make sure you have metamask connected");
            }
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setConnectedAccount(accounts[0]);

        }catch (error){
            console.log(error);
        }
    }

    // const sendPayment = async () => {
    //     try{
    //         if(ethereum) {
    //             const { addressTo, amount, note, ref} = formData;
    //             const paymentContract = getEthereumContract();
    //             const parsedAmount = ethers.utils.parseEther(amount)

    //             ethereum.request({
    //                 method
    //             })
    //         }
    //     }
    // }

    useEffect(() => {
        checkWalletConnection();
    }, [])

    return (
        //pass down context value with any child component inside PaymentProvider will have access to PaymentContext value
        <PaymentContext.Provider value={{connectToWallet, connectedAccount, formData, setFormData, handleChange}}>
            {children}
        </PaymentContext.Provider>
    )
}
