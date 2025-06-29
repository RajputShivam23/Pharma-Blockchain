// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PharmaSupplyChain {
    struct Medicine {
        uint id;
        string name;
        string manufacturer;
        uint256 timestamp;
    }

    mapping(uint => Medicine) public medicines;
    uint public medicineCount;

    function addMedicine(string memory _name, string memory _manufacturer) public {
        medicineCount++;
        medicines[medicineCount] = Medicine(medicineCount, _name, _manufacturer, block.timestamp);
    }

    function getMedicine(uint _id) public view returns (Medicine memory) {
        return medicines[_id];
    }
}

