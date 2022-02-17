
// let showtext = document.querySelector('.textshow').innerHTML;
// let cursorelement = '<span class = "cursor" >&#124;</span>'
// let button =   document.querySelector('.typebtn');


// let i = 0;

// function autoText() {
//     let inputtedText = document.getElementById('autotext').value;
//     let len = inputtedText.length;
    
// console.log(inputtedText);
// console.log(len);
//     if (i < len ) {
//         document.querySelector('.textshow').innerHTML += inputtedText.charAt(i) +cursorelement;
//     console.log(inputtedText.charAt(i));
//     i++;
//     }
//     if( i == len){
//         document.querySelector('.textshow').innerHTML = '';
//         i= 0;
//     }

// }

// button.addEventListener('click',()=>{
//     setInterval(autoText, 1000);
// })

let showtext = document.querySelector('.textshow');
let typebtn = document.querySelector('.typebtn')
let  i = 0;
let cursorelement = document.querySelector('.cursor')
let music = document.getElementsByTagName('audio')[0];





typebtn.addEventListener('click',()=>{
    cursorelement.style.display = 'inline-block';

    setInterval(typewritter , 500);
    console.log('clicked')
    typebtn.disabled = true;
    document.querySelector('#autotext').disabled = true

})

function typewritter(){
    let inputtedText = document.querySelector('#autotext');
    let len = inputtedText.value.length;

    if(i < len){
        showtext.innerHTML += inputtedText.value.charAt(i);
        i++;

        music.play();
        console.log(inputtedText.value.charAt(i))
    }

    else{
        showtext.innerHTML = '';

        i = 0
    }
    }