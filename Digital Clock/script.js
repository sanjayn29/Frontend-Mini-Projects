const clock = document.getElementById("clock");
function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    if(hours >= 12 ){
        period = "PM";
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours === 0){
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds} ${period}`;
}
    setInterval(updateclock, 1000);

    updateclock();