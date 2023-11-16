// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract BlackHeart is
    Initializable,
    UUPSUpgradeable,
    ERC20Upgradeable,
    PausableUpgradeable,
    OwnableUpgradeable
{
    uint8 private decimal;

    function initialize(
        string memory name,
        string memory symbol,
        uint8 _decimal,
        uint256 totalSupply
    ) public initializer {
        __ERC20_init_unchained(name, symbol);
        __Pausable_init_unchained();
        __Ownable_init_unchained();

        decimal = _decimal;
        _mint(msg.sender, totalSupply);
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view override returns (uint8) {
        return decimal;
    }

    /**
        @dev Pause the contract (stopped state) by owner
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
        @dev Unpause the contract (normal state) by owner
     */
    function unpause() external onlyOwner {
        _unpause();
    }

    function mint(uint256 amount) external onlyOwner {
        _mint(msg.sender, amount);
    }

    /**
     * @dev For authorizing the uups upgrade
     */
    function _authorizeUpgrade(address) internal override onlyOwner {}

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
