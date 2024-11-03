// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VALHALA is ERC20 {
    constructor(uint256 initialSupply) ERC20("VALHALA", "VHA") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
