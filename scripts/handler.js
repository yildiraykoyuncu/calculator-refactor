function calculateHandler(event) {
    // read & process user input from event
    let inputOne = document.getElementById('input-1').value;
    let x = Number(inputOne);

    let inputTwo = document.getElementById('input-2').value;
    let y = Number(inputTwo);

    let op = document.getElementById('operator').value;

    // pass user input through core logic
    const result = doMath(op, x, y); // leave this line!

    // render output to DOM for user

    document.getElementById('display').innerHTML = result;

    // log user action for developers

    // return true for the browser
    return true;
}