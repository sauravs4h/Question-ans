In JavaScript, functions are considered "first-class citizens" or "first-class objects." This means that functions in JavaScript have the following properties and abilities:

1. **Functions can be assigned to variables:** You can assign a function to a variable just like any other value. This allows you to store functions in variables and pass them around in your code.

   ```javascript
   const greet = function (name) {
     console.log(`Hello, ${name}!`);
   };
   ```

2. **Functions can be passed as arguments to other functions:** You can pass functions as arguments to other functions. This is a fundamental concept in functional programming and is commonly used in JavaScript for callbacks.

   ```javascript
   function runFunction(fn) {
     fn();
   }

   runFunction(greet); // Pass the greet function as an argument
   ```

3. **Functions can be returned from other functions:** Functions can also be returned as values from other functions. This is known as a higher-order function.

   ```javascript
   function createGreetingFunction(greeting) {
     return function (name) {
       console.log(`${greeting}, ${name}!`);
     };
   }

   const sayHello = createGreetingFunction('Hello');
   sayHello('Alice'); // Output: Hello, Alice!
   ```

4. **Functions can be stored in data structures:** You can store functions in arrays, objects, or other data structures just like any other data type.

   ```javascript
   const functionArray = [greet, sayHello];
   functionArray[0]('Bob'); // Call the first function in the array
   ```

5. **Functions can have properties and methods:** Since functions are objects, you can attach properties and methods to them.

   ```javascript
   function add(x, y) {
     return x + y;
   }

   add.description = 'This function adds two numbers';
   console.log(add.description); // Output: This function adds two numbers
   ```

In summary, when we say that functions are "first-class" in JavaScript, we mean that functions are treated as values that can be assigned to variables, passed as arguments, returned from other functions, and manipulated just like any other data type. This flexibility is a key feature of JavaScript and enables various programming paradigms, including functional programming and callback-driven asynchronous programming.