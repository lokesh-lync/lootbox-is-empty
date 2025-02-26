const data = require("./eggegg-dev.lootBoxes.json");
const { LyncLootBox, ChainIdentifier } = require("@lyncworld/lootbox-evm-sdk");
const { ethers } = require("ethers");

(async () => {
  const provider = ethers.getDefaultProvider("https://ronin.lgns.net/rpc");

  for (let i = 0; i < data.length; i++) {
    const lb = new LyncLootBox();
    await lb.initialize(
      ChainIdentifier.RONIN_MAINNET,
      provider,
      data[i].blockchainId,
    );

    const result = await lb.isEmpty();
    console.log("Lootbox", data[i].blockchainId, " is empty: ", result);
  }
})();
