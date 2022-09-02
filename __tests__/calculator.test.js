import { TestScheduler } from 'jest';
import Calculator from './../src/js/calculator.js';

const RealDate = Date.now();

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2022-09-02T10:20:30Z').getTime())
})

afterAll(() => {
  global.Date.now = RealDate;
})

describe ('Calculator', () => {
  test('it should create a calculator object with the input birth date in Earth Years, Months and Days.', () =>{
    const earthYearsCalc = new Calculator("4", "21", "1992");
    expect(earthYearsCalc.birthMonth).toEqual(4);
    expect(earthYearsCalc.birthDay).toEqual(21);
    expect(earthYearsCalc.birthYear).toEqual(1992);
  });

  test('it should store the current date in ms since Jan 1 1970', () => {
    const currentDate = Date.now();
    const earthYearsCalc = new Calculator("4", "21", "1992", currentDate);
    expect(earthYearsCalc.currentDate).toEqual(1662114030000);
  });
});