Repository to reproduce error: https://stackoverflow.com/questions/58265539/angular-ivy-type-check-type-safehtml-is-not-assignable-to-type-string

```
git clone https://github.com/felikf/angular-repro-safe-html.git 
npm i
npm run build
```

Error:

```
ERROR in src/app/app.component.html(1,6): Type 'SafeHtml' is not assignable to type 'string'.
src/app/test-module/test-component/test-component.component.html(1,6): Type 'SafeHtml' is not assignable to type 'string'.
```
