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


# Lesson 4 – React Props and Component Communication

Props allow parent components to pass data and behavior to child components.

Example:

```jsx
<SearchBar
    placeholder="Search resources..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
```

The `SearchBar` component receives these props:

```jsx
function SearchBar({ value, onChange, placeholder }) {
```

Props make components reusable because the same component can behave differently depending on the values passed by its parent.

# Lesson 5 – Filtering Lists

React can dynamically display data by filtering arrays.

Example:

```jsx
const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(search.toLowerCase()) ||
    resource.course.toLowerCase().includes(search.toLowerCase())
);
```

Instead of modifying the HTML directly, React re-renders the UI whenever the state changes.

This demonstrates React's declarative programming model.