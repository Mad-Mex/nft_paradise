

function calculateCountdown(){

    let year = new Date().getFullYear();
    let difference = +new Date(`09/30/${year}`) - +new Date();
    let time = {}

    if(difference > 0){
        time = {
            days:    Math.floor(difference / (1000 * 60 * 60 * 24 )),
            hours:   Math.floor((difference / (1000 * 60 * 60)) % 24 ),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference /1000) % 60)
        };
    }

    return time;

}

export default calculateCountdown;