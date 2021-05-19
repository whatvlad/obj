let number = document.getElementById("number")
let name = document.getElementById("name")
let date = document.getElementById("date")
let year = document.getElementById("year")
let card_number = document.getElementById("card_number")
let card_name = document.getElementById("card_name")
let card_month = document.getElementById("card_month")
let card_year = document.getElementById("card_year")
let type = document.getElementById("type")

number.addEventListener("keyup", setNumber)
name.addEventListener("keyup", setName)
date.addEventListener("mouseup", setDate)
year.addEventListener("mouseup", setYear)

function isNum(num){
	return !/[^.[0-9, " "]]*/.test(num)
}


function discover(dia){
	if(dia.includes("54321")){
		type.innerHTML = "MasterCard"
	} else if(dia.includes("09876")){
		type.innerHTML = "VISA"
	} else{
		type.innerHTML = "UNKNOWN"
	}
}

function setNumber(x){
	x.preventDefault
	if(isNum(number.value)){
		card_number.innerHTML = number.value
	} else{
		alert("ERROR")
	}
	discover(number.value)
}

function setName(x){
	x.preventDefault
	card_name.innerHTML = name.value
}

function setDate(x){
	x.preventDefault
	card_month.innerHTML = date.options[date.selectedIndex].value
}

function setYear(x){
	x.preventDefault
	card_year.innerHTML = year.options[year.selectedIndex].text
}