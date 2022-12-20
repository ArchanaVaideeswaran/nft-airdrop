// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract Greeter is ERC165 {
    function sayHello() external pure returns (string memory) {
        return "Hello!";
    }
}
