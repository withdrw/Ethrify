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
}


// provides other components access to the context value 
export const PaymentProvider = ({children}) => {
    const checkWalletConnection = async () => {
        if(!ethereum){
            alert("Your wallet is not connected. Make sure you have metamask connected");
        }
    }
    return (
        //pass down context value with any child component inside PaymentProvider will have access to PaymentContext value
        <PaymentContext.Provider value={{value:'test'}}>
            {children}
        </PaymentContext.Provider>
    )
}
