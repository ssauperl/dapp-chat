pragma solidity >=0.4.0 <0.6.0;


contract Chat {


struct fromToKey {

  address fromAddress;

  address toAddress; 

 }
 
 struct message {
     string timestamp;
     string text:
 }
 
//save own messages here, encripted for sender
mapping (fromToKey => message) public sendMessages;

//save target messages, encripted for reciever
mapping (fromToKey => message) public recievedMessages;


function sendAMessage(string toAddress), string messege) public {

    msg.sender
     

}

  

}