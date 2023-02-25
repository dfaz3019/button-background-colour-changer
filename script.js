const colours = ['black','red','gold','teal','orange','yellow','bronze','lime','green', 'magenta'];

const button = document.querySelector('button');

// testing if your random logic can result in the value of 0;
const randTest = () => {
    let zeroFound = false;
    for(let i = 0; i < 10000; i++){
        if(Math.floor(Math.random() * 10) + 1 == 0){
            zeroFound = true; // if it's still not true after 10,000 iterations it's probably safe to assume it will never be 0 with this logic :P
        }
    }
    // ternary ftw
    let message = zeroFound ? "Zero Found!" : "Zero Not Found!";
    alert(message); // console.log is a better alternative when testing values :P
}
randTest();

// suggested alternative random logic below
// Returns a random integer from 0 to 10:
// Math.floor(Math.random() * 11); 

button.addEventListener('click', () => {
    var randomColour = Math.floor(Math.random() * 10) + 1; // let keyword might be better than var here :O
    const grabBody = document.querySelector('body')
    grabBody.style.backgroundColor = colours[randomColour]
})

