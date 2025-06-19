const about = () => {
  return (
    <section classname="grow" id="about">
      <div classname="max-w-7xl mx-auto mb-6 lg:px-20 bg-orange-50 border rounded-[10px]">
        <h2 className="pt-4 text-4xl text-white">About Me</h2>
        <p className="mt-3 text-2xl text-white text-center">
          Here are some facts about me.
        </p>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 m-5">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              Fact #1
            </h3>
            <p className="mt-4 text-gray-600 text-center">I bark, a lot</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              Fact #2
            </h3>
            <p className="mt-4 text-gray-600 text-center">I roll in dirt</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              Fact #3
            </h3>
            <p className="mt-4 text-gray-600 text-center">I am a soprano</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
