pragma solidity >=0.4.0 <0.6.0;


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
        returns (bytes32[] memory, bytes32[] memory, address[] memory)
    {
        Message[] memory userMessages = chats[msg.sender].messages[toAddress];
        string[] memory timestamps = new string[](userMessages.length);
        string[] memory messages = new string[](userMessages.length);
        address[] memory addrs = new address[](userMessages.length);
        for (uint i = 0; i < userMessages.length; i++) {
            Message memory userMessage = userMessages[i];
            timestamps[i] = userMessage.timestamp;
            messages[i] = userMessage.text;
            addrs[i] = userMessage.origin;
        }
        return (timestamps, messages, addrs);
    }
}