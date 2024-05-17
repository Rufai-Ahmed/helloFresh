import Header from "@/app/static/Header";
import React from "react";
import Hero from "./pages/Hero";
import Why from "./pages/Why";
import Choice from "./pages/Choice";
import What from "./pages/What";
import Testimony from "./pages/Testimony";
import Banner from "./pages/Banner";
import Questions from "./pages/Questions";
import Footer from "./static/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Why />
      <Choice />
      <What />
      <Testimony />
      <Banner />
      <Questions />
      <Footer />
    </div>
  );
};

export default page;
