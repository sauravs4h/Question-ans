In JavaScript, a "stub" typically refers to a simple, placeholder function or object that is used during testing and development. Stubs are used to mimic the behavior of real functions or objects, allowing you to isolate and test specific parts of your code without relying on the actual implementations. Stubs are especially common in unit testing and mocking.

Here are some common use cases for stubs in JavaScript:

1. **Function Stubs**:
   - You can create a stub function that replaces a real function during testing. This allows you to control what the stub function returns and check how other parts of your code interact with it.
   - For example, you might stub an HTTP request function to avoid making actual network requests during testing.

   ```javascript
   function fetchDataFromServer() {
     // Simulate a network request with a stub
     return Promise.resolve({ data: 'some test data' });
   }
   ```

2. **Object Stubs**:
   - Sometimes, you need to stub entire objects. You can create a stub object with methods that return predefined values or do nothing.
   - This is useful for testing interactions with complex objects or APIs.

   ```javascript
   const databaseStub = {
     getUserById: (id) => ({ id, name: 'John' }), // Stubbed method
   };
   ```

3. **Event Stubs**:
   - Event listeners can also be stubbed. You can create a stub function to stand in for an event handler during testing.

   ```javascript
   document.getElementById('myButton').addEventListener('click', function () {
     // Stubbed event handler
     console.log('Button clicked');
   });
   ```

4. **Testing Isolated Components**:
   - Stubs help you isolate the component or function you're testing from its dependencies. This allows you to focus on specific functionality without worrying about the behavior of external code.

Using stubs in your testing process can make your tests more predictable and help you identify issues in your code without relying on external dependencies or complex setups. They are a valuable tool for unit testing and maintaining code quality.