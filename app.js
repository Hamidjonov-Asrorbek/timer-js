let start = document.querySelector(".start");
let title = document.querySelector(".title")
let pause = document.querySelector(".stop")
let reset = document.querySelector(".reset")

// let minute = 0;
// let seconds = 0;
// let soat = 0;
// start.addEventListener( "click", () =>{
//     const interval = setInterval(() =>{
//         seconds += 1;

//         title.textContent =  `${soat < 10 ? `0${soat}` : soat} : ${minute < 10 ? `0${minute}` : minute} : ${seconds < 10 ? `0${seconds}` : seconds}`;

//         if(seconds == 59){
//             seconds = 0;
//             minute += 1;
//         }
//         else if(minute == 59){
//             minute = 0;
//             soat += 1
//         } 
//     }, 1)

    // start.disabled = true;

//     pause.addEventListener('click', () =>{
    // start.disabled = false;

//         clearInterval(interval);
//     })
// });

// ***************

let personMinut = +prompt("Enter minutes");

let seconds = 0;
let minute = personMinut%60;
let soat = Math.floor(personMinut/60);

pause.disabled = true;
reset.disabled = true;
let texContent = title.textContent = `${soat < 10 ? `0${soat}` : soat} : ${minute < 10 ? `0${minute}` : minute} : ${seconds < 10 ? `0${seconds}` : seconds}`
start.addEventListener( "click", () =>{
    reset.disabled = false
    const interval = setInterval(() =>{
        title.textContent = `${soat < 10 ? `0${soat}` : soat} : ${minute < 10 ? `0${minute}` : minute} : ${seconds < 10 ? `0${seconds}` : seconds}`
        
        if(seconds == 0 && !minute==0){
            seconds = 60;
            minute -= 1;
        }
        if(minute == 0 && !soat == 0){
            soat -= 1;
            minute = 59;
            seconds = 60;
        }
        seconds = seconds - 1
        if(minute == 0){
            if(soat !== 0){
                soat -= 1;
                minute = 59;
            }
            else{
                soat = 0;
            }
            
        }
        if(minute == 0 && soat == 0 && seconds == 0){ 
            start.disabled = true;
            pause.disabled = true;
            alert("Time out");
            clearInterval(interval);
        }
    }, 10)

    start.disabled = true;
    pause.disabled = false;



    pause.addEventListener('click', () =>{
        start.disabled = false;
        pause.disabled = true;
        clearInterval(interval);
    });

    reset.addEventListener("click", () =>{
        clearInterval(interval);
        title.textContent = texContent;
        start.disabled = false;
        pause.disabled = true;
        reset.disabled = true;
        seconds = 0;
        minute = personMinut%60;
        soat = Math.floor(personMinut/60);
    })
}); 

