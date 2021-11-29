//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract QuadraticAds {

    uint256 public startingFee = 200000 gwei;

    uint256 adCounter;

    struct Ad {
        uint256 id;
        string adURI;
    }

    event AdCreated (
        uint256 indexed id,
        string adURI
    );

    event AdExtended (
        uint256 indexed id,
        string adURI
    );


    mapping(uint256 => Ad) public ads;

    mapping(uint256 => mapping(address => uint256)) adToVotesPerPerson;


    // function extendLifetime(uint256 id) public payable {
    //     Ad memory _ad = ads[id];
    //     uint256 

    // }

    function createAd(string memory _adURI) public payable {
        require(msg.value > startingFee, "Please submit correct starting fee");
        // Ad storage _ad = Ad(adCounter, _adURI);

        emit AdCreated(adCounter, _adURI);

    }

}
