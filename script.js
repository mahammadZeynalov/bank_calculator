let calculateButton = document.getElementById('calculate');
let message = document.getElementById('message');

function calculateDeposit(start, monthlyDeposit, percent, duration) {
    start = +document.getElementById('start-balance').value;
    monthlyDeposit = +document.getElementById('monthly-deposit').value;
    percent = +(document.getElementById('percent').value / 12 / 100);
    duration = Math.floor(document.getElementById('duration').value / 30);

    if(start <= 0 || monthlyDeposit < 0 || percent <=0 || duration <=0 || duration % 1 != 0) {
        console.error('Некорректный ввод данных');
        message.style.visibility = 'visible';
        return NaN;
    }
    start = start * (1 + percent);

    for(let i = 1; i < duration; i++) {
        if(document.getElementById('monthly').selected == true) {
            start += monthlyDeposit;
        } else if (document.getElementById('quartal') == true) {
            if((i + 1) % 4 == 0) {
                start += monthlyDeposit;
            }
        } else if (document.getElementById('annually').selected == true) {
            if((i + 1) % 12 == 0) {
                start += monthlyDeposit;
            }
        }
        start *= (1 + percent);
        console.log(start);
    }
    alert('Рассчитанный баланс по окончании срока ' + Math.round(start) + ' рублей');
    return start;
}

calculateButton.addEventListener('click', calculateDeposit);