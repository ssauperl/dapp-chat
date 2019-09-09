var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Chat = artifacts.require("./Chat.sol");

module.exports = function(deployer) {
  //deployer.deploy(SimpleStorage);
  deployer.deploy(Chat);
};
