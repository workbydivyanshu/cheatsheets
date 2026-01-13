---
title: React
description: Learn React - A JavaScript library for building user interfaces with components
category: Frontend
---

# React Cheatsheet

**React** is a JavaScript library for building user interfaces with reusable components. It uses a virtual DOM for efficient rendering and manages state to create interactive web applications.

---

## Getting Started

### What is React?
React makes building UIs easier by breaking them into reusable **components**. Each component manages its own data (**state**) and can re-render when that data changes.

### Installation

```bash
# Create a new React app with Vite (fastest)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

# Or use Create React App (slower but simpler)
npx create-react-app my-app
cd my-app
npm start
```

### Your First Component

```jsx
// App.jsx
export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to React</p>
    </div>
  );
}
```

### JSX Syntax
JSX is **JavaScript that looks like HTML**. It's compiled to regular JavaScript function calls.

```jsx
// JSX
<h1 className="title">Hello</h1>

// Compiles to:
React.createElement('h1', { className: 'title' }, 'Hello')
```

---

## Components

### Function Components (Recommended)

```jsx
// Simple component
function Welcome() {
  return <h1>Welcome</h1>;
}

// With props
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Using it
<Greeting name="Alice" age={25} />

// Default props
Greeting.defaultProps = {
  name: "Guest",
  age: 0
};
```

### Props (Passing Data to Components)

```jsx
function User({ name, email, isAdmin = false }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {isAdmin && <p>Admin User</p>}
    </div>
  );
}

// Passing props
<User name="John" email="john@example.com" isAdmin={true} />

// Props are read-only - don't modify them!
// ❌ props.name = "Bob";  // Wrong!
// ✅ Use state instead
```

### Destructuring Props

```jsx
// Without destructuring
function Card(props) {
  return <h1>{props.title}</h1>;
}

// With destructuring (cleaner)
function Card({ title, description, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
}

// Rest props (catch remaining)
function Button({ type = "button", ...rest }) {
  return <button type={type} {...rest} />;
}
```

---

## Hooks (🟢 Beginner)

### useState - Manage Component State

```jsx
import { useState } from 'react';

function Counter() {
  // State: count, Function to update: setCount
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**How it works:**
1. `useState(0)` - initializes count to 0
2. `setCount` - updates state and re-renders
3. Component re-renders when state changes

### Multiple State Variables

```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // API call...
    
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### useEffect - Side Effects & Lifecycle

```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs after component renders
  useEffect(() => {
    setLoading(true);
    
    // Fetch user data
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Dependency: re-run when userId changes

  if (loading) return <p>Loading...</p>;
  return <div><h1>{user.name}</h1></div>;
}
```

**useEffect Patterns:**

```jsx
// Runs after every render (AVOID - infinite loops!)
useEffect(() => {
  // This runs every time
});

// Runs only on mount (empty dependency array)
useEffect(() => {
  // Run once when component mounts
}, []);

// Runs when dependencies change
useEffect(() => {
  // Run when 'count' changes
}, [count]);

// Cleanup function (unmount or before re-run)
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(timer);  // Cleanup
}, []);
```

### useContext - Global State

```jsx
import { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component (wrap your app)
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useContext('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Use context in any component
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </header>
  );
}
```

### useReducer - Complex State (🟡 Intermediate)

```jsx
import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

---

## Event Handling

```jsx
function EventDemo() {
  // Click event
  const handleClick = () => {
    alert('Clicked!');
  };

  // Input event
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    console.log('Form submitted');
  };

  // Keyboard events
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter pressed');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} placeholder="Type..." />
      <input onKeyPress={handleKeyPress} placeholder="Press Enter" />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

---

## Conditional Rendering

```jsx
function Dashboard({ user, isLoading }) {
  // If statement
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Please log in</p>;
  }

  // Ternary operator
  return (
    <div>
      {user.isAdmin ? <AdminPanel /> : <UserPanel />}
    </div>
  );
}

// Logical AND (render if true)
function Notification() {
  const [message, setMessage] = React.useState('');
  
  return (
    <>
      {message && <div className="notification">{message}</div>}
    </>
  );
}

// Switch with components
function Page({ section }) {
  switch (section) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    default:
      return <NotFound />;
  }
}
```

---

## Lists & Keys

```jsx
function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy' }
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Filtering
function CompletedTodos({ todos }) {
  return (
    <ul>
      {todos
        .filter(todo => todo.completed)
        .map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
  );
}
```

**Why keys matter:**
- React uses keys to identify which items have changed
- Use unique IDs (never array index as key!)

---

## Forms

```jsx
function LoginForm() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        Remember me
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Component Composition

### Parent-Child Communication

```jsx
// Parent
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Counter count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

// Child
function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
```

### Render Props

```jsx
function DataFetcher({ url, children }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// Usage
<DataFetcher url="/api/users">
  {({ data, loading }) => (
    loading ? <p>Loading...</p> : <UserList users={data} />
  )}
</DataFetcher>
```

---

## Performance Optimization

### useMemo - Memoize Values

```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  // Only recalculate when 'items' changes
  const sorted = useMemo(() => {
    return [...items].sort();
  }, [items]);

  return <ul>{sorted.map(item => <li key={item}>{item}</li>)}</ul>;
}
```

### useCallback - Memoize Functions

```jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = React.useState(0);

  // Function only recreates when 'count' changes
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <Child onClick={handleClick} />;
}
```

### React.memo - Memoize Components

```jsx
// Prevents re-render if props haven't changed
const UserCard = React.memo(function UserCard({ user }) {
  console.log('Rendering:', user.name);
  return <div>{user.name}</div>;
});

// Only re-renders if 'user' object changed
```

---

## Best Practices

1. **One responsibility per component** - Keep components focused and small
2. **Lift state up** - Share state in parent components
3. **Use meaningful names** - `isLoading`, `handleSubmit`, not `x`, `f`
4. **Keys in lists** - Always use stable, unique keys
5. **Avoid prop drilling** - Use Context for deeply nested components
6. **Handle loading and error states** - Show users what's happening
7. **Clean up in useEffect** - Return cleanup function for timers, subscriptions
8. **Don't mutate state** - Always create new objects/arrays

---

## Summary

React makes building UIs predictable and maintainable by:
- Breaking UIs into reusable **components**
- Managing data with **hooks** (useState, useEffect, etc.)
- Re-rendering efficiently using **virtual DOM**
- Handling events and forms easily
- Optimizing performance with memoization

Start small, build components, and combine them to create complex UIs!
