
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('132.15');
});

it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 6,
    rate: 7};
  expect(calculateMonthlyPayment(values)).toEqual('852.45');
});

it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 750000,
    years: 10,
    rate: 15};
  expect(calculateMonthlyPayment(values)).toEqual('12100.12');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 8,
    rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('1304.43');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});
