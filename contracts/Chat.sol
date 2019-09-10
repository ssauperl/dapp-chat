pragma solidity >=0.4.0 <0.6.0;
pragma experimental ABIEncoderV2;


contract Chat {

    struct  Message {
        address origin;
        string text;
        uint256 timestamp;
    }
    struct UserChat {
        mapping (address => Message[]) messages ;
    }
    mapping (address => mapping (address => Message[]))  chats;

    mapping (address => string)  testz;
    string myString;

    function sendAMessage(address toAddress, string memory content) public {
        uint256 timestamp = now;
        chats[msg.sender][toAddress].push(Message(msg.sender, content, timestamp));
        chats[toAddress][msg.sender].push(Message(msg.sender, content, timestamp));
    }

    function getChatHistory(address toAddress)
        public
        view
        returns (Message[] memory userMessages)
    {
        userMessages = chats[msg.sender][toAddress];
    }

    function setTest(string memory test) public returns (string memory){
       myString = test;
       return myString;
    }
    function getTest()
        public
        view
        returns (string memory)
    {
        return myString;
    }
}