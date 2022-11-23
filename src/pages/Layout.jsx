import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "./Layout.module.css";

export default function Layout() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
