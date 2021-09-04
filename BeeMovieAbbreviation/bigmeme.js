const scriptPath = "C:\\Users\\xoond\\Desktop\\beemovieabbreviation\\script.txt";
const outputPath = "C:\\Users\\xoond\\Desktop\\beemovieabbreviation\\output.txt";

const fs = require('fs');

fs.readFile(scriptPath, 'utf-8', (err, data) => {
    if (err) throw err;

    data = data.replace(/\s+/g, " ");
    data = data.replace(/[0-9]/g, "");
    data = data.toLowerCase();

    let arr = data.split(/\s/);
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].substring(0, 1);
    }

    let str = arr.join("")

    fs.writeFile(outputPath, str, (e) => {

    });

    let dataLen = data.length;
    let outputLen = str.length;

    console.log(str);

    console.log("DataLen: " + dataLen);
    console.log("OutputLen: " + outputLen);

    console.log("Difference: " + (dataLen - outputLen));
    console.log("Size Diff: " + dataLen / outputLen);

})
