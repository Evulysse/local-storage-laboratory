const formEl = document.getElementById("form");
const dataInputEl = formEl.querySelector("#data");
const btnInputEl = formEl.querySelector("p:last-of-type input[type='button']");
const storedDataEl = document.getElementById("stored-data");
const pageLoadCounter = document.getElementById("page-load-counter");

function dataEl(text, element = "li") {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

function addDataToLocalStorage() {
    const data = dataInputEl.value.trim();

    if(!!data) {
        if(!!localStorage.getItem("data")) {

            let stringStoredData = localStorage.getItem("data");

            let storedData = JSON.parse(stringStoredData);
            console.log(storedData, typeof storedData);

            storedData.push(data);
            console.log(storedData);

            stringStoredData = JSON.stringify(storedData);
            console.log(stringStoredData);

            localStorage.setItem("data", stringStoredData);

            storedDataEl.append(dataEl(data));

        } else {   
            localStorage.setItem("data", JSON.stringify([data]));
            storedDataEl.append(dataEl(data));
        }
    }
}

btnInputEl.addEventListener("click", addDataToLocalStorage);
document.addEventListener("DOMContentLoaded", () => {
    if(!!localStorage.getItem("data")) {
        let storedData = JSON.parse(localStorage.getItem("data"));

        for(const data of storedData) {
            storedDataEl.append(dataEl(data));
        }
    }

    if(!!localStorage.getItem("number")) {
        let number = +localStorage.getItem("number") + 1;
        localStorage.setItem("number", number);
    } else {
        localStorage.setItem("number", 1);
    }

    pageLoadCounter.textContent = `${localStorage.getItem("number")} times` ;
});