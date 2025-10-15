// Asyncronus Method (Using Callbacks)
// Main idea is that while this processes, the program will offload this task 
// and move on to the next request of a process
console.log('Start')
readFile(path.join(__dirname, '..', 'SubFolder', 'first.txt'), 'utf8', 
(err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile(path.join(__dirname, '..', 'SubFolder', 'second.txt'), 'utf8', 
    (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(path.join(__dirname, '..', 'SubFolder', 'result2.txt'),
            `The result is: ${first}, ${second}`, 'utf8',
            (err, result) => {
                if(err){
                    console.log(err);
                    return
                }
            });
        });
});
console.log('Starting next task')
// Promises are less messy and a better way to create async functions

