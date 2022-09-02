
import Calculator from './../src/js/calculator.js';

const RealDate = Date.now();
let currentDate;

beforeEach(() => {
  currentDate = new Date("2022-09-02T00:00:00.000Z");
  console.log(currentDate);
});

afterEach(() => {
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
    console.log(typeof(currentDate) + " " + currentDate + " " + Date.parse(currentDate));
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
    expect(earthYearsCalc.currentYear).toEqual(2022);
    expect(earthYearsCalc.currentMonth).toEqual(8); //month is always month-1
    expect(earthYearsCalc.currentDay).toEqual(1); //day is day-1
  });
});