Project Name:
Dev Stack

Description:
A simple web app where users can explore technologies and build their own development stack.

Technologies Used by me:
React.js, 
TypeScript,
Tailwind CSS,
DaisyUI,
React-Toastify,
JSON and 
Vite

Features:
Explore different technologies with their details.
Add technologies to your personal stack.
Remove technologies or clear the entire stack.


Questions

1. What is JSX, and why is it used in React?

JSX is a way to write HTML-style elements in JavaScript. React uses it to create and display the user interface more easily.

2. What is the difference between props and state?

Props are values received from another component. State is information stored inside a component that can be changed.

3. What does the useState hook do, and where did you use it in this project?

useState helps a component remember information and change it when needed. I used it to handle the changing data in my project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform a task after a component renders. I used it to fetch the JSON data when the application loaded.

5. Why does every item in a .map() list need a unique key prop?

The key gives each list item a unique identity. This allows React to know which item has changed or been updated.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content depending on a condition. I used it to display a message when the stack was empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent sends information to the child through props. To send something back, the parent can pass a function that the child can call.







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
