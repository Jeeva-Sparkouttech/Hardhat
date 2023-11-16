# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
```

Compile a smart contract
- npx hardhat compile

Deploy in local hardhat network:
- npx hardhat node
- npx hardhat run --network localhost scripts/deploy.ts 
or 
- npx hardhat run scripts/deploy.ts

Deploy in live blockchain network
- npx hardhat run scripts/deploy.ts --network <network-name>

Verify a smart contract
- npx hardhat verify --network <network-name> <contract-address> <constructor-arguments>
- npx hardhat verify --constructor-args arguments.js <DEPLOYED_CONTRACT_ADDRESS>