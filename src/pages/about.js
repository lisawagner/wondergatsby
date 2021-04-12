import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import * as styles from "./about.module.css";

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
  return (
    <Layout>
      <div style={{ color: `teal` }}>
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
    </Layout>
  );
}
