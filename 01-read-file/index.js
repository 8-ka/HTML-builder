const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, '/text.txt');

fs.readFile(dirname, 'utf-8', (error, data) => {
    if (error) {
        console.log('error');
    }
    console.log(data);
});
