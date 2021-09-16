# Study React Testing Library

1. A testing file is usually named `<Component>.test.js`. E.g. `App.test.js`

test function:

```javascript
test('what you what to name', () => {});
or
it('what you what to name', () => {});
```

## APIs

`render`: render an Component into virtual DOM
`screen`: 

```javascript
screen.getByText(/XXXXX/i);
```

## Tips

1. 大多數時候都用 `get` 而非 `find` 或者 `query`

![Get vs. Find vs. Query](./images/GetFindQuery)

## References

1. https://testing-library.com/docs/react-testing-library/intro/
2. [Laith Harb; React Testing Library Tutorial (2021)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)
