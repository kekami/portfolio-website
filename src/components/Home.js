import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = (props) => {
  const { pathname } = props.location;

  return (
    <div className="home">
      <nav className="nav nav--header" style={pathname === '/' ? { opacity: 0 } : {} }>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <section className="main">
        <div>
          <p className="hello-world"> Hello, World!</p>
          <h1>Kevin Kamimura</h1>
          <h3>Web Developer</h3>
        </div>

        <nav className="nav">
          <Link className="nav__items" to="/about">
            <i className="fa fa-user" aria-hidden="true" /><br />
            <h3>About</h3>
          </Link>
          <Link className="nav__items" to="/portfolio">
            <i className="fa fa-briefcase" aria-hidden="true" /><br />
            <h3>Portfolio</h3>
          </Link>
          <Link className="nav__items" to="/contact">
            <i className="fa fa-envelope" aria-hidden="true" /><br />
            <h3>Contact</h3>
          </Link>
        </nav>
      </section>
    </div>
  )
}

export default Home;