export const API_URL="https://sepolia.drpc.org";
export const PRIVATE_KEY="b88041c07e945fb57408506587eb994249d60e894f702c644b41b90e7aa0284c";
export const contrataddress="0x9c8dFdE16219d464e532a6f3EF183AA47C7392C9";
export const contractAbi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			}
		],
		"name": "addtweet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "markasfinished",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getalltweets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "enum tweetlist.tweetstatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct tweetlist.tweet[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "gettweet",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "enum tweetlist.tweetstatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tweets",
		"outputs": [
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "enum tweetlist.tweetstatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];