import React from "react";
import Header from "./components/Header";
import TextExtractor from "./components/TextExtractor";
import RelatedTools from "./components/RelatedTools";
import PeopleAlsoAsk from "./components/PeopleAlsoAsk";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="modern-app">
      <Header />
      <main className="main-content">
        <TextExtractor />
        <RelatedTools />
        <PeopleAlsoAsk />
      </main>
      <Footer />
    </div>
  );
}

export default App;