/**
 * The OS module:
 *  - Used when wanting info about the operating system and 
 *    basic system resources
 */

const os = require('os');

// info about current user
const user = os.userInfo() 
console.log(user);

// Method that returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`); 

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem,
    network: os.networkInterfaces(),
    TempDir: os.tmpdir(),
    cpus: os.cpus().length,
    Eol_Char: JSON.stringify(os.EOL)
};

console.log(currentOS);

/**
 * 
 * The Path Module:
 *  - Used when wanting to work with paths to files within system
 *  - Easier to use paths
 * 
 */
const path = require('path');

// Displays platform specific seperator
console.log(path.sep);

// returns a normalized path ()
const filePath = path.join('/Node.js Practice/', 'Practice','SubFolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath); // Return the last portion of a path. Similar to the Unix basename command.
                                      //  Often used to extract the file name from a fully qualified path.
console.log(`Last Portion of the File path: ${base}`);

// Example of returning an absolute path (GETS THE ENTIRE PATH!!)
const absolute = path.resolve(__dirname, 
                                'Node.js Practice',
                                'Practice',
                                'SubFolder', 
                                'test.txt');
console.log(absolute);


/**
 * File Sync Module
 *  - This allows for the use of 
 * 
 */

const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
// Synchronous Method (unefficient)
// read file
const first = readFileSync(path.join(__dirname, '..','SubFolder', 'first.txt'), 'utf8');
const second = readFileSync(path.join(__dirname, '..','SubFolder', 'second.txt'), 'utf8');
//Write to a file
writeFileSync(
    path.join('..', 'SubFolder', 'result.txt'),
    `Here is the result : ${first}, ${second}`
)



