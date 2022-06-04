document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'ru',
        initialView: 'dayGridMonth'
    });
    calendar.updateSize();
    calendar.render();

    const moment = require('moment');
    const momentLocale = require('moment/locale/ru');
    const newChart = require('chart.js');

    let now = moment();
    moment.locale('ru');

    let nowLocal = now.format('LL');
    document.querySelector(".date").innerHTML = `Сегодня ${nowLocal}`;
    console.log(nowLocal);

    let dataWeekArray = `[
        {
        "day": "Пн",
        "value": "9",
        "color":"rgba(255, 99, 132, 0.3)"
    },
    {
        "day":"Вт",
        "value":"8",
        "color":"rgba(255, 159, 64, 0.3)"
    },
    {
        "day":"Ср",
        "value": "4",
        "color":"rgba(255, 205, 86, 0.3)"
    },
    {
        "day":"Чт",
        "value": "8",
        "color":"rgba(75, 192, 192, 0.3)"
    },
    {
        "day":"Пт",
        "value": "6",
        "color":"rgba(54, 162, 235, 0.3)"
    },
    {
        "day":"Сб",
        "value": "2",
        "color":"rgba(153, 102, 255, 0.3)"
    },
    {
        "day":"Вс",
        "value": "0",
        "color":"rgba(122, 132, 150, 0.3)"
    }
    ]`;
    console.log(typeof dataWeekArray);

    let dataWeeks = JSON.parse(dataWeekArray);
    console.log(dataWeeks);

    let labelsWeekArray = [];
    let dataWeeksArray = [];
    let backgroundWeekColorArray = [];

    for (let dataWeek of dataWeeks) {
        let label = labelsWeekArray.push(dataWeek.day);
        let value = dataWeeksArray.push(dataWeek.value);
        let color = backgroundWeekColorArray.push(dataWeek.color);
    }

    const dataWeekChart = {
        labels: labelsWeekArray,
        datasets: [{
            label: 'Рабочее время по дням недели',
            data: dataWeeksArray,
            backgroundColor: "#D4C0C1"
        }]
    };
    const configWeekChart = {
        type: 'bar',
        data: dataWeekChart,
    };

    let chart = new Chart(document.getElementById('myChart').getContext('2d'),
        configWeekChart
    );
    let dataDayArray = `[
        {
        "type": "Работа",
        "value": "8",
        "color":"#6B404B"
    },
    {
        "type":"Сон",
        "value":"8",
        "color":"#D4C0C1"
    },
    {
        "type":"Спорт",
        "value": "2",
        "color":"#893245"
    },
    {
        "type":"Свободное время",
        "value": "6",
        "color":"#E0AEB6"
    }
    ]`;
    console.log(typeof dataDayArray);

    let dataDays = JSON.parse(dataDayArray);
    console.log(dataDays);

    let labelsDayArray = [];
    let dataDaysArray = [];
    let backgroundcolorDayArray = [];

    for (let dataDay of dataDays) {
        let label = labelsDayArray.push(dataDay.type);
        let value = dataDaysArray.push(dataDay.value);
        let color = backgroundcolorDayArray.push(dataDay.color);
    }
    const dataDayChart = {
        labels: labelsDayArray,
        datasets: [{
            label: 'Ежедневные дела',
            data: dataDaysArray,
            backgroundColor: backgroundcolorDayArray,
            hoverOffset: 4
        }]
    };

    const configDayChart = {
        type: 'doughnut',
        data: dataDayChart,
    };

    let lineChart = new Chart(document.getElementById("dayChart").getContext('2d'),
        configDayChart
    );

});