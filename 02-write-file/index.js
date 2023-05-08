const { stdin, stdout } = process;
const path = require('path');
const fs = require('fs');

const dirname = path.join(__dirname, 'text.txt');

stdout.write('Hello!\nPlease, write something!\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    
    fs.appendFile(dirname, data, (error) => {
        if (error) throw error;
    });

});

process.on('exit', () => stdout.write('Have a good time!'));
