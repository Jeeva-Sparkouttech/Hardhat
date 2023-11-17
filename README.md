# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
```

# Smart Contract Compilation, Deployment, and Verification

## Compile a Smart Contract
npx hardhat compile

## Deploying to the Local Hardhat Network
npx hardhat node
npx hardhat run --network localhost scripts/deploy.ts
or
npx hardhat run scripts/deploy.ts

## Deployment on a Live Blockchain Network
npx hardhat run scripts/deploy.ts --network (network-name)

## Verify a Smart Contract
npx hardhat verify --network (network-name) (contract-address) (constructor-arguments)

## Complex Constructor Arguments
npx hardhat verify --constructor-args arguments.ts (DEPLOYED_CONTRACT_ADDRESS)