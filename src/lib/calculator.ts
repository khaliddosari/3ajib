export interface CalculatorInput {
  destinationType: string;
  annualVisitors: number;
  currentDwell: number;
  currentRevenue: number;
  budget: number;
}

export interface CalculatorResults {
  newDwell: number;
  dwellIncrease: number;
  newRevenue: number;
  revenueIncrease: number;
  socialIncrease: number;
  additionalRevenue: number;
  investment: number;
  netProfit: number;
  roi: number;
  paybackMonths: number;
}

export function calculateROI(input: CalculatorInput): CalculatorResults {
  const additionalRevenue = Math.round((input.annualVisitors * input.currentRevenue * 0.33) / 1000) * 1000;
  const netProfit = Math.round((input.annualVisitors * input.currentRevenue * 0.33) - input.budget);
  const roi = Math.round(((input.annualVisitors * input.currentRevenue * 0.33) / input.budget - 1) * 100);
  const paybackMonths = Math.round((input.budget / ((input.annualVisitors * input.currentRevenue * 0.33) / 12)) * 10) / 10;

  return {
    newDwell: Math.round(input.currentDwell * 1.53),
    dwellIncrease: 53,
    newRevenue: Math.round(input.currentRevenue * 1.33),
    revenueIncrease: 33,
    socialIncrease: 550,
    additionalRevenue,
    investment: input.budget,
    netProfit,
    roi,
    paybackMonths,
  };
}