"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_string = void 0;
function validate_string(str) {
    const check_input = (str.toLowerCase().includes('Hello'.toLowerCase())) ? 'Welcome to StationFive.' :
        (str.toLowerCase().includes('Hi'.toLowerCase())) ? 'Welcome to StationFive.' :
            (str.toLowerCase().includes('Goodbye'.toLowerCase())) ? 'Thank you, see you around.' :
                (str.toLowerCase().includes('bye'.toLowerCase())) ? 'Thank you, see you around.' :
                    'Sorry, I don\'t understand.';
    return check_input;
}
exports.validate_string = validate_string;
