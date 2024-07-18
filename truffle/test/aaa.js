const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (callback) {
  const instance = await SimpleStorage.deployed();

  const value = await instance.get();

  console.log("Stored value:", value.toString());
};
