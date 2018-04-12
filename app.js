let left = document.querySelector('#left');
let right = document.querySelector('#right');


left.addEventListener('mouseenter', hoverLeft);
right.addEventListener('mouseenter', hoverRight);

function hoverLeft(){
    left.classList.add('hover_side');
    left.classList.remove('other_side');
    right.classList.add('other_side');
    right.classList.remove('hover_side');
}

function hoverRight(){
    left.classList.remove('hover_side');
    left.classList.add('other_side');
    right.classList.remove('other_side');
    right.classList.add('hover_side');
}