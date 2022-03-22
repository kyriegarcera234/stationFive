export function validate_string(str:any){
    const check_input =
    (str.toLowerCase().includes('Hello'.toLowerCase())) ? 'Welcome to StationFive.'  :
    (str.toLowerCase().includes('Hi'.toLowerCase())) ? 'Welcome to StationFive.'     :
    (str.toLowerCase().includes('Goodbye'.toLowerCase())) ? 'Thank you, see you around.' :
    (str.toLowerCase().includes('bye'.toLowerCase())) ? 'Thank you, see you around.' :
    'Sorry, I don\'t understand.'
    return check_input
}