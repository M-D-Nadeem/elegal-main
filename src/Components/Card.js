const Card = (props) => {
  return (
    <div
      className="bg-white border border-slate-300 w-72 lg:w-[279px] h-52 flex flex-col rounded-xl hover:cursor-pointer hover:bg-slate-100"
      onClick={() => (global.UserSearchService = props.name)}
    >
      <div className="img flex justify-center w-full h-1/2 items-end">
        <img
          src={props.src}
          alt=""
          width={props.scale}
          height={props.scale}
          className=""
        />
      </div>
      <div className="name text-lg font-bold flex justify-center w-full h-1/2 items-center text-center">
        {props.name}
      </div>
    </div>
  );
};

export default Card;
