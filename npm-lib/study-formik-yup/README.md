# Study formik and Yup

- https://formik.org/
- https://www.npmjs.com/package/yup

## Formik

## Yup

Create a validation schema object. Schema objects are **immutable**, so each call of a method returns a new schema object.

### Cheat Sheet

```javascript
yup.string()
  .required("Please enter the required field")
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
```

## References

1. [The Net Ninja; React Native Tutorial #30 - Formik Forms (part 1) (2020.1)](https://youtu.be/t4Q1s8WntlA)
2. [The Net Ninja; React Native Tutorial #31 - Formik Forms (part 2)](https://youtu.be/urzVC5Zr-JM)
3. [The Net Ninja; React Native Tutorial #32 - Validation with Yup (2020.1)](https://youtu.be/ftLy78R8xrg)
4. [[yup] How to conditionally validate at least one of n values are set?](https://github.com/jquense/yup/issues/176)
