# Dev Stack Builder

Dev Stack Builder is a responsive React website that helps developers explore modern technologies and build a personalized development stack for their next project.

## Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* React-Toastify
* JSON
* Vite

## Features

1. **Explore Technologies**
   Browse frontend, backend, database, styling, DevOps, language, and tool technologies with their descriptions, ratings, difficulty levels, and badges.

2. **Build Your Stack**
   Add technologies to your personal stack, remove individual technologies, or remove the entire stack at once.

3. **Responsive Design**
   The website works across desktop, tablet, and mobile screens with responsive navigation and layouts.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes building and understanding UI components easier.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates and manages changing data inside a React component. In this project, it is used in `App.jsx` to store the selected technologies and the loaded technology data.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. It is used in this project to fetch the local JSON technology data when the application loads and to manage the loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React update only the items that changed and keeps list rendering efficient.

### ### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. In this project, I used it in the `YourStack` component to show **“Your stack is empty.”** when no technology is selected, and to show the selected technologies when the stack contains items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send information back by calling a function that the parent passes to it as a prop. In this project, `App.jsx` passes `stack` and `setStack` to `TechList` and `YourStack`.
## Live Site

https://assignment05-programming-hero.vercel.app/