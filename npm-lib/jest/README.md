# Jest

## Method

### spyOn

CAN DO:

- Track information about how a function has been called
- Replace the implementation of an existing function
- Track information about the arguments and return value of a function

Eg:

```javascript
const myFn = jest.fn();
const spy = jest.spyOn(myFn, 'toString');

console.log(spy.mock.calls.length); // 0
myFn();
console.log(spy.mock.calls.length); // 1
```