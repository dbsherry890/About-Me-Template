const Hero = () => {
  return (
    <section className="flex shrink items-center justify-center p-2 text-white h-auto">
      {/* Left Text Section */}
      <div className="p-5 w-full md:w-1/2 text-center md:text-left lg:max-w-lg bg-orange-300">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4">
          My name is Bisc{" "}
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto md:mx-0">
          This is my amazing website.
        </p>
      </div>

      <div className="hidden md:block md:w-1/2 lg:max-w-lg">
        <img
          src={"static/images/sideeye.jpeg"}
          alt="Corgi sideeye image"
          className="w-full h-auto object-scale-down rounded-lg shadow-xl max-h-[300px]"
        />
      </div>
    </section>
  );
};

export default Hero;
