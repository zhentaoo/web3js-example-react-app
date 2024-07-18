module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache 默认端口
      network_id: "*", // 任何网络ID
      // from: "0xF1E65a0b28bac17AE9aDEf80D3b52AEb970E5D8f",
      gas: 6721975, // 增加 Gas Limit
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Solidity 版本
    },
  },
};
