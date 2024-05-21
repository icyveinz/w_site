function animateValue(id, start, end, duration) {
    const INTERVAL_TIME = 10;
    if (duration < 100) {
        duration = 100;
    } else if (duration > 10000) {
        duration = 10000;
    }

    let obj      = document.getElementById(id);
    let decimals = (end % 1 != 0) ? (end.toString().split('.')[1] || '').length : 0;

    if (end === start) {
        obj.innerHTML = start.toFixed(decimals);
        return;
    }

    const stepTime = Math.ceil(duration / INTERVAL_TIME);
    let doneLoops = 0;

    let quantityPerLoop = end / stepTime;

    let increment = (end - start) / stepTime;
    let current   = start;

    const INTERVAL = setInterval(function () {
        current += quantityPerLoop;
        obj.innerHTML = current.toFixed(decimals);
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(INTERVAL);
            obj.innerHTML = parseFloat(end).toFixed(decimals);
        }
    }, INTERVAL_TIME);
}

function init() {
    animateValue('reliability-clients-count', 0, 98, 5000);
    animateValue('reliability-years-count', 0, 12, 5000);
    animateValue('reliability-directions-count', 0, 186, 5000);
}

$(function() {
    let inited = false;

    $(window).on('scroll', function() {
        if (inited) {
            return
        }
        if (document.getElementById('reliability-animation').offsetTop >= window.innerHeight + document.body.scrollTop) {
            inited = true;
            init()
        }
    });
})