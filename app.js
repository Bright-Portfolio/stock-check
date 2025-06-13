let plusBtn = document.querySelector('#plusbutton');
let count = 0;
let display = document.querySelector('#display') 
let minusBtn = document.querySelector('#minusbutton')
let resetBtn = document.querySelector('#reset')

plusBtn.addEventListener('click', function () {
    count += 1
    display.innerHTML = count
})

minusBtn.addEventListener('click', function () {
    if (count != 0) {
        count += -1
    display.innerHTML = count
    }  
})

resetBtn.addEventListener('click', function () {
    count = 0
    display.innerHTML = count
})
console.log(resetBtn);
