const ServiceProviderProfileCard = (props) => {
  return (
    <div className="w-80 lg:w-3/5 border lg:h-[500px] flex flex-col lg:flex-row border-slate-300 rounded-xl">
      <div className="img w-full lg:mt-12 lg:w-2/5 h-40 flex justify-center items-center">
        <img
          src="https://www.svgrepo.com/show/453446/account.svg"
          alt=""
          className="rounded-full h-full p-2"
        />
      </div>
      <div className="details flex flex-col lg:mt-12 lg:w-3/5 w-full">
        <div className="name text-card-btn text-2xl font-bold flex w-full  justify-center lg:justify-start">
          Adv. Sarvoch Sharma
        </div>
        <div className="specialise font-extrabold text-center lg:text-left flex w-full justify-center lg:justify-start text-lg lg:pr-20 mt-2">{`Specialises in personal injury, corporate and family disputes`}</div>
        <div className="experience flex w-full justify-center lg:justify-start text-md">{`6.9 years of experience`}</div>
        <div className="fee flex w-full justify-center lg:justify-start text-md">{`₹500 consultation fee`}</div>
        <div className="bio mt-8 lg:mt-4 px-4 lg:px-0 lg:pr-24 text-justify w-full lg:text-sm pb-20">
          Adv. Sarvoch Sharma, holding a Bachelor of Laws (LLB) degree with
          honors from Lloyd Law College, boasts almost 7 years of legal
          expertise. As an accomplished lawyer based in India, he currently
          serves as a Senior Associate Attorney, specializing in Indian civil
          and corporate law. His prior positions include an Associate Attorney
          role at [Law Firm], where he focused on contract law and dispute
          resolution. Over the years, he has amassed a strong track record in
          Indian legal practice, including successful courtroom representation,
          adept negotiation, and valuable contributions to legal teams.
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderProfileCard;
