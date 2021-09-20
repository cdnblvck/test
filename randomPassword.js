function generatePassword(charsLength) {
    const buf = new Uint8Array(charsLength / 2);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}

function generatePwd(charsLength) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()=/_-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i <= charsLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password
}