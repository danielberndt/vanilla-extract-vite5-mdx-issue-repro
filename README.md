1. After `npm install` Run `npm run dev` to see error `__vite_ssr_import_2__.default is not a function`
2. Remove `plugins: [vanillaExtractPlugin()],` from `astro.config.mjs` and the error disappears
