// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

contract Test {
    address owner; //hospital
    address[] donors;
    uint256[] donations;
    uint256 donorCount;

    string public title;
    string public description;
    uint256 public deadline;
    uint256 public amountCollected;
    uint256 public amountNeeded;

    event FundsSent(address indexed _owner);
    event DonationReceived(address indexed _donor);

    modifier validDonatedAmount(uint256 _amount) {
        require(_amount <= amountNeeded, "Not a valid amount");
        _;
    }

    constructor(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _amountNeeded,
        uint256 _deadline
    ) {
        require(
            _deadline > block.timestamp,
            "The deadline should be a date in the future."
        );
        owner = _owner;
        title = _title;
        description = _description;
        amountNeeded = _amountNeeded;
        deadline = _deadline;
        amountCollected = 0;
        donorCount = 0;
    }

    function sendFunds() private {
        (bool sent, ) = payable(owner).call{value: amountCollected}("");

        if (sent) {
            emit FundsSent(owner);
        }
    }

    function returnFunds() private {
        for (uint256 i = 0; i < donorCount; i++) {
            (bool sent, ) = payable(donors[i]).call{value: donations[i]}("");
            require(sent, "Failed to refund");
        }
    }

    function getDonors()
        public
        view
        returns (address[] memory, uint256[] memory)
    {
        return (donors, donations);
    }

    receive() external payable validDonatedAmount(msg.value) {
        uint256 amount = msg.value;

        donors.push(msg.sender);
        donations.push(amount);
        donorCount++;

        amountCollected += amount;
        amountNeeded -= amount;

        if (block.timestamp > deadline) {
            if (donorCount > 0) {
                returnFunds();
                amountNeeded = 0;
                amountCollected = 0;
                donorCount = 0;
            }
        }

        if (amountNeeded == 0) {
            sendFunds();
        } else {
            emit DonationReceived(msg.sender);
        }
    }
}
