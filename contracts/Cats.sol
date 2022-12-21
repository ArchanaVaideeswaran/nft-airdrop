// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";

contract Cats is ERC721 {
  error NotOwner();
  using Counters for Counters.Counter;

  address private immutable _owner;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Cats", "CAT") {
    _owner = msg.sender;
  }

  function mint(address to) external returns (uint256) {
    onlyOwner();
    _tokenIds.increment();
    uint256 newTokenId = _tokenIds.current();
    _safeMint(to, newTokenId);
    return newTokenId;
  }

  function onlyOwner() internal view {
    if (msg.sender != _owner) revert NotOwner();
  }
}
