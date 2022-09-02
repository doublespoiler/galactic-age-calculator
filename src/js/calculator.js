export default class Calculator{
  constructor(birthMonth, birthDay, birthYear, currentDate){
    this.birthMonth = parseInt(birthMonth);
    this.birthDay = parseInt(birthDay);
    this.birthYear = parseInt(birthYear);
    this.currentDate = parseInt(currentDate);
  }
}