const scorePassword = pass => {
    let score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    let letters = {};
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    let variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    let variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

const checkPassStrength = pass => {
    let score = scorePassword(pass);
    if (score > 80)
        return "Сильный пароль";
    if (score > 60)
        return "Средний пароль";
    if (score >= 30)
        return "Слабый пароль";

    return "";
}

export {
    checkPassStrength
}