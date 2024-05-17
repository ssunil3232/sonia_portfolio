import experiences from "../data/experiences.json";

const Experience = () => {
  return (
    <>
      {experiences.map((data, index) => (
        <div
          key={index}
          className="w-[80%] sm:w-[90%] bg-[#dee5ea] p-12 rounded-3xl shadow-xl flex flex-col space-y-5"
        >
          <div className="flex flex-row items-center space-x-3">
            <img src={`../img/${data.logo}`} alt="logo" className="h-16" />
            <div className="flex flex-col text-base">
              <div className="flex flex-row items-center">
                <div>{data.company}</div>
                <a href={data.website} target="_blank" rel="noopener noreferrer">
                  <img src="/img/link.svg" className="h-10" />
                  {/* <i className="pi pi-link pl-3" style={{ fontSize: '1.2rem' }}></i> */}
                </a>
              </div>

              <div className="font-semibold text-base">{data.role}</div>
              <div>{data.time}</div>
            </div>
          </div>
          <div className="text-base">
            {data["bullet points"].map((point, idx) => (
              <li key={idx} className="flex items-start">
              <span className="mr-2" style={{fontSize: '2rem'}}>•</span>
              <div>{point}</div>
            </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
