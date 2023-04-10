let today= new Date()
let currMonth =  today.getMonth()
let currYear = today.getFullYear()

// functions needed to check leap year and days in february
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

//===================================================
// Creates the drop down of months for the month selection of the calendar
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let monthPicker = document.querySelector('#months-list')

months.map((month, i) => {
    let opt = document.createElement('option')
    opt.value = i;
    opt.innerHTML = month
    monthPicker.append(opt) 
})

//console.log(months[currMonth])
document.getElementById('months-list').value = currMonth



/*
months.forEach((e, index) => {
    let month = document.createElement('option')
    month.innerHTML = `<option value="${index}"><a>${e}</a></option>`
    monthPicker.appendChild(month)
})
*/


//======================================================


//======================================================
// Creates the year changer

    let calendarYearChanger = document.querySelector('#year')

    calendarYearChanger.value = currYear

    document.querySelector('#prev-year').onclick = () => {
        --currYear
        calendarYearChanger.innerHTML = currYear
        generateDays(currMonth, currYear)
    }

    document.querySelector('#next-year').onclick = () => {
        ++currYear
        calendarYearChanger.innerHTML = currYear
        generateDays(currMonth, currYear)
    }   


//======================================================

//======================================================
// Creates the grid and days for the month

   generateDays = (month, year) => {
        let firstDay = (new Date(year, month)).getDay()
        let table = document.querySelector('#calendar-days')
        let date = 1
        table.innerHTML = ""

        // create cells
        for(let i = 0; i < 6; i++) {
            let tr = document.createElement('tr')
            let cell = null

         for(let j = 0; j < 7; j++) {

            if(i === 0 &&  j < firstDay) {
                cell = document.createElement('td')
                let cellText = document.createTextNode("")
                cell.appendChild(cellText)
                tr.appendChild(cell)
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement('td')
                cell.setAttribute('data-date', date)
                cell.setAttribute('data-month', month + 1)
                cell.setAttribute('data-year', year)
                cell.setAttribute('dat-month-name', months[month])
                cell.innerHTML = '<span>' + date + '</span>'
                tr.appendChild(cell)
                date++
            }
        }

            table.appendChild(tr)
        }
   }

//======================================================

generateDays(currMonth, currYear)

function daysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate()
}