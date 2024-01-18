// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import { CareWallet } from "./CareWallet.sol";

contract CareWalletFactory {

    struct Fundraiser {
        address id;
        string title;
        string description;
        uint256 deadline;
        uint256 amountCollected;
        uint256 amountNeeded;
    }

    address[] public fundraiserAddresses;
    CareWallet[] public listOf_CareWallets;
    uint256 numOf_CareWallets;

    function create_CareWallet(address _owner, string memory _title, string memory _description, uint256 _amountNeeded, uint256 _deadline) public {
        CareWallet new_CareWallet = new CareWallet(_owner, _title, _description, _amountNeeded, _deadline);
        listOf_CareWallets.push(new_CareWallet);

        fundraiserAddresses.push(address(new_CareWallet));
        numOf_CareWallets++;
    }

    function get_CareWallet() public view returns (Fundraiser[] memory) {
        Fundraiser[] memory allFundraisers = new Fundraiser[](numOf_CareWallets);
        for(uint i = 0; i < numOf_CareWallets; i++) {
            CareWallet tmp = CareWallet(payable (fundraiserAddresses[i]));
            allFundraisers[i] = Fundraiser(
                fundraiserAddresses[i],
                tmp.title(),
                tmp.description(),
                tmp.deadline(),
                tmp.amountCollected(),
                tmp.amountNeeded()
            );
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