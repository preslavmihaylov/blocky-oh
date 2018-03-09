const blockyOhAddress = "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f";
const blockyOhABI =
[{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"winsCountOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCardSalesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cardSales","outputs":[{"name":"owner","type":"address"},{"name":"playerCardId","type":"uint256"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"definedCards","outputs":[{"name":"name","type":"bytes32"},{"name":"attack","type":"uint8"},{"name":"health","type":"uint8"},{"name":"rarity","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCardsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getCardsOf","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"playerCard","type":"uint256"}],"name":"getPlayerCardOf","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"isPlayerRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getSalesByPlayer","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"saleId","type":"uint256"}],"name":"getCardSale","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"},{"name":"playerCardId","type":"uint256"}],"name":"getCardSaleOfCard","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"saleId","type":"uint256"}],"name":"buyTradedCard","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"cardId","type":"uint256"}],"name":"CardBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"player","type":"address"}],"name":"PlayerRegistered","type":"event"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"challenger","type":"address"},{"indexed":false,"name":"opponent","type":"address"}],"name":"NewChallenge","type":"event"},{"constant":false,"inputs":[{"name":"_duelOracle","type":"address"}],"name":"setDuelOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"opponent","type":"address"}],"name":"challenge","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"cardId","type":"uint256"}],"name":"CardSaleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"challenger","type":"address"},{"indexed":false,"name":"opponent","type":"address"},{"indexed":false,"name":"hasWon","type":"bool"}],"name":"DuelResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"saleId","type":"uint256"}],"name":"NewCardSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"cardId","type":"uint256"}],"name":"NewCardWon","type":"event"},{"constant":false,"inputs":[{"name":"challenger","type":"address"},{"name":"opponent","type":"address"},{"name":"hasWon","type":"bool"},{"name":"wonCardId","type":"uint256"}],"name":"settleDuel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes32"},{"name":"attack","type":"uint8"},{"name":"health","type":"uint8"},{"name":"rarity","type":"uint8"}],"name":"createCard","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"playerCardId","type":"uint256"},{"name":"price","type":"uint256"}],"name":"setCardForSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"saleId","type":"uint256"}],"name":"removeCardSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

let contract = web3.eth.contract(blockyOhABI).at(blockyOhAddress);

