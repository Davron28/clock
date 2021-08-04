let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');


function clock() {

    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();


    setTimeout(() => clock(), 1000)

}
clock();


/* Рекурсия - это когда функция вызывает саму себя */


let num = 0;

function rekurse() {
    console.log(num);
    if (num < 100) {
        num++
        rekurse();
    }
}
rekurse();



let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');
console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        this.classList.add('active');
        tabs[i].classList.add('active');
    })
}




let watchBtn = document.querySelector('.stopwatch__btn'),
    spanWatch = document.querySelector('.tabsLink__span'),
    watchSeconds = document.querySelector('.stopwatch__seconds'),
    watchMinutes = document.querySelector('.stopwatch__minutes'),
    watchHours = document.querySelector('.stopwatch__hours');


watchBtn.addEventListener('click', function() {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        spanWatch.classList.add('active');
        let i = 0;
        setTimeout(() => secundomer(this, i), 1000);
    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
        spanWatch.classList.remove('active');
        spanWatch.classList.add('active_clear');
    } else {
        this.innerHTML = 'start';
        spanWatch.classList.remove('active_clear');
        watchSeconds.innerHTML = 0;
        watchMinutes.innerHTML = 0;
        watchHours.innerHTML = 0;
    }
})

function secundomer(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0;
            watchSeconds.innerHTML = i;
            if (watchMinutes.innerHTML == 59) {
                watchMinutes.innerHTML = 0;
                watchHours.innerHTML++
            } else {
                watchMinutes.innerHTML++;
            }
        } else {
            i++
            watchSeconds.innerHTML = i;
        }
        setTimeout(() => secundomer(el, i), 1000);
    }
}


/* let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minuteNumber = document.querySelector('.minutes'),
    hoursNumber = document.querySelector('.hours');

function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    setTimeout(() => clock(), 1000);
}
clock(); */