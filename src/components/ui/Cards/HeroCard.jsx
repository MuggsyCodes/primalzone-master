import React from "react";

const HeroCard = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] sm:left-[10%] 2xl:lef-[15%] bg-neutral-900/90 h-96 w-11/12 sm:w-96 p-6 rounded-lg flex flex-col gap-3 items-center justify-between">
      <h1 className="text-4xl text-white text-center font-semibold">
        Men's Hormone
        <br />& Holistic Health
      </h1>
      <p className="text-center text-2xl font-thin text-white/80">
        We’ll provide you a personalised hormone and holistic health plan to get
        you back in your prime.
      </p>
      <input
        className="input input-bordered w-full bg-black/40"
        type="email"
        placeholder="you@gmail.com"
      />
      <button className="btn btn-primary w-full gradient-btn -mt-2">
        SIGN UP
      </button>
    </div>
  );
};

export default HeroCard;
