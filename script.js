let currentForecastText = document.querySelector('.current-forecast h1');
let currentForecastPercent = document.querySelector('.current-forecast p');
let predictionText = "";

function generateRandom(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
};

const allForecasts = document.querySelector('.forecasts');
const wrapperForPrediction = document.querySelector('#forecast-item');

function savePrediction(text, percent) {
    const prediction = wrapperForPrediction.content.cloneNode(true);
    prediction.querySelector('h3').textContent = text;
    prediction.querySelector('p').textContent = percent;

    return prediction;
};

const button = document.querySelector('.forecast-btn');
button.addEventListener('click', function() {
    let predictionNumber = generateRandom(0, 6);
    let forecastPercent = generateRandom(0, 100);

    if (predictionNumber == 1) {
        predictionText = "Все будет супер!";
    } else if (predictionNumber == 2) {
        predictionText = "Все будет еще лучше!";
    } else if (predictionNumber == 3) {
        predictionText = "Не сдавайся, ты скоро будешь у цели!";
    } else if (predictionNumber == 4) {
        predictionText = "У тебя все получится!";
    } else {
        predictionText = "Ты на верном пути!";
    };

    currentForecastText.textContent = predictionText;
    currentForecastPercent.textContent = `Вероятность: ${forecastPercent}%`;

    const oldPrediction = savePrediction(predictionText, `Вероятность: ${forecastPercent}%`);
    allForecasts.prepend(oldPrediction);
});