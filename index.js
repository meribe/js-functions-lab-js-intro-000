// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
function happyHolidaysTo(name){
  console.log( `Happy holidays, $(name)!`)
}
function happyCustomHolidayTo(holiday,name) {
  var holiday= "Independence Day"
  var name= "You"
  return `Happy $(holiday),  $(name)!`
}
function holidayCountdown(days,holiday) {
  var days="20"
  var holiday= "Mother's Day!"
  return `It's ${days} days until ${holiday}!`
}
