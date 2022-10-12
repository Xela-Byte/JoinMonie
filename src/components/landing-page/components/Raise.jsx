const Raise = () => {
  return (
    <>
      <div className="bg-[#000] px-8 pb-10 pt-10 font-Poppins_regular space-y-4 text-white bg-contain bg-no-repeat w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center md:w-[698px] font-Poppins_semibold">
          Raise funds for causes easy
        </h1>
        <p className="text-sm text-neutral-200 md:w-[600px] text-center">
          The night is dark and full of terrors. What is dead may never die. And
          now his watch is ended. All men must die.
        </p>
        <button className="px-3 py-3 bg-primary-100 rounded-xl text-white">
          <a href="/get-started">Get Started</a>
        </button>
      </div>
    </>
  );
};

export default Raise;
