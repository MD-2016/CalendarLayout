
let currDate = new Date()

//===================================================
// Creates the drop down of months for the month selection of the calendar
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let monthPicker = document.querySelector('.months')

months.forEach((e, index) => {
    let month = document.createElement('li')
    month.innerHTML = `<li data-month="${index}"><a>${e}</a></li>`
    monthPicker.appendChild(month)
})
//======================================================


//======================================================
// Creates the year changer


    let currYear = {value: currDate.getFullYear()}
    let calendarYearChanger = document.querySelector('#year')

    document.querySelector('#prev-year').onclick = () => {
        --currYear.value
        calendarYearChanger.innerHTML = currYear.value
    }

    document.querySelector('#next-year').onclick = () => {
        ++currYear.value
        calendarYearChanger.innerHTML = currYear
    }   


//======================================================

//======================================================
// Creates the grid and days for the month

    

//======================================================