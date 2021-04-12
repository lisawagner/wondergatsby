import React from "react";
import { Link } from "gatsby";
import "./layout.css";
const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <h3>MySweetSite</h3>
        </Link>
      </header>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      {children}
    </div>
  );
}
