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

  mercuryYears(){
    return this.years/0.24;
  }

  venusYears(){
    return parseFloat((this.years/0.62).toFixed(2));
  }

  marsYears(){
    return parseFloat((this.years/1.88).toFixed(2));
  }

  jupiterYears(){
    return parseFloat((this.years/11.86).toFixed(2));
  }


  //planet years is planet age * 
}