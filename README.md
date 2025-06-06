# learningReact

Welcome to the **learningReact** repository! This project aims to help you start with the foundational concepts of React and guide you through building dynamic web applications. Whether you are a beginner or someone looking to refresh your React skills, this guide will walk you through the essential topics in a simple and beginner-friendly manner. All the learning was done with the help of mini projects included in this repo.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [React Basics](#react-basics)
    - [Components](#components)
    - [JSX](#jsx)
    - [States and useState](#states-and-usestate)
4. [Conditional Templates](#conditional-templates)
5. [Components and Props](#components-and-props)
6. [Styling React Applications](#styling-react-applications)
7. [User Input and Events](#user-input-and-events)
    - [useRef](#useref)
8. [useEffect](#useeffect)
9. [useCallback](#usecallback)
10. [React Router](#react-router)
    - [useNavigate](#usenavigate)
    - [Navigate](#navigate)
    - [useParams](#useparams)
    - [useSearchParams](#usesearchparams)
    - [useLocation](#uselocation)
    - [Nested Routes](#nested-routes)
11. [Custom Hooks](#custom-hooks)
12. [Organizing Project Structure](#organizing-project-structure)
13. [Mini Projects](#mini-projects)

## Introduction

React is a powerful JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. This repository covers the core concepts of React to help you build dynamic web applications from scratch. All the learning was reinforced through the development of mini projects included in this repository.

## Getting Started

To start with React, you need to have Node.js installed on your computer. Once you have Node.js, you can use the `create-react-app` tool to set up a new React project easily.

1. **Install Node.js**: Download and install Node.js from [here](https://nodejs.org/).

2. **Set Up a React Project**:
   ```bash
   npx create-react-app learningReact
   cd learningReact
   npm start
   ```

3. **Open Your Project**: Open the `learningReact` folder in your code editor.

## React Basics

### Components

Components are the building blocks of a React application. A component is a JavaScript function or class that optionally accepts inputs (props) and returns a React element that describes how a section of the UI should appear.

### JSX

JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using `createElement()` or `appendChild()`.

Example:
```jsx
const element = <h1>Hello, world!</h1>;
```

### States and useState

State is a built-in object that stores property values that belong to a component. When the state object changes, the component re-renders.

Example:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Conditional Templates

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or the conditional operator to create elements representing the current state.

Example:
```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
```

## Components and Props

Components can accept inputs called props. Props are used to pass data from one component to another.

Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Styling React Applications

You can style React applications using CSS, inline styles, or CSS-in-JS libraries.

Example (CSS):
```css
/* App.css */
.container {
  text-align: center;
}
```

Example (Inline Styles):
```jsx
const divStyle = {
  color: 'blue',
  textAlign: 'center'
};

function App() {
  return <div style={divStyle}>Hello, World!</div>;
}
```

## User Input and Events

Handling events in React is very similar to handling events on DOM elements. 

Example:
```jsx
function Form() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
```

### useRef

The `useRef` Hook allows you to persist values between renders and directly access DOM elements.

Example:
```jsx
import React, { useRef } from 'react';

function TextInput() {
  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
```

## useEffect

The `useEffect` Hook allows you to perform side effects in function components. 

Example:
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <div>Count: {count}</div>;
}
```

## useCallback

The `useCallback` Hook returns a memoized callback.

Example:
```jsx
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
```

## React Router

React Router is a library for routing in React applications. It allows you to define routes and navigation in your app.

### useNavigate

The `useNavigate` hook returns a function that lets you navigate programmatically.

Example:
```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/about')}>
      Go to About Page
    </button>
  );
}
```

### Navigate

The `Navigate` component allows you to redirect users to another route.

Example:
```jsx
import { Navigate } from 'react-router-dom';

function Login({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return <div>Please log in</div>;
}
```

### useParams

The `useParams` hook returns an object of key-value pairs of URL parameters.

Example:
```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return <div>Product ID: {id}</div>;
}
```

### useSearchParams

The `useSearchParams` hook returns the current URL's query parameters.

Example:
```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <input
        value={searchParams.get('query') || ''}
        onChange={e => setSearchParams({ query: e.target.value })}
      />
      <p>Search Query: {searchParams.get('query')}</p>
    </div>
  );
}
```

### useLocation

The `useLocation` hook returns the current location object.

Example:
```jsx
import { useLocation } from 'react-router-dom';

function CurrentLocation() {
  const location = useLocation();

  return <div>Current URL: {location.pathname}</div>;
}
```

### Nested Routes

Nested routes allow you to define routes inside other routes.

Example:
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
```

## Custom Hooks

Custom Hooks allow you to extract component logic into reusable functions.

Example:
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData

(data));
  }, [url]);

  return data;
}
```

## Organizing Project Structure

Organizing your project structure helps in maintaining the codebase, making it scalable and easier to manage. Here’s a suggested structure:

```plaintext
src/
|-- components/
|   |-- common/
|   |   |-- Button.js
|   |   |-- Input.js
|   |-- pages/
|   |   |-- Home.js
|   |   |-- About.js
|   |   |-- Contact.js
|   |-- App.js
|-- hooks/
|   |-- useFetch.js
|-- styles/
|   |-- App.css
|-- index.js
```

### Grouping Pages and Components

- **components/**: Contains reusable components.
  - **common/**: Contains common UI elements like buttons and inputs.
  - **pages/**: Contains page components that represent different routes.
- **hooks/**: Contains custom hooks.
- **styles/**: Contains CSS files for styling components.

## Mini Projects

All the concepts above are reinforced through the following mini projects included in this repo:

1. **Counter App**: A simple app demonstrating state and event handling.
2. **InputForm**: A project to handle user inputs, validate them, and manage form state.
3. **ShopMate**: An e-commerce project showcasing component composition, state management, conditional rendering, and styling.
4. **TaskMate**: A task management application demonstrating CRUD operations, state management, and use of custom hooks.
5. **RouteMate**: A routing project demonstrating the use of React Router, nested routes, and handling URL parameters.


