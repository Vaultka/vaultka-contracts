// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import { WaterVault } from '../vaults/WaterVault.sol';

contract WaterVaultMock is WaterVault {
    function _beforeWithdraw(
        uint256 assets,
        uint256 shares,
        address receiver
    ) external {
        return beforeWithdraw(assets, shares, receiver);
    }

    function _afterDeposit(
        uint256 assets,
        uint256 shares,
        address receiver
    ) external {
        afterDeposit(assets, shares, receiver);
    }
}
