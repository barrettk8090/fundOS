const path = require("path");

async function main() {

  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  const provider = deployer.provider;
  const balance = await provider.getBalance(await deployer.getAddress());
  console.log("Account balance:", balance.toString());

  const fundOS = await ethers.getContractFactory("fundOS");
  const fundos = await fundOS.deploy();
  await fundos.waitForDeployment();

  const fundosDeployedAddress = await fundos.getAddress();
  console.log("FundOS address:", fundosDeployedAddress);


  saveFrontendFiles(fundos);
}

function saveFrontendFiles(fundos) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "fund-os", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ fundOS: fundos.address }, undefined, 2)
  );

  const FundOSArtifact = artifacts.readArtifactSync("fundOS");

  fs.writeFileSync(
    path.join(contractsDir, "fundOS.json"),
    JSON.stringify(FundOSArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
