function showMarketplace() {
    if (typeof web3 === 'undefined') {
        return showError("Please install MetaMask to access the Ethereum Web3 API from your browser.");
    }

    let myAddress = web3.eth.accounts[0];
    if (!myAddress) return showError("Please log in to MetaMask");

    contract.isPlayerRegistered(myAddress, function(err, result) {
        if (err) return showError("Smart contract call failed: " + err);

        let isRegistered = result;
        console.log(isRegistered);

        if (isRegistered) {
            showAllCardSales(myAddress);
        } else {
            var registerData = {
                registerTitle:
                    "You aren't registered to Blocky-Oh yet. " +
                    "Register today to get your starting deck!"
            };

            template = $('#registerTemplate').html();
            var html = Mustache.to_html(template, registerData);
            $('#card-sales').append(html);
        }
    });
}

function showAllCardSales() {
    contract.totalCardSalesCount.call(function(err, result) {
        let cardSalesCnt = result.toNumber();

        for (var i = 1; i < cardSalesCnt; i++) {
            contract.getCardSale.call(i, function(err, result) {
                if (err) return showError("Smart contract call failed: " + err);
                var playerCardId = result[2].toNumber();
                var owner = result[1];
                if (owner == 0) return;

                var cardSale = {
                    owner: owner,
                    price: Number(weiToEth(result[3].toNumber())).toFixed(20).replace(/\.?0+$/,""),
                    saleId: result[0].toNumber()
                };

                if (owner == web3.eth.accounts[0]) {
                    cardSale['owner'] = "You";
                }

                contract.getPlayerCardOf.call(owner, playerCardId, function(err, result) {
                    if (err) return showError("Smart contract call failed: " + err);
                    cardSale['name'] = result[0].toString();
                    cardSale['attack'] = result[1].toNumber();
                    cardSale['health'] = result[2].toNumber();
                    cardSale['rarity'] = parseRarity(result[3].toNumber());

                    var template = $('#cardSaleTemplate').html();
                    var html = Mustache.to_html(template, cardSale);
                    $('#card-sales').append(html);
                });
            });
        }
    });
}

function removeCardSale(saleId) {
    if (typeof web3 === 'undefined') {
        return showError("Please install MetaMask to access the Ethereum Web3 API from your browser.");
    }

    contract.removeCardSale(saleId, function(err, result) {
        if (err) showError("Call to smart contract failed: " + err);

        showInfo("Card successfully removed from sale");
    });
}

function buyCard(saleId) {
    if (typeof web3 === 'undefined') {
        return showError("Please install MetaMask to access the Ethereum Web3 API from your browser.");
    }

    contract.cardSales(saleId, function(err, result) {
        if (err) return showError("Smart contract call failed: " + err);
        console.log(result);
        if (result[0] == web3.eth.accounts[0]) {
            swal("You can't buy a card, which is put on sale by you");
            return;
        }

        contract.buyTradedCard(saleId, {value: 5}, function(err, result) {
             if (err) return showError("Smart contract call failed: " + err);
             showInfo("Successfully purchased Blocky Oh Card");
             //location.reload();
        });
    });
}

function sellCard(playerCardId) {
    if (typeof web3 === 'undefined') {
        return showError("Please install MetaMask to access the Ethereum Web3 API from your browser.");
    }

    JSPrompt("Please enter a price in ETH", "The price for the card in ETH", function(price) {
        if (price === false) return false;
        if (price === "") return false;

        contract.setCardForSale(playerCardId, ethToWei(price), function(err, result) {
            if (err) return showError("Smart contract call failed: " + err);
            showInfo("Card Sale publishing pending");
        });
    });
}
