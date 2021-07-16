// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <a className="navbarbrand" href="/">
          <img src="../images/ironhack-logo.svg" alt="logo" width="30" height="24" />
        </a>
        <img src="../images/menu-top.svg" alt="menu-top" />
      </nav>

      <header>
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>
      <section>
        <ul>
          <li>
            <img src="../images/icon1.png" alt="declarative" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
          <li>
            <img src="../images/icon2.png" alt="components" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </li>
          <li>
            <img src="../images/icon3.png" alt="singleWay" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </li>
          <li>
            <img src="../images/icon4.png" alt="jsx" />
            <h3>JSX</h3>
            <p>Statically-typed, deisgned to run on modern browsers.</p>
          </li>

        </ul>
      </section>
    </div>
  );
}

export default App;
