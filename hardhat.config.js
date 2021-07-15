require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");

require("dotenv/config");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		hardhat: {
			forking: {
				url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
			},
		},
	},
	solidity: {
		compilers: [{ version: "0.8.5" }],
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	gasReporter: {
		currency: "USD",
		enabled: process.env.REPORT_GAS === "true" ? true : false,
		coinmarketcap: "",
	},
};