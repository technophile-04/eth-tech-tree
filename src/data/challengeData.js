export const challengeData = {
  register: {
    label: "Register on SRE",
    description: "👩‍🏫 Learn how to build on Ethereum; the superpowers and the gotchas.",
    children: ["simple-nft-example", "decentralized-staking", "token-vendor"],
  },
  "simple-nft-example": {
    label: "🚩 Challenge 0: 🎟 Simple NFT Example",
    description:
      "🎫 Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Ethereum components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀",
    previewImage: "assets/0.png",
    children: ["dice-game", "nft-cohort"],
  },
  "decentralized-staking": {
    label: "🚩 Challenge 1: 🥩 Decentralized Staking App ",
    description:
      "🦸 A superpower of Ethereum is allowing you, the builder, to create a simple set of rules that an adversarial group of players can use to work together. In this challenge, you create a decentralized application where users can coordinate a group funding effort. The users only have to trust the code.",
    previewImage: "assets/1.png",
    children: ["minimum-viable-exchange", "learn-multisig"],
  },
  "token-vendor": {
    branchName: "challenge-2-token-vendor",
    label: "🚩 Challenge 2: 🏵 Token Vendor",
    description:
      '🤖 Smart contracts are kind of like "always on" vending machines that anyone can access. Let\'s make a decentralized, digital currency (an ERC20 token). Then, let\'s build an unstoppable vending machine that will buy and sell the currency. We\'ll learn about the "approve" pattern for ERC20s and how contract to contract interactions work.',
    previewImage: "assets/2.png",
    children: [],
  },
  "dice-game": {
    branchName: "challenge-3-dice-game",
    label: "🚩 Challenge 3: 🎲 Dice Game",
    description:
      "🎰 Randomness is tricky on a public deterministic blockchain. The block hash is the result proof-of-work (for now) and some builders use this as a weak form of randomness.  In this challenge you will take advantage of a Dice Game contract by predicting the randomness in order to only roll winning dice!",
    previewImage: "assets/dice.png",
    children: ["buidl-guidl"],
  },
  "buidl-guidl": {
    label: "Eligible to join 🏰️ BuidlGuidl",
    description:
      "The BuidlGuidl is a curated group of Ethereum builders creating products, prototypes, and tutorials to enrich the web3 ecosystem. A place to show off your builds and meet other builders. Start crafting your Web3 portfolio by submitting your DEX, Multisig or SVG NFT build.",
    previewImage: "assets/bg.png",
    children: [],
  },
  "minimum-viable-exchange": {
    label: "🚩 Challenge 4: ⚖️ Build a DEX",
    description:
      "💵 Build an exchange that swaps ETH to tokens and tokens to ETH. 💰 This is possible because the smart contract holds reserves of both assets and has a price function based on the ratio of the reserves. Liquidity providers are issued a token that represents their share of the reserves and fees...",
    previewImage: "assets/4.png",
    children: [],
  },
  "learn-multisig": {
    label: "🚩 Challenge 5: 👛 Multisig Wallet",
    description:
      '👩‍👩‍👧‍👧 Using a smart contract as a wallet we can secure assets by requiring multiple accounts to "vote" on transactions. The contract will keep track of transactions in an array of structs and owners will confirm or reject each one. Any transaction with enough confirmations can "execute".',
    previewImage: "assets/3.png",
    children: [],
  },
  "nft-cohort": {
    label: "🚩 Challenge 6: 🎁 SVG NFT 🎫 Building Cohort",
    description:
      "🧙 Tinker around with cutting edge smart contracts that render SVGs in Solidity. 🧫 We quickly discovered that the render function needs to be public... 🤔 This allows NFTs that own other NFTs to render their stash. Just wait until you see an Optimistic Loogie and a Fancy Loogie swimming around in the same Loogie Tank!",
    previewImage: "assets/nfts.png",
    children: [],
  },
  "learn-oracles": {
    label: "🚩 Challenge 7: 🔮 Oracles",
    description:
      "🛰 Off-chain information can be critical for on-chain logic but it's complicated! 🎲 Random numbers are also tricky on a deterministic public blockchain... ",
    previewImage: "assets/soon.png",
    children: [],
  },
};

export const challengeData1 = {
  register: {
    label: "Register on SRE",
    description: "👩‍🏫 Learn how to build on Ethereum; the superpowers and the gotchas.",
    children: ["simple-nft-example"],
  },
  "simple-nft-example": {
    label: "🚩 Challenge 0: 🎟 Simple NFT Example",
    description:
      "🎫 Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Ethereum components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀",
    previewImage: "assets/0.png",
    children: ["decentralized-staking"],
  },
  "decentralized-staking": {
    label: "🚩 Challenge 1: 🥩 Decentralized Staking App ",
    description:
      "🦸 A superpower of Ethereum is allowing you, the builder, to create a simple set of rules that an adversarial group of players can use to work together. In this challenge, you create a decentralized application where users can coordinate a group funding effort. The users only have to trust the code.",
    previewImage: "assets/1.png",
    children: ["token-vendor"],
  },
  "token-vendor": {
    branchName: "challenge-2-token-vendor",
    label: "🚩 Challenge 2: 🏵 Token Vendor",
    description:
      '🤖 Smart contracts are kind of like "always on" vending machines that anyone can access. Let\'s make a decentralized, digital currency (an ERC20 token). Then, let\'s build an unstoppable vending machine that will buy and sell the currency. We\'ll learn about the "approve" pattern for ERC20s and how contract to contract interactions work.',
    previewImage: "assets/2.png",
    children: [],
  },
};
