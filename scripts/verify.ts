import { network, run } from "hardhat";
import addresses from "../registry/addresses.json";

async function main() {
  const chainId = network.config.chainId?.toString() || "";
  const entry = (addresses as any)[chainId];
  if (!entry) {
    throw new Error(`No addresses for chain ${chainId}`);
  }
  if (entry.ZIMXStub) {
    await run("verify:verify", { address: entry.ZIMXStub, constructorArguments: [] });
  }
  if (entry.ZiGXStub) {
    await run("verify:verify", { address: entry.ZiGXStub, constructorArguments: [] });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
