import projects from "../data/projects.json";
import link from "/img/linkwhite.svg";

const Project = () => {
  return (
    <>
      {projects.map((data, index) => (
        <div
          key={index}
          className="w-[80%] sm:w-[90%] bg-[#665566] p-12 rounded-3xl shadow-xl flex flex-col space-y-5 text-base mb-5"
        >
          <div className="flex flex-row items-center">
              <div className="font-semibold text-xl justify-between" style={{ color: "white", width: '100%'}} dangerouslySetInnerHTML={{ __html: data.name }}/>
                <a href="">
                  <img src={link} className="h-10" />
                </a>
              </div>
          <div className="flex flex-row sm:flex-col space-x-5 justify-start">
            <img
              src={data.logo}
              alt="project logo"
              className="h-64 sm:h-auto"
            />
            <div className="flex flex-col items-start space-y-3 justify-between">
              
              {/* <div className="font-semibold text-xl" style={{ color: "white" }}>{data.name}</div> */}
              <div style={{ color: "#ced4da" }}>{data.description}</div>
              <div className="flex flex-row flex-wrap space-x-3 ">
                {data["tools"].map((point, idx) => (
                  <div
                    key={idx}
                    className="py-1 px-3 bg-[#E5E7EB] rounded-3xl mb-3 "
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
