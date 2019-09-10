pragma solidity >=0.4.0 <0.6.0;
pragma experimental ABIEncoderV2;

contract SimpleStorage {
  string storedData;

  function set(string memory x) public {
    storedData = x;
  }

  function get() public view returns (string memory) {
    return storedData;
  }
}
