
const aquaBtn = document.getElementById('aqua');
const tealBtn = document.getElementById('teal');
const pinkBtn = document.getElementById('pink');
const purpleBtn = document.getElementById('purple');
const colorlessBtn = document.getElementById('colorless');


const colorDisplay = document.getElementById('color-display');


aquaBtn.addEventListener('click', function() {
    colorDisplay.style.backgroundColor = 'aqua';
    colorDisplay.textContent = 'aqua';
    colorDisplay.style.color = 'black'; 
});

tealBtn.addEventListener('click', function() {
    colorDisplay.style.backgroundColor = 'teal';
    colorDisplay.textContent = 'teal';
    colorDisplay.style.color = 'white'; 
});

pinkBtn.addEventListener('click', function() {
    colorDisplay.style.backgroundColor = 'pink';
    colorDisplay.textContent = 'pink';
    colorDisplay.style.color = 'black'; 
});

purpleBtn.addEventListener('click', function() {
    colorDisplay.style.backgroundColor = 'purple';
    colorDisplay.textContent = 'purple';
    colorDisplay.style.color = 'white'; 
});

colorlessBtn.addEventListener('click', function() {
    colorDisplay.style.backgroundColor = 'white';
    colorDisplay.textContent = 'colorless';
    colorDisplay.style.color = 'black'; 
});


colorlessBtn.parentNode.insertBefore(toggleBtn, colorlessBtn.nextSibling);

toggleBtn.addEventListener('click', function() {
    if (colorDisplay.style.display === 'none') {
        colorDisplay.style.display = 'flex';
        toggleBtn.textContent = 'Hide Display';
    } else {
        colorDisplay.style.display = 'none';
        toggleBtn.textContent = 'Show Display';
    }
});