
function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned word is a palindrome
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

// Example usage:
const wordToCheck = "A man, a plan, a canal: Panama";
const result = isPalindrome(wordToCheck);

if (result) {
    console.log(`"${wordToCheck}" is a palindrome.`);
} else {
    console.log(`"${wordToCheck}" is not a palindrome.`);
}
