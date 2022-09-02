import { TestScheduler } from 'jest';
import Calculator from './../src/js/calculator.js';

describe ('Calculator', () => {
  test('it should create a calculator object with the input in Earth years.', () =>{
    const earthYearsCalc = new Calculator("21");
    expect(earthYearsCalc.earthYears).toEqual(21);
  });
});