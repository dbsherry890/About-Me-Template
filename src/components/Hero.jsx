import React from "react";

const Hero = () => {
  return (
    <section className="flex shrink items-center justify-center p-2 text-white h-auto">
      {/* Left Text Section */}
      <div className="p-5 w-full md:w-1/2 text-center md:text-left lg:max-w-lg bg-orange-300">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4">
          Mandy is the best neighbor ever
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto md:mx-0">
          We out here making Mandy a website. We out here making Mandy a
          website.
        </p>
        {/* a
          href="#services"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-50 transition"
        >
          Get Started
        </a> */}
      </div>

      {/* Right Image Section */}
      <div className="hidden md:block md:w-1/2 lg:max-w-lg">
        <img
          src={"static/images/blonde-hair.jpeg"}
          alt="Haircut image"
          className="w-full h-auto object-cover rounded-lg shadow-xl max-h-[300px]"
        />
      </div>
    </section>
  );
};

export default Hero;
