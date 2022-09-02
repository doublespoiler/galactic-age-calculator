export default class Calculator{
  constructor(birthMonth, birthDay, birthYear, currentDate){
    this.birthMonth = parseInt(birthMonth);
    this.birthDay = parseInt(birthDay);
    this.birthYear = parseInt(birthYear);
    this.currentDate = currentDate;
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    this.currentDay = currentDate.getDate();
    this.daysSinceBirth = ((this.currentYear - this.birthYear)*365) + (((this.currentMonth - this.birthMonth)*30)) + (this.currentDay - this.birthDay); //age in days
    this.years = parseInt((this.daysSinceBirth/365.00));

  }

  venusYears(){
    return this.years/0.24;
  }

  //planet years is planet age * 
}