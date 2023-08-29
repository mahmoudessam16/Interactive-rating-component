let selectors = document.querySelectorAll(".selectors div");
let submitBtn = document.querySelector('button');
let thankState = document.querySelector('.thank-state');
let stateStart = document.querySelector('.state-start');
let result = document.querySelector('#result');

thankState.style.display = 'none';

selectors.forEach((selector) => {
    selector.addEventListener('click', function (e) {
        selectors.forEach((selector) => {
            selector.style.backgroundColor = "hsl(216, 4%, 25%)";
            selector.style.color = "hsl(217, 7%, 55%)";
        })
        e.target.style.backgroundColor = "orange";
        e.target.style.color = "white";
        submitBtn.addEventListener('click', function () {
            stateStart.style.display = 'none';
            thankState.style.display = 'block';
            result.textContent = e.target.textContent;
        })
    });
});
