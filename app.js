// 1
const container = document.getElementById('container');
const btn =  document.querySelector('.btn-1');
const text = document.querySelector('.text');
const fadeElement = document.getElementById('fadeElement');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const moveElem = document.querySelector('.moveElem');
const btn4 = document.querySelector('.btn-4');
const six = document.querySelector('.six-el');
const myImage = document.getElementById('myImage');
const btn5 = document.querySelector('.btn-5');
const rotateElement = document.getElementById('rotateElement');
const btn6 = document.querySelector('.btn-6');
const border = document.querySelector('.border');
const hoverImage = document.querySelector('.hoverImage');

btn.addEventListener('click', function() {
    container.style.backgroundColor = 'red';
});

// 2

text.addEventListener('mouseover', function() {
    text.style.fontSize = '20px'
});

text.addEventListener('mouseout', function() {
    text.style.fontSize = '16px'
});

// 3

window.addEventListener('load', function() {
    document.querySelector('.third').style.visibility = 'hidden';
});


// 4
btn2.addEventListener('click', ()=> {
    fadeElement.classList.add('fade-in')

})

// 5
btn3.addEventListener('click', function() {
    moveElem.id = 'moveElement'

})

// 6
btn4.addEventListener('click', function() {
    six.classList.add('box')
})

// 7
myImage.addEventListener('mouseover', function() {
    myImage.style.opacity = 0.5;
});

myImage.addEventListener('mouseout', function() {
    myImage.style.opacity = 1;
});

// 8
btn5.addEventListener('click', function() {
    rotateElement.classList.add('rotate')
});

// 9
btn6.addEventListener('click', function() {
    border.style.border = '2px solid blue';
});

// 10
hoverImage.addEventListener('mouseover', function() {
    hoverImage.src = '7img.jpg';
});

hoverImage.addEventListener('mouseout', function() {
    hoverImage.src = '10img.jpg';
});