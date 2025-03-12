const { ethers } = require("hardhat");

async function main()
{
    const [deployer]=await ethers.getSigners();

    const nativeToken=await ethers.getContractFactory("Usdt");
    const tokeninstance=await nativeToken.deploy();
    console.log("token address",tokeninstance.address);
}

main()
.then(console.log("token deployed successfully"))
.catch((error)=>
{
console.log("error",error)
})