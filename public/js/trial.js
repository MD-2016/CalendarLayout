let today = new Date()
let currMonth = today.getMonth()
let currYear = today.getFullYear()
let smallCurrYear = today.getFullYear()
let smallCurrMonth = today.getMonth()
let selectedYear = document.querySelector('.year')

//console.log(currMonth)
//console.log(currYear)


let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let smallerMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let monthChosen = document.getElementById('months-list')

months.map((month, i) => {
    let opt = document.createElement('option')
    opt.value = i
    opt.innerHTML = month
    if(i === currMonth) {
        opt.setAttribute('selected', 'selected')
    }
    opt.setAttribute('id', 'month-value')
    opt.setAttribute('value', `${i}`)
    monthChosen.appendChild(opt)
})


generateDaysOfMonth = (month,year) => {
    let firstDay = new Date(year, month, 1)
    let lastDay = new Date(year, month + 1, 0)
    let days = 1
    let tableData = null
    let table = document.querySelector('#calendar-days')
    table.innerHTML = ""

    monthChosen.value = month
    selectedYear.innerHTML = year




    for(let i = 0; i < 6; i++) {
        let tr = document.createElement('tr')

        for(let j = 0; j < 7; j++) {
            if(i === 0 && j < firstDay.getDay()) {
                tableData = document.createElement('td')
                let emptyText = document.createTextNode("")
                tableData.appendChild(emptyText)
                tr.appendChild(tableData)
            } else if( days > lastDay.getDate()) {
                break;
            } else {
                tableData = document.createElement('td')
                tableData.setAttribute('data-day', days)
                tableData.setAttribute('data-month', month+1)
                tableData.setAttribute('data-year', year)
                tableData.innerHTML = days
                tr.appendChild(tableData)
                days++
            }
        }

        table.appendChild(tr)
    }
}

document.querySelector('#year').innerHTML = currYear
generateDaysOfMonth(currMonth, currYear)


document.querySelector('#prev-year').onclick = () => {
    --currYear
    document.querySelector('#year').innerHTML = currYear

    generateDaysOfMonth(currMonth, currYear)
}

document.querySelector('#next-year').onclick = () => {
    ++currYear
    document.querySelector('#year').innerHTML = currYear

    generateDaysOfMonth(currMonth, currYear)
}

function monthChoice() {
    currMonth = parseInt(monthChosen.value)
    currYear = parseInt(document.querySelector('#year').innerHTML)
    generateDaysOfMonth(currMonth, currYear)
}


/*
    Code for the sidebar functionality 
*/
function openSideBar() {
    document.getElementById('sidenav').style.width = "500px"
    document.getElementById('main').style.marginLeft = "500px"
}

function closeSideBar() {
    document.getElementById('sidenav').style.width = "0"
    document.getElementById('main').style.marginLeft = "0"
}

document.querySelector("#smallYear").innerHTML = smallCurrYear

document.querySelector('#smallPrev-Year').onclick = () => {
    --smallCurrYear
    document.querySelector('#smallYear').innerHTML = smallCurrYear
    //generateDaysOfMonth(smallCurrMonth, smallCurrYear)
}

document.querySelector('#smallNext-Year').onclick = () => {
    ++smallCurrYear
    document.querySelector('#smallYear').innerHTML = smallCurrYear
    //generateDaysOfMonth(smallCurrMonth, smallCurrYear)
}