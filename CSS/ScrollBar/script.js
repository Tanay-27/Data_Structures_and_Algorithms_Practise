const sliderBtn = document.getElementById('sliderBtn');
let isDragging = false;
let initY = 0;
let offsetY = 0;
let newTop;

sliderBtn.addEventListener('mousedown',startDrag);

function startDrag(e){
    console.log('drag starteddd');
    isDragging = true;
    initY = e.clientY = offsetY;
    sliderBtn.style.transition = 'none';
    document.addEventListener('mouseup',endDrag);
    document.addEventListener('mousemove',handleDrag);
}

function endDrag(){
    console.log('end drag');
    isDragging = false;
    sliderBtn.style.transition = 'top 0.2s ease-out';
}

function handleDrag(e){
    if(!isDragging) return;
    else{
        newTop = e.clientY - sliderBtn.parentElement.getBoundingClientRect().top - initY - 40;
        console.log(sliderBtn.parentElement.clientHeight, sliderBtn.clientHeight);
        if(newTop>=0) {
            sliderBtn.style.left = `${newTop}px`;
        }
    }
}

function sliderClicked(){
    console.log('DRAGGGGG');
}