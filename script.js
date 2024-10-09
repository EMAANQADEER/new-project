// let display = document.getElementById('display');

// function addValue(value) {
// 	display.value += value;
// }

// function clearDisplay() {
// 	display.value = '';
// }

// function deleteChar() {
// 	display.value = display.value.slice(0, -1);
// }

// function calculate() {
// 	try {
// 		let result = eval(display.value);
// 		display.value = result;
// 	} catch (error) {
// 		display.value = 'Error';
// 	}
// }

// // Advanced calculations
// function sqrt() {
// 	let num = parseFloat(display.value);
// 	let result = Math.sqrt(num);
// 	display.value = result;
// }

// function pow() {
// 	let num1 = parseFloat(display.value.split('^')[0]);
// 	let num2 = parseFloat(display.value.split('^')[1]);
// 	let result = Math.pow(num1, num2);
// 	display.value = result;
// }

// function sin() {
// 	let num = parseFloat(display.value);
// 	let result = Math.sin(num * Math.PI / 180);
// 	display.value = result;
// }

// function cos() {
// 	let num = parseFloat(display.value);
// 	let result = Math.cos(num * Math.PI / 180);
// 	display.value = result;
// }

// function tan() {
// 	let num = parseFloat(display.value);
// 	let result = Math.tan(num * Math.PI / 180);
// 	display.value = result;
// }

// function log() {
// 	let num = parseFloat(display.value);
// 	let result = Math.log10(num);
// 	display.value = result;
// }

// function ln() {
// 	let num = parseFloat(display.value);
// 	let result = Math.log(num);
// 	display.value = result;
// }


// Append the operator or number to the display
function appendOperator(value) {
    const display = document.getElementById('display');
    if (value === 'pi') {
        display.value += Math.PI;
    } else if (value === 'e') {
        display.value += Math.E;
    } else if (value === '^') {
        display.value += '*';  // * is used for exponentiation in JS
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
      let expression = display.value;
  
      // Replace trigonometric functions and convert degrees to radians
      expression = expression.replace(/sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)');
      expression = expression.replace(/cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)');
      expression = expression.replace(/tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)');
  
      // Replace natural logarithm and common logarithm
      expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)'); // Logarithm base 10
      expression = expression.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');    // Natural logarithm
  
      // Replace square root
      expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
  
      // Replace factorial (we need a custom function for this)
      expression = expression.replace(/(\d+)!/g, function(match, number) {
        return factorial(parseInt(number));
      });
  
      // Evaluate the final expression
      let result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  // Factorial function
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
// Calculate the result
// function calculate() {
//     const display = document.getElementById('display');
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = 'Error';
//     }
// }