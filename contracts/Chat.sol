pragma solidity >=0.4.0 <0.6.0;
pragma experimental ABIEncoderV2;


contract Chat {

 struct  Message {
     address origin;
     string timestamp;
     string text;
 }
 
struct UserChat {
  address owner;
  mapping (address => Message[]) messages ;
 }
 

 
mapping (address => UserChat) public  chats;



function sendAMessage(address toAddress, string memory content, string memory timestamp) public {
    UserChat storage senderChat = chats[msg.sender];
    Message memory userMessage = Message(msg.sender, content, timestamp);
    senderChat.messages[toAddress].push(userMessage);
    
    UserChat storage recieverChat = chats[toAddress];
    recieverChat.messages[toAddress].push(userMessage);

}

    function getChatHistory(address toAddress)
        public
        view
        returns (Message[] memory userMessages)
    {
        userMessages = chats[msg.sender].messages[toAddress];
        
    }
    
    function getTest(string memory toAddress)
        public
        view
        returns (address test, string memory zzz)
    {
        test=msg.sender;
        zzz=toAddress;
        
    }
}