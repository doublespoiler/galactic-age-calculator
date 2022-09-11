export default class Calculator{
  constructor(birthMonth, birthDay, birthYear, currentDate){
    this.birthMonth = parseInt(birthMonth);
    this.birthDay = parseInt(birthDay);
    this.birthYear = parseInt(birthYear);
    this.currentDate = currentDate;
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    this.currentDay = currentDate.getDate();
  }

  planetCalc(){
    this.daysSinceBirth =     this.daysSinceBirth = ((this.currentYear - this.birthYear)*365) + (((this.currentMonth - this.birthMonth)*30)) + (this.currentDay - this.birthDay);
    this.years = parseInt((this.daysSinceBirth/365.00));
    this.venusYears = parseFloat((this.years/0.62).toFixed(2));
    this.marsYears = parseFloat((this.years/1.88).toFixed(2));
    this.mercuryYears = parseFloat((this.years/0.24).toFixed(2));
    this.jupiterYears = parseFloat((this.years/11.86).toFixed(2));
  }
}
