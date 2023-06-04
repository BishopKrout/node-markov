/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios")
const MarkovMachine = require("./markov");

function makeText(path) {
    fs.readFile(path, "utf8", (err, text) => {
        if(err) {
            console.error(`Error: Ecountered problem with ${path}: ${err}`);
            process.exit(1);
        } else {
            let mm = new MarkovMachine(text);
            console.log(mm.makeText());
        }
    });
}

async function makeURLText(url) {
    let res;

    try {
        res = await axios.get(url);
    } catch (err) {
        console.error(`Error: Encountered problem with ${url}: ${err}`);
        process.exit(1);
    }
    let mm = new MarkovMachine(res.data);
    console.log(mm.makeText());
}

let [method, path] = process.argv.slice(2);

if (method === 'file') {
    makeText(path);
} else if (method === 'url') {
    makeURLText(path);
} else {
    console.error(`Uknown method: ${method}`);
    process.exit(1);
}

