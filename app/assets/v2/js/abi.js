var token_abi = [{'inputs': [], 'constant': true, 'name': 'mintingFinished', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'name', 'outputs': [{'type': 'string', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_spender'}, {'type': 'uint256', 'name': '_value'}], 'constant': false, 'name': 'approve', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'totalSupply', 'outputs': [{'type': 'uint256', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_from'}, {'type': 'address', 'name': '_to'}, {'type': 'uint256', 'name': '_value'}], 'constant': false, 'name': 'transferFrom', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'decimals', 'outputs': [{'type': 'uint8', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_to'}, {'type': 'uint256', 'name': '_amount'}], 'constant': false, 'name': 'mint', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'version', 'outputs': [{'type': 'string', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_owner'}], 'constant': true, 'name': 'balanceOf', 'outputs': [{'type': 'uint256', 'name': 'balance'}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': false, 'name': 'finishMinting', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'owner', 'outputs': [{'type': 'address', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [], 'constant': true, 'name': 'symbol', 'outputs': [{'type': 'string', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_to'}, {'type': 'uint256', 'name': '_value'}], 'constant': false, 'name': 'transfer', 'outputs': [{'type': 'bool', 'name': ''}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': '_owner'}, {'type': 'address', 'name': '_spender'}], 'constant': true, 'name': 'allowance', 'outputs': [{'type': 'uint256', 'name': 'remaining'}], 'payable': false, 'type': 'function'}, {'inputs': [{'type': 'address', 'name': 'newOwner'}], 'constant': false, 'name': 'transferOwnership', 'outputs': [], 'payable': false, 'type': 'function'}, {'payable': false, 'type': 'fallback'}, {'inputs': [{'indexed': true, 'type': 'address', 'name': 'to'}, {'indexed': false, 'type': 'uint256', 'name': 'amount'}], 'type': 'event', 'name': 'Mint', 'anonymous': false}, {'inputs': [], 'type': 'event', 'name': 'MintFinished', 'anonymous': false}, {'inputs': [{'indexed': true, 'type': 'address', 'name': 'owner'}, {'indexed': true, 'type': 'address', 'name': 'spender'}, {'indexed': false, 'type': 'uint256', 'name': 'value'}], 'type': 'event', 'name': 'Approval', 'anonymous': false}, {'inputs': [{'indexed': true, 'type': 'address', 'name': 'from'}, {'indexed': true, 'type': 'address', 'name': 'to'}, {'indexed': false, 'type': 'uint256', 'name': 'value'}], 'type': 'event', 'name': 'Transfer', 'anonymous': false}];
var bounty_abi = [{'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'killBounty', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBountyToken', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}], 'name': 'fulfillBounty', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newDeadline', 'type': 'uint256'}], 'name': 'extendDeadline', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'getNumBounties', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_fulfillmentId', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}], 'name': 'updateFulfillment', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newFulfillmentAmount', 'type': 'uint256'}, {'name': '_value', 'type': 'uint256'}], 'name': 'increasePayout', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newFulfillmentAmount', 'type': 'uint256'}], 'name': 'changeBountyFulfillmentAmount', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newIssuer', 'type': 'address'}], 'name': 'transferIssuer', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_value', 'type': 'uint256'}], 'name': 'activateBounty', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_issuer', 'type': 'address'}, {'name': '_deadline', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}, {'name': '_fulfillmentAmount', 'type': 'uint256'}, {'name': '_arbiter', 'type': 'address'}, {'name': '_paysTokens', 'type': 'bool'}, {'name': '_tokenContract', 'type': 'address'}], 'name': 'issueBounty', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_issuer', 'type': 'address'}, {'name': '_deadline', 'type': 'uint256'}, {'name': '_data', 'type': 'string'}, {'name': '_fulfillmentAmount', 'type': 'uint256'}, {'name': '_arbiter', 'type': 'address'}, {'name': '_paysTokens', 'type': 'bool'}, {'name': '_tokenContract', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'issueAndActivateBounty', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBountyArbiter', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_value', 'type': 'uint256'}], 'name': 'contribute', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newPaysTokens', 'type': 'bool'}, {'name': '_newTokenContract', 'type': 'address'}], 'name': 'changeBountyPaysTokens', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBountyData', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'getFulfillment', 'outputs': [{'name': '', 'type': 'bool'}, {'name': '', 'type': 'address'}, {'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newArbiter', 'type': 'address'}], 'name': 'changeBountyArbiter', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newDeadline', 'type': 'uint256'}], 'name': 'changeBountyDeadline', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'acceptFulfillment', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'bounties', 'outputs': [{'name': 'issuer', 'type': 'address'}, {'name': 'deadline', 'type': 'uint256'}, {'name': 'data', 'type': 'string'}, {'name': 'fulfillmentAmount', 'type': 'uint256'}, {'name': 'arbiter', 'type': 'address'}, {'name': 'paysTokens', 'type': 'bool'}, {'name': 'bountyStage', 'type': 'uint8'}, {'name': 'balance', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getBounty', 'outputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'bool'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}, {'name': '_newData', 'type': 'string'}], 'name': 'changeBountyData', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_bountyId', 'type': 'uint256'}], 'name': 'getNumFulfillments', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'name': '_owner', 'type': 'address'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}], 'name': 'BountyIssued', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': false, 'name': 'issuer', 'type': 'address'}], 'name': 'BountyActivated', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'fulfiller', 'type': 'address'}, {'indexed': true, 'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'BountyFulfilled', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': '_bountyId', 'type': 'uint256'}, {'indexed': false, 'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'FulfillmentUpdated', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'fulfiller', 'type': 'address'}, {'indexed': true, 'name': '_fulfillmentId', 'type': 'uint256'}], 'name': 'FulfillmentAccepted', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'issuer', 'type': 'address'}], 'name': 'BountyKilled', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': true, 'name': 'contributor', 'type': 'address'}, {'indexed': false, 'name': 'value', 'type': 'uint256'}], 'name': 'ContributionAdded', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}, {'indexed': false, 'name': 'newDeadline', 'type': 'uint256'}], 'name': 'DeadlineExtended', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'bountyId', 'type': 'uint256'}], 'name': 'BountyChanged', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': '_bountyId', 'type': 'uint256'}, {'indexed': true, 'name': '_newIssuer', 'type': 'address'}], 'name': 'IssuerTransferred', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': '_bountyId', 'type': 'uint256'}, {'indexed': false, 'name': '_newFulfillmentAmount', 'type': 'uint256'}], 'name': 'PayoutIncreased', 'type': 'event'}];

var grants_abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "requiredGasPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "requiredTokenAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "requiredToAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "requiredPeriodSeconds",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "requiredTokenAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "author",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "nextValidTimestamp",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_toAddress",
          "type": "address"
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_tokenAmount",
          "type": "uint256"
        },
        {
          "name": "_periodSeconds",
          "type": "uint256"
        },
        {
          "name": "_gasPrice",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "gasPrice",
          "type": "uint256"
        }
      ],
      "name": "ExecuteSubscription",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "subscriptionHash",
          "type": "bytes32"
        },
        {
          "name": "gracePeriodSeconds",
          "type": "uint256"
        }
      ],
      "name": "isSubscriptionActive",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "name": "gasPrice",
          "type": "uint256"
        }
      ],
      "name": "getSubscriptionHash",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "subscriptionHash",
          "type": "bytes32"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "getSubscriptionSigner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "isSubscriptionReady",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "cancelSubscription",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "periodSeconds",
          "type": "uint256"
        },
        {
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "executeSubscription",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

var bounty_address = function() {
  if (document.web3network === null) {
    // default to mainnet if web3network isn't found in time
    document.web3network = 'mainnet';
  }
  switch (document.web3network) {
    case 'mainnet':
      return '0x2af47a65da8cd66729b4209c22017d6a5c2d2400';
    case 'ropsten':
      throw 'this network is not supported in bounty_address() for gitcoin';
    case 'kovan':
      throw 'this network is not supported in bounty_address() for gitcoin';
    case 'rinkeby':
      return '0xf209d2b723b6417cbf04c07e733bee776105a073';
    case 'custom network':
      // This only works if you deploy the Standard Bounties contract locally
      // Set the testrpc address to the address below in in the truffle.js file.
      // In the Standard Bounties repo, `truffle deploy --network testrpc`
      return '0x9ee228365ebc1da6a5d025fdf0939edf2bea21da';
  }
};




var etherscan_tx_url = function(txid) {
  switch (document.web3network) {
    case 'mainnet':
      return 'https://etherscan.io/tx/' + txid;
    case 'ropsten':
      return 'https://ropsten.etherscan.io/tx/' + txid;
    case 'kovan':
      return 'https://kovan.etherscan.io/tx/' + txid;
    case 'rinkeby':
      return 'https://rinkeby.etherscan.io/tx/' + txid;
    case 'custom network':
      return 'https://localhost/tx/' + txid;
    default:
      return 'https://etherscan.io/tx/' + txid;
  }
};

var erc20_approve_gas = 560000;
var max_gas_for_erc20_bounty_post = 517849;
var gasLimitMultiplier = 4;
var gasMultiplier = 1.3;
var defaultGasPrice = Math.pow(10, 9) * 5; // 5 gwei
var weiPerEther = Math.pow(10, 18);
