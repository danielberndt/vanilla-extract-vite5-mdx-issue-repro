1. After `npm install` Run `npm run dev`. Then open http://localhost:4321/posts/hello-world to see this error:

```
ReferenceError: module is not defined
    at eval (XXX/node_modules/cssesc/cssesc.js:112:1)
    at instantiateModule (file://XXX/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:52972:11)
```

2. Remove `plugins: [vanillaExtractPlugin()],` from `astro.config.mjs` and the error disappears
