# Safe-App: Simple Uniswap Trade 

DISCLAIMER: this app is not production ready and should only be used for coding references

In this example it is shown how to migrate an existing Ethers based Dapp to a SafeApp and make it possible to use it standalone or within the Gnosis Safe web interface.

## Getting Started

Install dependencies and start a local dev server.

```
yarn install
cp .env.sample .env
yarn start
```

Then:

- If HTTPS is used (by default enabled)
  - Open your Safe app locally (by default via https://localhost:3000/) and accept the SSL error.
- Go to Safe Multisig web interface
  - [Mainnet](https://app.gnosis-safe.io)
  - [Rinkeby](https://rinkeby.gnosis-safe.io/app)
- Create your test safe
- Go to Apps -> Manage Apps -> Add Custom App
- Paste your localhost URL, default is https://localhost:3000/
- You should see Safe App Starter as a new app
- Develop your app from there

## Features

This example app utilizes the following libraries to make it possible to use it as a standalone app and a SafeApp:
- [`@gnosis.pm/safe-apps-react-sdk`](https://github.com/gnosis/safe-apps-sdk/tree/master/packages/safe-apps-react-sdk)
- [`@gnosis.pm/safe-apps-ethers-provider`](https://github.com/gnosis/safe-apps-sdk/tree/master/packages/safe-apps-ethers-provider)
- [`ethers`](https://github.com/ethers-io/ethers.js)
