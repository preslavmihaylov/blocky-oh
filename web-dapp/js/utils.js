function JSPrompt(title, placeholder, callback) {
    swal({
        title: title,
        text: "",
        content: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: placeholder })
    .then(callback);
}

function parseRarity(rarity) {
    switch (rarity) {
        case 0:
            return "Common";
        case 1:
            return "Uncommon";
        case 2:
            return "Rare";
        case 3:
            return "Unique";
        default:
            return "Unknown";
    }
}

function weiToEth(wei) {
    return wei / 1000000000000000000;
}

function ethToWei(eth) {
    return eth * 1000000000000000000;
}
