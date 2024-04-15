import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex items-center justify-center flex-col">
      <nav className=" flex items-center justify-between mb-10 w-full pt-3">
        <img src={logo} alt="log" className="w-28  object-contain" />
        <button
          type="button"
          onClick={() => window.open("wahloche")}
          className=" black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className=" head_text">
        Summarise Articles with <br className=" max-md:hidden" />
        <span className=" orange_gradient">GPT-4 OpenAi</span>
      </h1>
      <h2 className="desc">
        Simplify Reading: GPT-4 Article Summarizer Delivers Concise Insights.
        Efficiency Unleashed: Streamline Information Consumption with GPT-4.
      </h2>
    </header>
  );
};

export default Hero;
