// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "./GatekeeperTwo.sol";

contract GatekeeperTwoAttack {
    GatekeeperTwo public gktwo;
    bytes8 public gateKey;

    constructor(address _gatekeepertwo) {
        gktwo = GatekeeperTwo(_gatekeepertwo);
    }
}
