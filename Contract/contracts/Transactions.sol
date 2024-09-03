// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Payments {
    uint256 public numOfPayments;  

    // Event for logging payment details
    event Payment(
        address from, 
        address to, 
        uint256 value, 
        string note, 
        uint256 time, 
        string reference
    );

    // Struct to store individual payment information
    struct PaymentInfoStruct {
        address payer;
        address payee;
        uint256 value;
        string note;
        uint256 time;
        string reference;
    }

    // Private array to store all payments
    PaymentInfo[] private paymentRecords;

    // Function to initiate a payment transaction
    function recordPayment(
        address payable recipient, 
        address payable sender,
        uint256 amount, 
        string calldata note, 
        string calldata reference
    ) public {
        numOfPayments++;  

        // Create a new payment record and add it to the array
        paymentRecords.push(PaymentInfoStruct({
            payer: msg.sender,
            payee: recipient,
            value: value,
            note: note,
            time: block.timestamp,
            reference: reference
        }));
}
}