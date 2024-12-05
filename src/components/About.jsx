import React from "react";

const About = () => {
  return (
    <section className="grow" id="about">
      <div className="max-w-7xl mx-auto mb-6 lg:px-20 bg-orange-50 border rounded-[10px]">
        <h2 className="pt-4 text-3xl font-extrabold text-gray-900 text-center font-serif">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          I am the most awesome neighbor of Dan yuh
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-5">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              Factoid #1
            </h3>
            <p className="mt-4 text-gray-600 text-center">Yup I'm awesome</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              Factoid #2
            </h3>
            <p className="mt-4 text-gray-600 text-center">Yup I'm awesome</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              Factoid #3
            </h3>
            <p className="mt-4 text-gray-600 text-center">Yup I'm awesome</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
