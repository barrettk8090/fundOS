# fundOS - A Decentralized Crowdfunding Platform 💰 (Work in Progress)

## Introduction

NOTE: Please scroll down to view screenshots of this project!

Welcome to fundOS, a cutting-edge decentralized crowdfunding platform that leverages blockchain technology to enable direct peer-to-peer funding through smart contracts. With a focus on transparency, trust, and community engagement, fundOS provides a robust ecosystem for creators and investors alike. At least... that's the goal :)

This project is currently a work-in-progress. We'll call it version 0.0.1. In its current state, a user can create an account or login to an existing account. They can connect their metamask wallet with the WalletConnect button.

Using the Start A Project+ button, a user is taken to a New Project Creation form where they can enter details about the project they need funding for. On submission of this form, Metamask will open and a user is required to pay a gas fee to post their project on the ethereum network. Projects created using this form are published to the blockchain.

A user can also view and add funding to projects, along with adding comments onto projects that are currently live. The "Fund Project" module, for now, simply increases the current funding that a project has. In future development, the hope is that users will be able to contribute actual ether to a project to help it meet its funding goal. Logic for fully-funded projects and projecs that do not hit their funding goal by the deadline set is currrenly a work in progress.

This project uses hardhat for testing Solidity smart contracts and interacting with them from the frontend (which uses ethers.js). I'm incredibly excited about writing my first sample smart contract and continuing this project in the future.

Future considerations for this project also include adding a staking pool that would collect all funds donated through the platform, adding them to the pool to grow in value, and using the returns to either: fund the fundOS platform (e.g. hosting costs), return extra funds to users, or to help project creators get their projects over the finish line.

## Technologies Used

This project was built using a variety of technologies:

- **React**: A JavaScript library for building user interfaces.
- **Solidity**: Programming language for developing smart contracts.
- **Hardhat**: Development environment for smart contract development.
- **Ethers.js**: A JavaScript library for interacting with smart contracts.
- **Python / SQLAlchemy**: Used for backend development.
- **Tailwind CSS**: A minimalist CSS framework used for styling the frontend, allowing for rapid design.

## Prerequisites

Before diving into the project, ensure you have the following prerequisites installed:

- MetaMask browser extension for interacting with Ethereum smart contracts
- Node.js and npm for frontend development
- Python 3 and pip for backend development

## Getting Started

If you want to test out the Web3/MetaMask components of this project, please read my blog post and scroll to the section toward the bottom about setting up MetaMask to work with test networks. You'll need to manually configure a test network within MetaMask to get this working. You can read that blog post here: https://barrettk.hashnode.dev/creating-your-first-full-stack-dapp-with-solidity-hardhat-and-react

Start by cloning this repo to your local environment and opening the root directory in VSCode.
In a terminal, cd to the root directory and enter the following commands to launch the frontend server.

```bash
npm i && npm run dev
```

In a new terminal window, cd into the server directory and run the following commands

```bash
cd /server

pipenv install; pipenv shell
```

In the shell, let's get the backend server running by entering:

```bash
python app.py
```

We now have the frontend and backend working. It's time to spin up hardhat, which will start a local Ethereum network node that's powered by hardhat.

In a new teminal window, make sure you're in the root directory and enter:

```bash
npx hardhat node
```

You should now be running the local ethereum node, which gives you a bunch of test accounts to play around with. If you've setup Metamask correctly as mentioned in my above blog post, you should now also be able to test the Start A Project+ functionality within the form.

Happy funding!

## Screenshots

![FundOS Homepage](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.19.08 AM.png>)
![Create Project Form Interface](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.22.59 AM.png>)
![Create Project Form Showing Connection with MetaMask](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.23.46 AM.png>)
![All Projects Page](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.23.56 AM.png>)
![Individual Project Page Showing Funding Percentage Bar](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.24.26 AM.png>)
![About This Project Module](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.24.34 AM.png>)
![User Dashboard](<client/fund-os/src/assets/Screenshot 2024-02-15 at 11.24.48 AM.png>)
