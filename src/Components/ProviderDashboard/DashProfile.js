const DashProfile = (props) => {
  return (
    <div className="bg-white md:rounded-t-none rounded-lg h-40 flex">
      <div className=" basis-2/5 flex justify-center items-center">
        <img
          className="rounded-full shadow-lg shadow-slate-300 h-24  w-24"
          src="https://www.svgrepo.com/show/453446/account.svg"
          alt="profile"
          height="100%"
          width="100%"
        />
      </div>
      <div className=" basis-3/5 flex flex-col justify-center">
        <div className=" text-lg font-semibold my-0.5">{props.name}</div>
        <div className=" text-sm font-semibold my-0.5 text-gray-700">
          {props.num}
        </div>
        <div className=" text-sm my-0.5 text-gray-700">{props.email}</div>
      </div>
    </div>
  );
};
export default DashProfile;
