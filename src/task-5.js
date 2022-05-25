export default function trim(text, maxLength) {
    let newText
    if (text.length > maxLength){
        newText = text.slice(0, (maxLength-1)) + "\u2026";
    }
    if (maxLength <= 0){
        throw new RangeError('Довжина рядка не може бути від*ємною або нулевою')
    }
    if (text.length <= maxLength){
        return text
    }
    return newText;
}
