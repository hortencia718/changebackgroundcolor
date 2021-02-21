
// my array of colors
let colors =['lime', 'lightyellow', 'orange','lightpink','brown','fuchsia', 'red', 'black','white','lightblue','turquoise','magenta'];
// get button 
let button = document.getElementById('button');
// add eventlistener 
button.addEventListener('click', function(){
    // selector of color
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    // get container
    let container = document.getElementById('container');
    // container element gets random color from array of colors
    container.style.background = randomColor ;
})



// click button and background color changes



