console.log('it is working');
const counters = document.querySelectorAll('.counter');
const speed = 2000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');// we have target as number
        const count = +counter.innerHTML;

        const inc = target / speed;

        if (count < target) {
            counter.innerHTML = Math.ceil(count + inc);// to remove decimals
            setTimeout(updateCount, 1);
        } else {
            count.innerHTML = target;

        }
    }
    updateCount();
});