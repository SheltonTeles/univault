# React Learning Notes

---

# Lesson 1 - React + Vite Basics

React is a JavaScript library used to build interactive user interfaces.

Vite is the build tool used to create and run the React development environment.

Important concepts learned:

- Components
- JSX
- Props
- Project structure
- Development server with Vite

React applications are built by combining reusable components instead of writing one large HTML file.

---

# Lesson 2 - React Router

React uses `<Link>` and `<NavLink>` instead of traditional `<a>` tags for navigation.

`<a>` reloads the entire page by making a new request to the server.

`<Link>` changes the displayed component without reloading the browser.

This creates a smoother user experience.

This approach is known as a Single Page Application (SPA).

## React Router Concepts Learned

### BrowserRouter

`BrowserRouter` enables client-side routing.

Example:

```jsx
<BrowserRouter>
   <App />
</BrowserRouter>