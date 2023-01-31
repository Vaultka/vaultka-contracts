import hre, { deployments } from 'hardhat';
import { Deployment } from 'hardhat-deploy/types';

async function main() {
  const { get } = deployments;

  // const VodkaVaultManagerLibrary = await hreVerify('VodkaVaultManagerLibrary');
  // await hreVerify('VodkaVaultLogic', {
  //   libraries: {
  //     VodkaVaultManager: '0xe6595c3ddcd37a1b10c460a5585101d09d5e3ceb',
  //   },
  // });

  await hreVerify('DnGmxBatchingManagerLogicV2');

  //   await hreVerify('WaterVault');
  //
  //   await hreVerify('WithdrawPeriphery');
  //
  //   await hreVerify('DepositPeriphery');

  // helper method that verify a contract and returns the deployment
  async function hreVerify(label: string, taskArguments: any = {}): Promise<Deployment> {
    console.log('verifying:', label);

    const deployment = await get(label);
    taskArguments = { address: deployment.address, ...taskArguments };

    // try to verify on etherscan
    try {
      await hre.run('verify:verify', taskArguments);
    } catch (err: any) {
      console.log(err);
    }
    return deployment;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
