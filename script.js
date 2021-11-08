'use strict';

const mainContainer = document.getElementById('mainContainer');
const container_btn = document.getElementById('container_btn');
const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const blueBtn = document.getElementById('blueBtn');
const redBtn = document.getElementById('redBtn');
const resetBtn = document.getElementById('resetBtn');
const container_Text = document.getElementById('container_Text');

const extractVal = ()=>{
    return textInput.value;
}

function fontSize() {
    const container_Text = document.getElementById('container_Text');
    const style = window.getComputedStyle(container_Text);
    const font_size = style.getPropertyValue('font-size');
    const size = font_size.slice(0,2);
    return size;
}


submitBtn.addEventListener('click',function () {
    const extVal = extractVal()
    container_Text.innerText = extVal;
})

zoomInBtn.addEventListener('click',function () {
    const size = fontSize();
    container_Text.style.fontSize = `${ +size + 2}px`;
})

zoomOutBtn.addEventListener('click',function () {
    const size = fontSize();
    container_Text.style.fontSize = `${ +size - 2}px`;
})

blueBtn.addEventListener('click',function () {
    container_Text.style.color = 'blue';
})

redBtn.addEventListener('click',function () {
    container_Text.style.color = 'red';
})

resetBtn.addEventListener('click',function () {
    textInput.value = '';
    container_Text.innerText = ''
})