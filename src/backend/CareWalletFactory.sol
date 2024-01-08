
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import {Test} from "./Test.sol";

contract CareWalletFactory {

/*
    address owner; //hospital
    address[] donors;
    uint256[] donations;
    uint256 donorCount;

    string public title; 
    string public description;
    uint256 public deadline; 
    uint256 public amountCollected;
    uint256 public amountNeeded;
*/

    struct Fundraiser {
        address id;
        address owner; //hospital
        string title; 
        string description;
        uint256 amountNeeded;
        uint256 deadline; 
        uint256 amountCollected;
        address[] donors;
        uint256[] donations;
        uint256 donorCount;
    }

    mapping(uint256 => Fundraiser) public fundraisers;
    Test[] public listOf_CareWallets;
    uint256 numOf_CareWallets;

    function create_CareWallet(address _owner, string memory _title, string memory _description, uint256 _amountNeeded, uint256 _deadline) public {
        Test new_CareWallet = new Test(_owner, _title, _description, _amountNeeded, _deadline);
        listOf_CareWallets.push(new_CareWallet);

        Fundraiser storage fundraiser = fundraisers[numOf_CareWallets];
        fundraiser.id = address(new_CareWallet);
        fundraiser.owner = _owner;
        fundraiser.title = _title;
        fundraiser.description = _description;
        fundraiser.amountNeeded = _amountNeeded;
        fundraiser.deadline = _deadline;
        fundraiser.amountCollected = 0;
        numOf_CareWallets++;
    }

    function get_CareWallet() public view returns (Fundraiser[] memory) {
        Fundraiser[] memory allFundraisers = new Fundraiser[](numOf_CareWallets);
        for(uint i = 0; i < numOf_CareWallets; i++) {
            Fundraiser storage item = fundraisers[i];
            allFundraisers[i] = item;
        }
        return allFundraisers;
    }

    function setNumberofCareWallets() public {
        numOf_CareWallets = 0;
    }

    function getNumberofCareWallets() public view returns (uint256) {
        return numOf_CareWallets;
    }
}