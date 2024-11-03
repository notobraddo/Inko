async function main() {
    const initialSupply = 1000000; // Misal 1 juta token
    const Token = await ethers.getContractFactory("VALHALA");
    const token = await Token.deploy(initialSupply);
  
    await token.deployed();
    console.log("Token deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  