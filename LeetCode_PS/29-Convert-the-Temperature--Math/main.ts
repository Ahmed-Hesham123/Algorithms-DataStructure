function convertTemperature(celsius: number): number[] {
  let ans: any = [];
  let kelvin: number = (celsius + 273.15);
  let fahrenheit: number = (celsius * 1.8 + 32.0);
  ans.push(kelvin.toFixed(5), fahrenheit.toFixed(5));
  return ans;
}

console.log(convertTemperature(36.5));

// Big-O = O(1) - Constant
