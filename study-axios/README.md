# Study axios

- [axios API](#axios-api)
- [Request Config](#request-config)
- [Interceptors](#interceptors)

## axios API

### Creating an instance

```javascript
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

## Request Config

```javascript
{
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },
}
```

## Interceptors

> Interceptor: A thing that stops or catches (someone or something) going from one place to another

## References

1. https://github.com/axios/axios
