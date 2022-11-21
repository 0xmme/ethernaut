// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Privacy.sol";

contract PrivacyAttack {
    Privacy public priv;

    constructor(address _address) {
        priv = Privacy(_address);
    }

    function unlockPrivacy(bytes32 _inputdata) public {
        priv.unlock(bytes16(_inputdata));
    }

    /*
    A bunch of super advanced solidity algorithms...

      ,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`
      .,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,
      *.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^         ,---/V\
      `*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.    ~|__(o.o)
      ^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'^`*.,*'  UU  UU
  */
}
