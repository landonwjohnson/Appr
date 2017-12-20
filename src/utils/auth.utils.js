function checkStrengthOf(password) {
    const symbol = /\W/;
    const num = /\d/;
    const symbolMatch = password.match(symbol);
    const numMatch = password.match(num);
    if (password.length < 8 || symbolMatch === [""] || numMatch === [""]) {
        return false;
    }
    else {
        return true;
    }
}

export {
    checkStrengthOf
};
