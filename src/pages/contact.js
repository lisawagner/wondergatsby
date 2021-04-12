import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Contact() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="Contact" />
        <p>Send me a message!</p>
      </div>
    </Layout>
  );
}
