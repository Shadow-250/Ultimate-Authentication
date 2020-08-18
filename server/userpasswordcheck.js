exports.isComplexEnough = function(password) {
    var matches = 0;

    if (password.length < 4) {
        return false;
    }

    if (password.indexOf(':') !== -1) {
        return false;
    }

    // match against all lowercase letters
    if (password.match(/^(?=.*[a-z]).+$/)) {
        matches++;
    }

    // match against all uppercase letters
    if (password.match(/^(?=.*[A-Z]).+$/)) {
        matches++;
    }

    // match against all numbers
    if (password.match(/^(?=.*\d).+$/)) {
        matches++;
    }

    // match against a reasonable set of special characters
    if (password.match(/^(?=.*[-+_!@#$%^&*.,?]).+$/)) {
        matches++;
    }

    return matches > 1;
};

/**
 * Prints a message to the given request, that the entered password was not complex enough, while giving the complexity
 * rules for passwords.
 *
 * @param req
 */
exports.printPasswordNotComplexEnoughError = function(req) {
    var message = [];
    message.push('The password does not meet the password complexity requirements. Please try again.');
    message.push('Your password must be at least 4 characters long and need to contain at least 2 different characters from the following groups:');
    message.push(' * Lowercase letters (a, b, c, ...)');
    message.push(' * Uppercase letters (A, B, C, ...)');
    message.push(' * Numbers (1, 2, 3, ...)');
    message.push(' * Special characters out of: -+_!@#$%^&*.,?');
    message.push(' * must not contain a colon (":")');
};