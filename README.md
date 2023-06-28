# reproduction of failing jest run with @aws-amplify/ui-react-native

I want to have `expo` + `jest` + `ts` + `@testing-library/react-native` + `@aws-amplify/ui-react-native` to work together.
This repository show cases that it does not work.

Everything works, until we start using `Authenticator`.

## Successful simple run
```
npx jest src/__tests__/render-works.test.tsx
```

## Failing run with `Authenticator`
```
npx jest src/__tests__/render-fails.test.tsx
```

On the first run it fails with:
```
    /Users/pavlo.poliakov/Projects/xxx/bare-minimum-test/node_modules/@aws-amplify/ui-react-native/dist/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export { Authenticator, useAuthenticator, withAuthenticator, } from './Authenticator';
                                                                                      ^^^^^^
```

This alone can be "fixed" by adjusting `jest.config.js` (so it does not transpile `@aws-amplify/ui-react-native`).
However, on the next run there will be another error, which can not be fixed by `jest.config.js` adjustments.

```
   Details:

    /Users/pavlo.poliakov/Projects/xxx/bare-minimum-test/node_modules/@react-native/polyfills/error-guard.js:14
    type ErrorHandler = (error: mixed, isFatal: boolean) => void;
         ^^^^^^^^^^^^

    SyntaxError: Unexpected identifier
```    
