// Variáveis

//dia
const inputDay = document.getElementById("day")
const reqDay = document.querySelector(".field-required-day")
const valDay = document.querySelector(".valid-info-day")
const actualDay = new Date().getDate()
let timeDay
let timeDayInput
const daySpan = document.querySelector(".day")
//mês
const inputMonth = document.getElementById("month")
const reqMonth = document.querySelector(".field-required-month")
const valMonth = document.querySelector(".valid-info-month")
const actualMonth = new Date().getMonth()+1
let timeMonth
let timeMonthInput
const monthSpan = document.querySelector(".month")
//ano
const inputYear = document.getElementById("year")
const reqYear = document.querySelector(".field-required-year")
const valYear = document.querySelector(".valid-info-year")
const actualYear = new Date().getFullYear()
let timeYear
let timeYearInput
const yearSpan = document.querySelector(".year")
//outros
const btnSubmit = document.querySelector("button")
const form = document.querySelector("form")

// Funções

const show=(element)=>{
    element.style.display="block"
}
const hide=(element)=>{
    element.style.display="none"
}
const required=(input, req)=>{
    let correct = true
    if(input.value===""){
        show(req)
        correct = false
    }else{
        hide(req)
    }
    return correct
}
const validation=()=>{
    let correct = true
    if(parseInt(inputYear.value)>actualYear||parseInt(inputYear.value)<actualYear-115){
        correct = false
        show(valYear)
    }else if(parseInt(inputYear.value)===actualYear){
        if(parseInt(inputMonth.value)>actualMonth){
            correct = false
            show(valMonth)
        }else if(parseInt(inputMonth.value)===actualMonth){
            if(parseInt(inputDay.value)>actualDay){
                correct = false
                show(valDay)
            }
        }
    }
    return correct
}

// Comandos
form.addEventListener("submit",form=>{
    form.preventDefault()
})
btnSubmit.addEventListener("click",()=>{
    if(required(inputDay, reqDay)&&required(inputMonth, reqMonth)&&required(inputYear, reqYear)&&validation()){
        hide(valDay)
        hide(valMonth)
        hide(valYear)
        day = new Date().getDate()
        month = new Date().getMonth()+1
        year = new Date().getFullYear()
        timeYear=null
        timeMonth=null
        timeDay=null
        timeDayInput=inputDay.value
        timeMonthInput=inputMonth.value
        timeYearInput=inputYear.value
        timeYear = year-timeYearInput
        timeMonth = month-timeMonthInput
        timeDay = day-timeDayInput
        if(timeMonthInput>month){
            timeMonth = month-timeMonthInput+12
            timeYear-=1
        }else{
            timeMonth = month-timeMonthInput
        }
        if(timeDayInput>day){
            timeDay = day-timeDayInput+30
            timeMonth-=1
        }else{
            timeDay = day-timeDayInput
        }
        daySpan.textContent=timeDay.toString()
        monthSpan.textContent=timeMonth.toString()
        yearSpan.textContent=timeYear.toString()
    }
})
