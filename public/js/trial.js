let today = new Date();
let currMonth = today.getMonth();
let currYear = today.getFullYear();
let selectedYear = document.querySelector(".year");

//console.log(currMonth)
//console.log(currYear)
/*
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];*/

let monthChosen = document.getElementById("months-list");

/*
months.map((month, i) => {
  let opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = month;
  if (i === currMonth) {
    opt.setAttribute("selected", "selected");
  }
  opt.setAttribute("id", "month-value");
  opt.setAttribute("value", `${i}`);
  monthChosen.appendChild(opt);
});
*/

generateDaysOfMonth = (month, year) => {
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);
  let days = 1;
  let tableData = null;
  let table = document.querySelector("#calendar-days");
  table.innerHTML = "";

  monthChosen.value = month;
  selectedYear.innerHTML = year;

  for (let i = 0; i < 6; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        tableData = document.createElement("td");
        let emptyText = document.createTextNode("");
        tableData.appendChild(emptyText);
        tr.appendChild(tableData);
      } else if (days > lastDay.getDate()) {
        break;
      } else {
        tableData = document.createElement("td");
        tableData.setAttribute("data-day", days);
        tableData.setAttribute("data-month", month + 1);
        tableData.setAttribute("data-year", year);
        tableData.innerHTML = days;
        tr.appendChild(tableData);
        days++;
      }
    }

    table.appendChild(tr);
  }
};

document.querySelector("#year").innerHTML = currYear;
generateDaysOfMonth(currMonth, currYear);

document.querySelector("#prev-year").onclick = () => {
  --currYear;
  document.querySelector("#year").innerHTML = currYear;

  generateDaysOfMonth(currMonth, currYear);
};

document.querySelector("#next-year").onclick = () => {
  ++currYear;
  document.querySelector("#year").innerHTML = currYear;

  generateDaysOfMonth(currMonth, currYear);
};

function monthChoice() {
  currMonth = parseInt(monthChosen.value);
  currYear = parseInt(document.querySelector("#year").innerHTML);
  generateDaysOfMonth(currMonth, currYear);
}

/*
    Code for the sidebar functionality 
*/

let smallerMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let smallCurrYear = today.getFullYear();
let smallCurrMonth = today.getMonth();

document.querySelector("#month").innerHTML = smallerMonths[smallCurrMonth];

document.querySelector("#smallYear").innerHTML = smallCurrYear;



function openSideBar() {
  document.getElementById("sidenav").style.width = "500px";
  document.getElementById("main").style.marginLeft = "500px";
}

function closeSideBar() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.querySelector("#smallPrev-Month").onclick = () => {
  if (smallCurrMonth <= 0) {
    --smallCurrYear;
    smallCurrMonth = 11;
  } else {
    --smallCurrMonth;
  }

  document.querySelector("#smallYear").innerHTML = smallCurrYear;
  document.querySelector("#month").innerHTML = smallerMonths[smallCurrMonth];
  generateSmallDaysOfMonth(smallCurrMonth, smallCurrYear);
};

document.querySelector("#smallNext-Month").onclick = () => {
  if (smallCurrMonth >= 11) {
    ++smallCurrYear;
    smallCurrMonth = 0;
  } else {
    ++smallCurrMonth;
  }
  document.querySelector("#smallYear").innerHTML = smallCurrYear;
  document.querySelector("#month").innerHTML = smallerMonths[smallCurrMonth];
  generateSmallDaysOfMonth(smallCurrMonth, smallCurrYear);
};

generateSmallDaysOfMonth = (month, year) => {
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);
  let days = 1;
  let tableData = null;
  let table = document.querySelector("#sideCalendar-Days");
  table.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        tableData = document.createElement("td");
        let emptyText = document.createTextNode("");
        tableData.appendChild(emptyText);
        tr.appendChild(tableData);
      } else if (days > lastDay.getDate()) {
        break;
      } else {
        tableData = document.createElement("td");
        tableData.setAttribute("data-day", days);
        tableData.setAttribute("data-month", month + 1);
        tableData.setAttribute("data-year", year);
        tableData.innerHTML = days;
        tr.appendChild(tableData);
        days++;
      }
    }

    table.appendChild(tr);
  }
};

generateSmallDaysOfMonth(smallCurrMonth, smallCurrYear)

/*
  Creates the Modal overlay
*/
function createModalOverlay() {
  // 1. create the dialog element
  let modal = createElement('dialog')
  
  // 2. add a class to style
  modal.setAttribute('class=eventModal')
  modal.setAttribute('id=setEvents')

  // 3. append to the td element
  
  // 4. add onclick even to td 
  // 5. trigger the modal
  // 6. add the event to that day of that month of that year
} 