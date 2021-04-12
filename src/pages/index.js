import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Header headerText="I’m in a layout component!" />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  );
}
