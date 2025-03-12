/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const infuraLink="96d713927fc64453a3975314635bfd89"
const privateKey="89983aebda737e7d5da0736d6c1fbf5f508ee4d731f2f3554c367155884ae6aa"
module.exports = {
  solidity: "0.8.19",
  networks:
  {
    sepolia:
    {
    url:`https://sepolia.infura.io/v3/${infuraLink}`,
    accounts:[`${privateKey}`]
    }
    
  }
};
