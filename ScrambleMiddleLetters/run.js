
const str = "At the edge of a wide pond, Yoda sits on a log. In his mouth is a Gimer Stick, a short twig with three little branches at the far end.  Luke is nowhere in sight, but now we begin to hear the sound of someone crashing through the foliage.";

function scramble(str){
    let t = str.split("");

    for(let i = t.length - 1; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = t[i];
        t[i] = t[randomIndex];
        t[randomIndex] = temp;
    }

    return t.join("");
}

// Main
let separateWords = str.split(/\s+/);

for(let i = 0; i < separateWords.length; i++){
    let word = separateWords[i];

    if(word.length <= 3){
        continue;
    }

    let punctuationIndex = word.search(/[^\w\s]/g);
    let punctuation;

    if (punctuationIndex != -1){
        punctuation = word[punctuationIndex]
        word = word.replace(punctuation, "");
        console.log("Found " + punctuation + " @ " + punctuationIndex);
        console.log(word);
    }

    let firstLetter = word.substring(0, 1);
    let lastLetter = word.substring(word.length - 1, word.length);
    let middleWord = word.substring(1, word.length - 1);

    middleWord = scramble(middleWord);

    word = firstLetter + middleWord + lastLetter;

    let arr = word.split("");

    arr.splice(punctuationIndex, 0, punctuation);

    word = arr.join("");

    separateWords[i] = word;
}

let output = separateWords.join(" ");

console.log(output);
