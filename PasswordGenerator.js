function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecial) validChars += specialChars;

    if (validChars === '') {
        showMessage('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    document.getElementById('generated-password').value = password;
    showMessage('Password generated successfully!');
}

function copyToClipboard() {
    const passwordField = document.getElementById('generated-password');
    if (passwordField.value === '') {
        showMessage('Nothing to copy. Generate a password first.');
        return;
    }

    passwordField.select();
    document.execCommand('copy');
    showMessage('Password copied to clipboard!');
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');

    
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.classList.add('hidden');
    }, 3000);
}
