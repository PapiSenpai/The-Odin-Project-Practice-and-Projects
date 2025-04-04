function task1(){
    // Return a int that adds into 7
    let a = 2;
    let b = 5;
    console.log(a+b);
    return;
}

function task2(){
    //Multiply 2 numbers and return the result
    let a=3;
    let b=4;
    alert(a*b); // This will show the result in an alert box
    console.log(a*b); // This will also log the result in the console
    return; // This will return the multiplication result
}

function task3(){
    // Return string of word with first letter capitalized
    let str = "hello world"; // Example string
    console.log(str.charAt(0).toUpperCase() + str.slice(1)); // This will capitalize the first letter and concatenate with the rest of the string
    return;
}

function task4(str = "NONE"){
    // Return the the last letter of a string
    console.log("The last letter would be " + str.slice(-1)); // This will return the last character of the string passed to the function
    alert("Be sure to call the function with a string to get the last letter using the console"); // Alert to remind the user to call the function with a string
}