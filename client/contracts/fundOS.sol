pragma solidity ^0.8.9;

contract Funding {
    struct Project {
        address payable owner;
        uint goal;
        uint balance;
    }

    Project[] public projects;

    function createProject(uint _goal) public {
        Project memory newProject = Project({
            owner: payable(msg.sender),
            goal: _goal,
            balance: 0
        });

        projects.push(newProject);
    }

    function donate(uint _projectId) public payable {
        require(_projectId < projects.length, "Project does not exist");
        require(msg.value > 0, "Must send some ether");

        Project storage project = projects[_projectId];
        project.balance += msg.value;

        if (project.balance >= project.goal) {
            project.owner.transfer(project.balance);
            project.balance = 0;
        }
    }
}