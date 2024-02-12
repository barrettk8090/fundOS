pragma solidity ^0.8.9;

import "hardhat/console.sol";


contract fundOS {
    struct Project {
        address payable owner;
        uint fundingGoal;
        uint deadline; 
        uint totalFunded;
        bool isFunded;
    }



    //Map to associate each project with a unique identifier 
    mapping(uint => Project) public projects;
    //Counter to keep track of the total number of projects
    uint public projectCount = 0;

    function createProject(uint _fundingGoal, uint _deadline) public {
    // Add a new project to the mapping with the incremented project count as the key
    console.log("Something is existing somewhere");
    projects[projectCount] = Project({
        owner: payable(msg.sender), // Set the owner of the project to the sender of the transaction
        fundingGoal: _fundingGoal, // Set the funding goal for the project
        deadline: _deadline, // Set the project deadline
        totalFunded: 0, // Initialize the totalFunded to 0
        isFunded: false // Initialize the isFunded flag to false- sets the project to indicate that it has not yet been funded.
    });

    // Log the details of the project
    console.log("Project created with the following details:");
    console.log("Owner: ", projects[projectCount].owner);
    console.log("Funding Goal: ", projects[projectCount].fundingGoal);
    console.log("Deadline: ", projects[projectCount].deadline);
    console.log("Total Funded: ", projects[projectCount].totalFunded);
    console.log("Is Funded: ", projects[projectCount].isFunded ? "Yes" : "No");

    // Increment the project count
    projectCount++;
}






    // Project[] public projects;

    // function createProject(uint _goal) public {
    //     Project memory newProject = Project({
    //         owner: payable(msg.sender),
    //         goal: _goal,
    //         balance: 0
    //     });

    //     projects.push(newProject);
    // }

    // function donate(uint _projectId) public payable {
    //     require(_projectId < projects.length, "Project does not exist");
    //     require(msg.value > 0, "Must send some ether");

    //     Project storage project = projects[_projectId];
    //     project.balance += msg.value;

    //     if (project.balance >= project.goal) {
    //         project.owner.transfer(project.balance);
    //         project.balance = 0;
    //     }
    // }
}