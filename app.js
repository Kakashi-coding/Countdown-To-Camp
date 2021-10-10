let DownDate = new Date('October 14, 2021 15:0:0').getTime();

let days_h = document.getElementById('day'),
    hours_h = document.getElementById('hour'),
    min_h = document.getElementById('min'),
    sec_h = document.getElementById('sec');


setInterval(update_timing, 1000);

function update_timing() {

    let time_today = new Date().getTime();
    //console.log(now);
    let time_diff = DownDate - time_today;

    let days = Math.floor(time_diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time_diff % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((time_diff % (1000 * 60)) / (1000));

    days_h.innerHTML = days;
    hours_h.innerHTML = hours;
    min_h.innerHTML = mins;
    sec_h.innerHTML = sec;

}
