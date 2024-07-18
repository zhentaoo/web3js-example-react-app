<!-- 安装依赖 -->
npm install -g truffle
npm install -g ganache-cli

<!--  启动 Ganache -->
ganache-cli

<!-- 创建 Truffle 项目 -->
mkdir MyTruffleProject
cd MyTruffleProject
truffle init


<!-- 编写智能合约 -->
在 contracts 目录中创建一个新的智能合约文件，例如 SimpleStorage.sol


<!-- 编写迁移脚本 -->
在 migrations 目录中创建一个新的迁移脚本，例如 2_deploy_contracts.js


<!-- 配置 Truffle -->
编辑 truffle-config.js，设置你的网络配置，指定 Ganache 端口和网络ID


<!-- 编译智能合约 -->
truffle compile


<!-- 部署智能合约到本地网络 -->
truffle migrate --network development


<!-- 与智能合约交互 -->
在 scripts 或 test 目录中编写脚本或测试文件，交互你的合约。
例如，创建一个 scripts/interact.js

<!-- 执行脚本 -->
truffle exec scripts/interact.js --network development


<!-- 验证和调试 -->

truffle exec test/aaa.js --network development



测试：在 test 目录下创建测试文件，使用 JavaScript 或 Solidity 编写测试。
调试：使用 Truffle Console 进行交互和调试：

truffle console --network development
在 Truffle 控制台中，你可以直接执行 JavaScript 代码，访问合约：

const instance = await SimpleStorage.deployed();
const value = await instance.get();
console.log("Stored value:", value.toString());