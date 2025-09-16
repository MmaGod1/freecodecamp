let count = 0;

function cc(card) {
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card >= 7 && card <= 9) {
        // do nothing
    } else {
        count--;
    }

    if (count > 0) {
        return `${count} Bet`;
    } else {
        return `${count} Hold`;
    }
}

cc(10);
cc("J");
cc("Q");
cc("K");
console.log(cc("A")); // -5 Hold
