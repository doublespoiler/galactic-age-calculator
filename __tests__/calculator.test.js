
import Calculator from './../src/js/calculator.js';

let currentDate;
let earthYearsCalc;

beforeEach(() => {
  currentDate = new Date("2022-09-02T00:00:00.000Z");
  earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
  
});

describe ('Calculator', () => {
  test('it should create a calculator object with the input birth date in Earth Years, Months and Days.', () =>{

    expect(earthYearsCalc.birthMonth).toEqual(4);
    expect(earthYearsCalc.birthDay).toEqual(21);
    expect(earthYearsCalc.birthYear).toEqual(1992);
  });

  test('it should store the current date in ms since Jan 1 1970', () => {

    expect(earthYearsCalc.currentDate).toEqual(currentDate);
  });

  test('it should store the current year, month and date for currentDate',() => {
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
    expect(earthYearsCalc.currentYear).toEqual(2022);
    expect(earthYearsCalc.currentMonth).toEqual(8); //month is always month-1
    expect(earthYearsCalc.currentDay).toEqual(1); //day is day-1
  });

  test('it should set the total days since birth', () =>  {
    const earthYearsCalc = new Calculator("4", "2", "1992", currentDate); 
    expect(earthYearsCalc.daysSinceBirth).toEqual(11069); //((2022 - 1992)*365) + ((8-4)*30) + ((1-2))
  });

  test('should set the year age of the user', () => {
    const earthYearsCalc = new Calculator("4", "2", "1992", currentDate);
    expect(earthYearsCalc.years).toEqual(30);
  }); 
  //it was at this point I realized 
  //I probably went too far calculating the user's age in days and years by hand like this.
  //I think I plan too far ahead, maybe.

  test('should return the age of the user on Mercury.', () => {
    const earthYearsCalc = new Calculator("4", "2", "1992", currentDate);
    expect(earthYearsCalc.mercuryYears()).toEqual(125);
  });

  test('should return the age of the user on Venus', () => {
    const earthYearsCalc = new Calculator("4", "2", "1992", currentDate);
    expect(earthYearsCalc.venusYears()).toEqual(48.39);
  });

  test('should return the age of the user on Mars', () => {
    const earthYearsCalc = new Calculator("4", "2", "1992", currentDate);
    expect(earthYearsCalc.marsYears()).toEqual(15.96);
  });

  test('should return the age of the user on Jupiter', () => {
    const earthYearsCalc = new Calculator("4", "2", "1992", currentDate);
    expect(earthYearsCalc.jupiterYears()).toEqual(2.53);
  });

});