const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (callback) {
  const instance = await SimpleStorage.deployed();
  
  // 设置值
  await instance.set(42);
  const value = await instance.get();
  console.log("Stored value:", value.toString());

  callback();
};
