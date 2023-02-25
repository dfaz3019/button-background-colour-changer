const colours = ['black','red','gold','teal','orange','yellow','bronze','lime','green'];


(function () {
    randomColour = Math.floor(Math.random() * 10) + 1;
})();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const grabBody = document.querySelector('body');
    grabBody.style.backgroundColor = colours[randomColour];
})

