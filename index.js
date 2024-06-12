const render = (hour, minute, second) => {
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');

    if (hourEl && minuteEl && secondEl) {
        
        hourEl.innerHTML = `${hour.toString().padStart(2, '0')}`;
        minuteEl.innerHTML = `${minute.toString().padStart(2, '0')}`;
        secondEl.innerHTML = `${second.toString().padStart(2, '0')}`;
    } else {
        throw new Error('One or more elements not found');
    }
}

const timer = () => {
    const countDown = setInterval(() => {
        try {
            const date = new Date();
            const hour = 23 - date.getHours();
            const minute = 59 - date.getMinutes();
            const second = 59 - date.getSeconds();
            if (second === 0) {
                clearInterval(countDown);
                timer();
            }
            render(hour, minute, second);
        } catch (error) {
            console.error('Error in timer:', error);
        }
    }, 1000);
}

try {
    timer();
} catch (error) {
    console.error('Error in timer initialization:', error);
}

