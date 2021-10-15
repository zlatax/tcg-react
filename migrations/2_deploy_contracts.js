var SimpleStorage = artifacts.require("SimpleStorage");
var tcg = artifacts.require("tcg");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(tcg);
};
