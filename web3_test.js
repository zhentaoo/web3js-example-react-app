const Web3 = require("web3");

// const web3 = new Web3('https://mainnet.infura.io/v3/90321f8c5caf4680a19fa30a4d32e95a');

const web3 = new Web3(
  "https://eth-mainnet.g.alchemy.com/v2/5I4kYX9e4XywtB2PcBf2EGrrSftoVN0G"
);

// const address = '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe';
const address = "0x1787cb48812b36Dc200e32c189e0cF472d2b0f5F";

// 获取账户余额
const getBalance = async (address) => {
  try {
    const balance = await web3.eth.getBalance(address);
    console.log("---------------------获取账户余额---------------------");
    console.log(`Balance: ${web3.utils.fromWei(balance, "ether")} ETH`);
  } catch (err) {
    console.error(err);
  }
};

// 获取最新区块
const getLatestBlock = async () => {
  try {
    const block = await web3.eth.getBlock("latest");
    console.log("---------------------获取最新区块---------------------");
    console.log(block);
  } catch (err) {
    console.error(err);
  }
};

// 获取交易详情
const getTransaction = async (transactionHash) => {
  try {
    const transaction = await web3.eth.getTransaction(transactionHash);
    console.log("---------------------获取交易详情---------------------");
    console.log(transaction);
  } catch (err) {
    console.error(err);
  }
};

const main = async () => {
  await getBalance(address);

  await getTransaction(
    "0x75f9c53a845444ff91ff9cf7dc449c963d7c15a6be9485d12220320c7e58e88b"
  );
  await getLatestBlock();
};

// 发送交易
const sendTransaction = async (transaction, privateKey) => {
  try {
    const signedTx = await web3.eth.accounts.signTransaction(
      transaction,
      privateKey
    );

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log(receipt);
  } catch (err) {
    console.error(err);
  }
};

const transaction = {
  to: "0xRecipientAddress",
  value: web3.utils.toWei("1", "ether"),
  gas: 21000,
  gasPrice: web3.utils.toWei("20", "gwei"),
};

sendTransaction(transaction, privateKey);

main();
