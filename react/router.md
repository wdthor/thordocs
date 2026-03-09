# React Router

```js:line-numbers
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function Home() {
  return <h1>Hello, React Router!</h1>;
}

function About() {
  return <h1>About page goes here! 🎉</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  const params = useParams();
  return <h1>Detail : {params.id}</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```
