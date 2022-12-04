# Ethernaut

<div id="top"></div>

- [About the project](#about-the-project)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Packages used](#packages-used)
  - [License](#license)
  - [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About the Project

This project consists of my solvings of the [ethernaut challenges](https://ethernaut.openzeppelin.com). The challenges consists of contract files and the corresponding deploy files. It is built with hardhat (typescript & hardhat-deploy).

<!-- GETTING STARTED -->

## Getting Started

It's recommended that you've gone through the [hardhat getting started documentation](https://hardhat.org/getting-started/) before proceeding here.

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version`and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm

## Installation

1. Clone this repo:

```
git clone https://github.com/mme022/ethernaut
cd ethernaut
```

2. Install dependencies

```sh
yarn
```

or

```
npm i
```

If you want to deploy: 3. Add a `.env` file with the same contents of `.env.example`, but replaced with your variables.
![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+) **WARNING** ![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+)

> DO NOT PUSH YOUR PRIVATE_KEY TO GITHUB

6.Deploy the contracts to the challenge

Type in the following command in the terminal:

```
yarn hardhat deploy --network [network] --tags [tags,...]
```

This will compile the contract and deploy it to your desired network automatically!

The tags to use are at the and of each deploy script.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PACKAGES USED -->

## Packages used

- [Hardhat](https://hardhat.org/)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[@mme022](https://twitter.com/mme022)

<p align="right">(<a href="#top">back to top</a>)</p>
