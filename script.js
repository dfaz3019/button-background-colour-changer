const colours = ['black','red','gold','teal','orange','yellow','bronze','lime','green', 'magenta'];

const button = document.querySelector('button');

// testing if your random logic can result in the value of 0;
const randTest = () => {
    let zeroFound = false;
    for(let i = 0; i < 10000; i++){
        if(Math.floor(Math.random() * 10) + 1 == 0){
            zeroFound = true;
        }
    }
    let message = zeroFound ? "Zero Found!" : "Zero Not Found!";
    alert(message);
}
randTest();

button.addEventListener('click', () => {
    var randomColour = Math.floor(Math.random() * 10) + 1;
    const grabBody = document.querySelector('body')
    grabBody.style.backgroundColor = colours[randomColour]
})

