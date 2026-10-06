function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(Num1, Num2){
    return Math.max (Num1, Num2);
}

function isPalindrome(word) {
    return word === word.split('').reverse ().join ('');
}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    return originalPrice * (1 - discountedPercentage / 100);
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };