const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  it("should deploy and have an initial message", async () => {
    const helloWorldInstance = await HelloWorld.deployed();
    const message = await helloWorldInstance.getMessage();
    assert.equal(message, "Hello, World!");
  });

  it("should allow setting a new message", async () => {
    const helloWorldInstance = await HelloWorld.deployed();
    await helloWorldInstance.setMessage("New message!");
    const newMessage = await helloWorldInstance.getMessage();
    assert.equal(newMessage, "New message!");
  });
});
