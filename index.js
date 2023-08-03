let deadline = new Date("Aug 12, 2023 12:42:00").getTime();

let x = setInterval(function(){

    let now = new Date().getTime();

    let t = deadline - now;

    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );

    let minutes = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60 ) );

    let seconds =Math.floor((t % (1000 * 60 )) / 1000);

//passing the value to the tags by using id names
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if(t < 0){
        clearInterval(x);
        document.getElementById("the").innerText = "Expired";
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("minute").innerHTML = "0";
        document.getElementById("second").innerHTML = "0";
    }
}, 1000);

// const endCountdown = () => {
// 	clearInterval(timerInterval)
// 	timerRunningContent.classList.add('hidden')
// 	timerEndContent.classList.add("visible")
// }

// window.addEventListener("load", () => {
// 	startCountdown()
// 	timerInterval = setInterval(startCountdown, 1000)
// })