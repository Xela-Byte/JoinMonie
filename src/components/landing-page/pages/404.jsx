const Four04 = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="bg-[url('/images/404.svg')] bg-center bg-contain bg-no-repeat w-full flex flex-col justify-center items-center h-[80vh]"></div>
      <button className="px-3 py-3 bg-primary-100 rounded-xl text-white">
        <a href="/">Go Home</a>
      </button>
    </div>
  );
};

export default Four04;
