export default function getTopLetter(str) {
    let charMap = {};
    let maxCharValue = 0
    let maxChar = ''

    for (let value of str) {
        if (charMap.hasOwnProperty(value)) {
            charMap[value]++
        } else {
            charMap[value] = 1
        }
    }

    for (let i in charMap) {
        if (charMap[i] > maxCharValue) {
            maxCharValue = charMap[i]
            maxChar = i
        }
    }
    return maxChar
}