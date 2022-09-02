import { TestScheduler } from 'jest';
import Calculator from './../src/js/calculator.js';

const RealDate = Date.now();
let currentDate;

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2022-09-02T10:20:30Z').getTime());
  currentDate = Date.now();
});

afterAll(() => {
  global.Date.now = RealDate;
});

describe ('Calculator', () => {
  test('it should create a calculator object with the input birth date in Earth Years, Months and Days.', () =>{
    const earthYearsCalc = new Calculator("4", "21", "1992");
    expect(earthYearsCalc.birthMonth).toEqual(4);
    expect(earthYearsCalc.birthDay).toEqual(21);
    expect(earthYearsCalc.birthYear).toEqual(1992);
  });

  test('it should store the current date in ms since Jan 1 1970', () => {
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
    expect(earthYearsCalc.currentDate).toEqual(1662114030000);
  });

  test('it should store the current year, month and date for currentDate',() => {
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
    expect(earthYearsCalc.currentYear).toEqual(20220);
    expect(earthYearsCalc.currentMonth).toEqual(9);
    expect(earthYearsCalc.currentDay).toEqual(2);
  });
});