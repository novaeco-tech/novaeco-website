# Wallet & Funding

The **NovaFin Unified Wallet** is your financial command center for the circular economy. Unlike traditional banking interfaces, NovaFin allows you to hold, trade, and settle transactions using a mix of fiat currency and verified environmental assets.

## Supported Asset Classes

Your wallet supports multi-asset settlement. A single transaction (e.g., buying recycled steel) can be settled using a combination of:

* **Fiat Currencies:** EUR and USD (Powered by Stripe Connect integration).
* **Environmental Credits:** Verified Carbon Credits (from `NovaAir`/`NovaBalance`) and Biodiversity Offsets (from `NovaNature`).
* **Utility Tokens:** NovaPoints and Deposit Return Scheme (DRS) tokens.

## How to Fund Your Wallet

### Fiat Deposits
You can fund your EUR/USD balances using standard corporate banking rails:
1. Navigate to **NovaAdmin** -> **Wallet**.
2. Click **Deposit Fiat**.
3. Use the integrated Stripe checkout to link a corporate card or initiate a SEPA/ACH bank transfer.

### Earning Environmental Credits
You do not need to "deposit" carbon or biodiversity credits from external sources. These are minted directly into your wallet when your organization's regenerative actions are verified by the ecosystem:
* **Farmers (`NovaAgro`):** Earn Soil Carbon Credits when IoT sensors and `NovaNature` verify an increase in soil organic carbon.
* **Recyclers (`NovaRecycle`):** Earn Material Recovery tokens when secondary raw materials are successfully processed and listed on `NovaTrade`.

## Smart Escrow & Conditional Payments
NovaFin replaces traditional legal escrow with programmable smart contracts:
* **Deposit Return Schemes (DRS):** When a consumer buys a product in `NovaPack`, the €0.25 deposit is locked in escrow. It is only released back to the consumer's wallet when a Reverse Vending Machine (`NovaInfra`) verifies the return.
* **Chemical Leasing:** In `NovaChem`, funds are held in escrow and released to the solvent supplier strictly based on performance metrics (e.g., "1,000 parts cleaned") rather than volume delivered.