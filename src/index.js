const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    str = expr.split("")
    let arr1= []
    let result = []
    let result1 = []
    let mourceArr = []
    for (let i = 0,y=0; i < str.length; i+=10,y++) {
        mourceArr.push(str.slice(i,i+10).join(""))
        arr1.push(mourceArr[y].slice(mourceArr[y].indexOf("1")))
    }
    for(let subArr of arr1){
        for (let t = 0; t < subArr.length; t+=2) {
            result.push(subArr[t]+subArr[t+1])            
        }
        result.push("")
    }
    result = result.map(el=>el=="10"?".":el=="11"?"-":" ").join("").split(" ")
    for(let el of result){
        result1.push(MORSE_TABLE[el])
        if(el=="") result1.push(" ");
    }
    return result1.join("").replace(/\s+/g," ").trim()
}

module.exports = {
    decode
}