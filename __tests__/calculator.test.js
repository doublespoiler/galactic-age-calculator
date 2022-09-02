
import Calculator from './../src/js/calculator.js';

let currentDate;

beforeEach(() => {
  currentDate = new Date("2022-09-02T00:00:00.000Z");
});

describe ('Calculator', () => {
  test('it should create a calculator object with the input birth date in Earth Years, Months and Days.', () =>{
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
    expect(earthYearsCalc.birthMonth).toEqual(4);
    expect(earthYearsCalc.birthDay).toEqual(21);
    expect(earthYearsCalc.birthYear).toEqual(1992);
  });

  test('it should store the current date in ms since Jan 1 1970', () => {
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
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
  })
});