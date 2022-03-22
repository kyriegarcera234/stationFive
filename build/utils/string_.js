"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_string = void 0;
function validate_string(str) {
    console.log(str);
    if (str.toLowerCase().includes('Hello'.toLowerCase()) || str.toLowerCase().includes('Hi'.toLowerCase())) {
        return 'Welcome to StationFive.';
    }
    else if (str.toLowerCase().includes('Goodbye'.toLowerCase()) || str.toLowerCase().includes('bye'.toLowerCase())) {
        return 'Thank you, see you around.';
    }
    else {
        return 'Sorry, I don\'t understand.';
    }
}
exports.validate_string = validate_string;
