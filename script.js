let count = 0;
const countDisplay = document.getElementById('count-display');
const decreaseBtn = document.getElementById('btn-decrease');
const reset = document.getElementById('btn-reset');
const increaseBtn = document.getElementById('btn-increase');

decreaseBtn.addEventListener('click', function(){
    count-= 1;
    updateDisplay();
});
reset.addEventListener('click', function(){
    count= 0;
    updateDisplay();
});
increaseBtn.addEventListener('click', function(){
    count+= 1;
    updateDisplay();
});

const minus5btn = document.getElementById('btn-minus5');
const minus10btn = document.getElementById ('btn-minus10');
const minus20btn = document.getElementById('btn-minus20')
const plus5btn = document.getElementById('btn-plus5');
const plus10btn = document.getElementById ('btn-plus10');
const plus20btn = document.getElementById('btn-plus20');

minus5btn.addEventListener('click', function(){
    count -=5
    updateDisplay();
});
minus10btn.addEventListener('click', function(){
    count -=10
    updateDisplay();
});
minus20btn.addEventListener('click', function(){
    count -=20
    updateDisplay();
});
plus5btn.addEventListener('click', function(){
    count +=5
    updateDisplay();
});
plus10btn.addEventListener('click',function(){
    count +=10
    updateDisplay();
});
plus20btn.addEventListener('click', function(){
    count +=20
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;
if (count>0) {
    countDisplay.style.color = '#16a34a';
}
else if(count<0) {
    countDisplay.style.color = 'red';
}
else {
    countDisplay.style.color = '#bebebeff'
}
}
updateDisplay();

