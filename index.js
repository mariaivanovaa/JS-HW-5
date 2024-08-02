// 1
document.getElementById("drinkList").addEventListener("click", function (event) {
    let selected = event.target;
    let message = "";
    if (selected.id === "coffee") {
        message = "Ви обрали каву!";
    } else if (selected.id === "tea") {
        message = "Ви обрали чай!";
    } else if (selected.id === "juice") {
        message = "Ви обрали сік!";
    }

    if (message) {
        alert(message);
    }
});

// 2
document.getElementById("checkButton").addEventListener("click", () => {
    const dayInput = document.getElementById("dayInput").value.trim().toLowerCase();
    const message = document.getElementById("message");

    const weekdays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
    const weekends = ["субота", "неділя"];

    if (weekdays.includes(dayInput)) {
        alert("Це робочий день.");
    } else if (weekends.includes(dayInput)) {
        alert("Це вихідний день.");
    }
});

// 3
document.getElementById("checkButtonSeason").addEventListener("click", () => {
    const month = (document.getElementById("monthInputSeason").value.trim());

    if (month === 12 || month === 1 || month === 2) {
        alert("Зараз зима");
    } else if (month >= 3 && month <= 5) {
        alert("Зараз весна");
    } else if (month >= 6 && month <= 8) {
        alert("Зараз літо");
    } else if (month >= 9 && month <= 11) {
        alert("Зараз осінь");
    }

    if (season) {
        alert(season);
    }
});

// 4
document.getElementById("checkButtonDays").addEventListener("click", () => {
    const month = parseInt(document.getElementById("monthInputDays").value.trim());
    let days;

    if (month >= 1 && month <= 12) {
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                days = 31;
                break;
            case 4: case 6: case 9: case 11:
                days = 30;
                break;
            case 2:
                days = 28;
                break;
        }
        alert(`У цьому місяці ${days} днів.`);
    } else {
        alert("Ви ввели неправильний номер місяця. Будь ласка, введіть номер від 1 до 12.");
    }
});

// 5
document.getElementById("checkButtonColor").addEventListener("click", () => {
    const color = document.getElementById("colorInput").value.trim().toLowerCase();

    switch (color) {
        case "червоний":
            alert("стоп");
            break;
        case "зелений":
            alert("йти");
            break;
        case "жовтий":
            alert("чекати");
            break;
        default:
            alert("Ви ввели неправильний колір. Будь ласка, введіть червоний, зелений або жовтий.");
            break;
    }
});

// 6
document.getElementById("calculateButton").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Ділення на нуль неможливе. Введіть інше число.");
                return;
            }
            result = num1 / num2;
            break;

    }

    alert(`Результат: ${result}`);
});
