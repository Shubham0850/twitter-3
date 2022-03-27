require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_cqfxl5yx4HFvVpPh0HgNOwKHpYANpiX',
      accounts: [
        '71ea3f4c79c0cff8e1ea0672f9b92d32909d6ead6a815a118f519b40bea235f7',
      ],
    },
  },
}
