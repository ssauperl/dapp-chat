const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configguration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // develop: {
    //   port: 8545
    // }
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      websockets: true
    }
  }
};
