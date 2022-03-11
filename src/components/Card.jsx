const Card = ({ title }) => {
  return (
    <div className="w-[300px] h-[200px] bg-indigo-100 grid place-items-center rounded-md text-indigo-700 hover:shadow-lg transition ease-in-out duration-500 cursor-pointer hover:-translate-y-3 hover:bg-indigo-400 hover:text-indigo-50">
      <h1 className="text-xl font-semibold  uppercase tracking-wider">
        {title}
      </h1>
    </div>
  );
};

export default Card;
