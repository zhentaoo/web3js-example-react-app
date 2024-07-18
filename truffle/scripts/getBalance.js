module.exports = async function (callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const etherBalance = web3.utils.fromWei(balance, "ether");

    console.log("账户余额:", etherBalance, "ETH");
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
