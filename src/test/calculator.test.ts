import { describe, it, expect } from 'vitest';
import { calculateROI, type CalculatorInput } from '../lib/calculator';

const defaultInput: CalculatorInput = {
  destinationType: 'museum',
  annualVisitors: 100000,
  currentDwell: 45,
  currentRevenue: 78,
  budget: 500000,
};

describe('calculateROI', () => {
  it('calculates dwell time increase at 53%', () => {
    const results = calculateROI(defaultInput);
    expect(results.newDwell).toBe(Math.round(45 * 1.53));
    expect(results.dwellIncrease).toBe(53);
  });

  it('calculates revenue increase at 33%', () => {
    const results = calculateROI(defaultInput);
    expect(results.newRevenue).toBe(Math.round(78 * 1.33));
    expect(results.revenueIncrease).toBe(33);
  });

  it('calculates additional revenue correctly', () => {
    const results = calculateROI(defaultInput);
    // 100000 * 78 * 0.33 = 2,574,000 → rounded to nearest 1000 = 2,574,000
    expect(results.additionalRevenue).toBe(Math.round((100000 * 78 * 0.33) / 1000) * 1000);
  });

  it('calculates net profit as additional revenue minus budget', () => {
    const results = calculateROI(defaultInput);
    const expectedNetProfit = Math.round((100000 * 78 * 0.33) - 500000);
    expect(results.netProfit).toBe(expectedNetProfit);
  });

  it('calculates ROI percentage correctly', () => {
    const results = calculateROI(defaultInput);
    const expectedROI = Math.round(((100000 * 78 * 0.33) / 500000 - 1) * 100);
    expect(results.roi).toBe(expectedROI);
  });

  it('calculates payback period in months', () => {
    const results = calculateROI(defaultInput);
    const monthlyRevenue = (100000 * 78 * 0.33) / 12;
    const expectedPayback = Math.round((500000 / monthlyRevenue) * 10) / 10;
    expect(results.paybackMonths).toBe(expectedPayback);
  });

  it('returns investment equal to budget', () => {
    const results = calculateROI(defaultInput);
    expect(results.investment).toBe(500000);
  });

  it('scales with visitor count', () => {
    const smallVenue = calculateROI({ ...defaultInput, annualVisitors: 10000 });
    const largeVenue = calculateROI({ ...defaultInput, annualVisitors: 1000000 });
    expect(largeVenue.additionalRevenue).toBeGreaterThan(smallVenue.additionalRevenue);
    expect(largeVenue.roi).toBeGreaterThan(smallVenue.roi);
  });

  it('higher budget increases payback period', () => {
    const lowBudget = calculateROI({ ...defaultInput, budget: 100000 });
    const highBudget = calculateROI({ ...defaultInput, budget: 5000000 });
    expect(highBudget.paybackMonths).toBeGreaterThan(lowBudget.paybackMonths);
  });
});