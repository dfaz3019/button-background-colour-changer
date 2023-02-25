const colours = ['black','red','gold','teal','orange','yellow','bronze','lime','green', 'magenta'];

const button = document.querySelector('button');

button.addEventListener('click', () => {
    var randomColour = Math.floor(Math.random() * 10) + 1;
    const grabBody = document.querySelector('body')
grabBody.style.backgroundColor = colours[randomColour]
})

