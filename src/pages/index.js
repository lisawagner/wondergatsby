import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Header headerText="I’m in a layout component!"/>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  );
}