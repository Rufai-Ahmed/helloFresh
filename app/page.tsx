import Header from "@/app/static/Header";
import React from "react";
import Hero from "./_pages/Hero";
import Why from "./_pages/Why";
import Choice from "./_pages/Choice";
import What from "./_pages/What";
import Testimony from "./_pages/Testimony";
import Banner from "./_pages/Banner";
import Questions from "./_pages/Questions";
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
