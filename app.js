let girlCount = 0;
let boyCount = 0;
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const boysScore = document.querySelector('#boysScore');
boysScore.innerHTML = boyCount;
const girlsScore = document.querySelector('#girlsScore');
girlsScore.innerHTML = girlCount;

const select = document.querySelector("#selectNumber");
const reset = document.querySelector('#button3')

const girlsWin = document.createElement('h2');
girlsWin.innerText = 'GIRLS GIRLS!';
const boysWin = document.createElement('h2');
boysWin.innerText = 'BOYS BOYS!';

const girlsVBoys = document.querySelector('#girlsVBoys');
const backgroundColourTitle = document.querySelector("#title");

button1.addEventListener('click', function(){
    if(girlsScore.innerHTML < select.value){
        girlsScore.innerHTML = (girlCount++) + 1;
    }
    
    if(girlsScore.innerHTML == select.value && girlsScore.innerHTML > boysScore.innerHTML){
         girlsVBoys.innerHTML = girlsWin.innerText;  
         button2.disabled = true;
         backgroundColourTitle.style.backgroundColor = '#ff1493';
         backgroundColourTitle.style.color = 'white';

    }
})

button2.addEventListener('click', function(){
    if(boysScore.innerHTML < select.value){
        boysScore.innerHTML = (boyCount++) + 1;
    }
    if(boysScore.innerHTML == select.value && boysScore.innerHTML > girlsScore.innerHTML){
        girlsVBoys.innerHTML = boysWin.innerText; 
        button1.disabled = true; 
        backgroundColourTitle.style.backgroundColor = '#206eff';
        backgroundColourTitle.style.color = 'white';
   }
})

button3.addEventListener('click', function(){
    backgroundColourTitle.style.backgroundColor = 'white';
    backgroundColourTitle.style.color = 'black';
    button1.removeAttribute('disabled');
    button2.removeAttribute('disabled');
    girlCount = 0;
    girlsScore.innerHTML = girlCount;
    boyCount = 0;
    boysScore.innerHTML = boyCount;
    girlsVBoys.innerHTML = 'Girls vs Boys 500';
})




// Girls background pink
// BOys background blue
