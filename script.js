let calculateButton = document.getElementById('calculate');
let message = document.getElementById('message');

function finalBalance() {
    let start = Number(document.getElementById('start-balance').value);
    let periodDeposit = Number(document.getElementById('period-deposit').value);
    let percent = Number(document.getElementById('percent').value / 12 / 100);
    let duration = Math.floor(Number(document.getElementById('duration').value) / 30);

    function isValid(start, periodDeposit, percent, duration) {

        if(start <= 0 || periodDeposit < 0 || percent*1200 > 99 || percent*1200 <= 0 || duration <=0 || duration % 1 != 0 || isNaN(start) ||
        isNaN(periodDeposit) || isNaN(percent) || isNaN(percent) || isNaN(duration)) {
            console.error('Некорректный ввод данных');
            message.style.visibility = 'visible';
            console.log(start);
            return false;
        }
        return true;
    }

    if(isValid(start, periodDeposit, percent, duration) == false) {
        return;
    }

    function calculateDeposit(start, periodDeposit, percent, duration) {

        start = start * (1 + percent);
    
        for(let i = 1; i < duration; i++) {
            if(document.getElementById('monthly').selected == true) {
                start += periodDeposit;
            } else if (document.getElementById('quartal') == true) {
                if((i + 1) % 4 == 0) {
                    start += periodDeposit;
                }
            } else if (document.getElementById('annually').selected == true) {
                if((i + 1) % 12 == 0) {
                    start += periodDeposit;
                }
            }
            start *= (1 + percent);
            console.log(start);
        }
        message.style.visibility = 'hidden';
        alert('Рассчитанный баланс по окончании срока ' + Math.round(start) + ' рублей');
        return start;
    }
    calculateDeposit(start, periodDeposit, percent, duration);
}

calculateButton.addEventListener('click', finalBalance);