import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Chat from "./contracts/Chat.json";
import getWeb3 from "./utils/getWeb3";
import ContactList from './components/ContactList'
import MessageList from './components/MessageList'
import MessageFetchButton from './components/MessageFetchButton'
import MessageForm from './components/MessageForm'

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Chat.networks[networkId];
      const instance = new web3.eth.Contract(
        Chat.abi,
        deployedNetwork && deployedNetwork.address,
      );
      const currentAccount = accounts[3];
      const targetAccount = accounts[1];

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, currentAccount, targetAccount, messages: [] }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
   // await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();

    // Update state with the result.
    //this.setState({ storageValue: response });
  };

  getMessages = async () => {
    const { currentAccount, targetAccount, contract } = this.state;
    let messages = await contract.methods.getChatHistory(targetAccount).call({ from: currentAccount });
    this.setState({messages: messages});
  }

  sendAMessage = async (text) => {
    const { currentAccount, targetAccount, contract, messages } = this.state;
    await contract.methods.sendAMessage(targetAccount, text).send({ from: currentAccount, gas: '300000' });
    
    this.setState({messages: messages.concat({origin: currentAccount, text: text, timestamp: Date.now() / 1000 | 0})});
  }
  setCurrentAccount = (address)=>{
    this.setState({currentAccount:address, messages:[]})
  }
  setTargetAccount = (address)=>{
    this.setState({targetAccount:address, messages:[]})
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div>{this.state.currentAccount} ----> {this.state.targetAccount}</div>
        <ContactList contacts={this.state.accounts}
          currentAccount={this.state.currentAccount} 
          targetAccount={this.state.targetAccount}
          setCurrentAccount={this.setCurrentAccount}
          setTargetAccount={this.setTargetAccount}/>
        <MessageFetchButton getMessages={this.getMessages}/>
        <MessageList messages={this.state.messages} currentAccount={this.state.currentAccount}/>
        <MessageForm sendAMessage={this.sendAMessage}/>
      </div>
    );
  }
}

export default App;
