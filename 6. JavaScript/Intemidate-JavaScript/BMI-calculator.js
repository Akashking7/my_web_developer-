function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else {
    return "Overweight";
  }
}