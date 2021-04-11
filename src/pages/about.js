import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import * as styles from "./about.module.css";
import { Link } from "gatsby";

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default function About() {
  console.log(styles);
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Header headerText="-about page header-" />
      <Header headerText="another header" />
      <Container>
        <h1>This is a CSS Module called Container</h1>
        <p>It was added to the About page as a Component</p>
        <User
          username="Maria Randall"
          avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
          excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Daniela Dewitt"
          avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
          excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
      <p>Such wow. Very React.</p>
    </div>
  );
}
