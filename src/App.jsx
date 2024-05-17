import "./App.css";
import githublogo from "/src/img/github.svg";
import cornell from "./assets/cornell.svg";
import dbs from "./assets/dbs.svg";
import nus from "./assets/nus.svg";
import location from "/src/img/location.svg";
import linkedinlogo from "/src/img/linkedin.svg";
import emaillogo from "./img/email.svg";
import datavizlogo from "./img/dataviz.svg";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import { useTrail, animated } from 'react-spring';
import { Dock } from 'primereact/dock';
import aboutme from "./assets/aboutme.svg";
import experience from "./assets/experience.svg";
import contact from "./assets/contact.svg";
import projects from "./assets/projects.svg";
import React, { useState } from 'react';

function App() {
  const aboutMeRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const items = ['Hello, I am'];
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 100 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  });
  const [showSkills, setShowSkills] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const menu = [
    {
      label: 'About Me',
      icon: () => <img alt="About Me" src={aboutme} width="100%" />,
      command: () => {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      label: 'Experience',
      icon: () => <img alt="Experience" src={experience} width="100%" />,
      command: () => {
        experienceRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      label: 'Projects',
      icon: () => <img alt="Projects" src={projects} width="100%" />,
      command: () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      label: 'Contact',
      icon: () => <img alt="Contact" src={contact} width="100%" />,
      command: () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  ];
  return (
    <>
      <Dock model={menu} position='right' style={{
        position: 'fixed', right: 0, width: '100%', display: 'flex',
        justifyContent: 'end'
      }} />
      <section className="h-screen w-[100%] flex mx-auto items-center justify-center">
        <div className="h-[100%] flex flex-row sm:flex-col space-x-10 sm:space-x-0 ">
          <div className="flex flex-col justify-center items-end space-y-5 text-base">
            <div className="title-text sm:flex-col">
              {trail.map(({ x, ...rest }, index) => (
                <animated.p
                  key={items[index]}
                  className={`no-wrap typewriter`}
                  style={{
                    ...rest,
                    transform: x.to((x) => `translate3d(0,${x}px,0)`),
                    fontSize: 150
                  }}
                >
                  <span>{items[index]}</span>
                </animated.p>
              ))}
            </div>
            <p style={{ fontSize: 200 }} className="title-text sonia pt-10 pl-0 pb-10"> Sonia</p>
            {/* <div className="title-text sm:flex-col"><p className="no-wrap">Hello, I am </p><p className="sonia sm:pt-10 sm:pl-0"> Sonia</p></div> */}

            <p className="profile-description" style={{ fontSize: '25px' }}>
              I am a <span className="description-color">Frontend Developer | UX Designer</span>
            </p>
            <p className="profile-description pt-0 mt-0" style={{ fontSize: 'larger', marginTop: 0 }}>
              <span style={{ fontStyle: 'italic' }}>with</span> a knack for <span className="description-color">designing & developing</span> creative and aesthetically appealing User Interfaces.
            </p>
            <p style={{ fontSize: 'larger', marginTop: 0 }}>
              Passionate about Human-Centered computing to develop interfaces that <span className="description-color">enhance user experiences</span>.
            </p>
            <div className="flex flex-row items-center space-x-2">
              <img style={{ height: 'auto' }} src={location} />
              <p>New York, United States</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <p>Avaliable for new projects</p>
            </div>

            {/* TODO 2: Change the links of these tags to link to your socials! */}
            <div className="flex flex-row h-12 space-x-2">
              <a href="https://github.com/ssunil3232" target="_blank" title="GitHub" className="show-hover-text">
                <img style={{ height: 50 }} src={githublogo} />
              </a>
              <a className="datavizlogo show-hover-text" href="https://sonia-sunil-d3.onrender.com/" target="_blank" title="D3 Data Visualization">
                <img style={{ height: 40 }} src={datavizlogo} />
              </a>
              <a href="https://www.linkedin.com/in/sonia-sunil-ss32" target="_blank" title="LinkedIn" className="show-hover-text">
                <img style={{ height: 50 }} src={linkedinlogo} />
              </a>
              <a href="mailto:soniasunil47@gmail.com?cc=ss3587@cornell.edu" title="Email" className="show-hover-text">
                <img style={{ height: 45 }} src={emaillogo} />
              </a>
            </div>
          </div>
          <div style={{ width: 50, background: 'black', marginLeft: 150 }}></div>
          <div style={{ width: 100, background: '#E7F8A3', marginLeft: 0 }}></div>

          {/* <div className="flex justify-center">
            <img
              src={profile}
              alt="Profile Picture"
              className="object-contain profile-image sm:h-72"
            />
          </div> */}
        </div>
      </section>
      <section ref={aboutMeRef} className="bg-[#CEBDD2] h-screen w-[100%] flex justify-center rounded-t-3xl">
        <div className="flex flex-col items-start space-y-5 w-[60%]">
          <div className="flex font-medium italiana" style={{ fontSize: 80 }}>About me</div>
          <p style={{ marginTop: 0 }}>
            Currently a master’s student in <span className="skills-description-color">Information Science at Cornell University</span>, graduating in May 2024.<br /> I focus on <span className="skills-description-color">Human-Computer Interaction, Frontend development, UX design and Product management</span>. <br />I have <span className="skills-description-color">2 years of work experience</span> as a frontend engineer, with a year in a UI Lead capacity.<br /> I am <span className="skills-description-color">passionate</span> about enhancing user experiences through frontend design and development. <br />My <span className="skills-description-color">goal</span> is to develop interfaces that are sleek, intuitive and elevates user experience. <br />I want to design interfaces in a way that users gain an experience they never realised they needed.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="skills-button font-bold py-2 px-4 rounded" style={{ background: showSkills ? '#E7F8A3' : '#D7D3C0' }} onClick={() => { setShowSkills(true); setShowBackground(false) }}>
              Skills & Technologies
            </button>
            <button className="skills-button font-bold py-2 px-4 rounded ml-3" style={{ background: showBackground ? '#E7F8A3' : '#D7D3C0' }} onClick={() => { setShowSkills(false); setShowBackground(true) }}>
              Background
            </button>
          </div>
          {showSkills && <div className="skillset w-[50%]">
            <ul className="show-bullets">
              <li>Programming Languages: <span className="skills-text">C, C++, Python, SQL, Typescript, JavaScript, D3.js, Java, HTML, CSS, Machine Learning, C# (basic)</span></li>
              <li>Frontend frameworks: <span className="skills-text">AngularJS, ReactJS, VueJS, Flutter (Dart)</span></li>
              <li>Tools: <span className="skills-text">VS Code, Figma, GitHub, Jenkins, Bitbucket, OpenShift, Elasticsearch, Firebase, Jupyter, PyTorch, Unity, Arduino</span></li>
              <li>Languages: <span className="skills-text">Native in English; Fluent in Malayalam, Intermediate in Hindi</span></li>
              <li>Others: <span className="skills-text">PrimeNg, PrimeFlex, GraphQL/Apollo Client, Tailwind CSS, Bootstrap, Material-UI, Scrum methodology</span></li>
            </ul>
          </div>}
          {showBackground && <div className="skillset w-[100%]" style={{ display: "flex", flexDirection: "row" }}>
            <div className="flex justify-center">
              <img
                src={cornell}
                alt="Cornell Picture"
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={dbs}
                alt="DBS Picture"
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={nus}
                alt="NUS Picture"
                className="object-contain"
              />
            </div>
          </div>}
        </div>
        <div style={{ width: 50, background: 'black', marginLeft: 117 }}></div>
        <div style={{ width: 100, background: '#E7F8A3', marginLeft: 0 }}></div>
      </section>
      <section ref={experienceRef} className="bg-[#CCEBF5] min-h-screen w-screen flex justify-center rounded-t-3xl move-up">
        <div className="flex w-screen flex-row justify-evenly">
          <div className="flex flex-col mb-5 mt-5 mr-5 items-center space-y-5 w-[60%]">
            <div className="flex italiana font-medium" style={{ fontSize: 80 }}>Experience</div>
            <div className="text-base">
              Here are my most recent experiences!
            </div>
            <Experience className="w-full" />
          </div>
          <div className="flex" style={{ marginRight: 32 }}>
            <div style={{ width: 50, background: 'black' }}></div>
            <div style={{ width: 100, background: '#E7F8A3', marginLeft: 0 }}></div>
          </div>

        </div>

      </section>
      <section ref={projectsRef} className="bg-[#CCEBF5] min-h-screen w-screen flex justify-center move-up">
        <div className="bg-[#ECD0E4] flex w-screen flex-row justify-evenly rounded-t-3xl">
          <div className="flex flex-col mb-5 mt-5 mr-5 items-center space-y-5 w-[60%]">
            <div className="flex italiana font-medium" style={{ fontSize: 80 }}>Projects</div>
            <div className="text-base">
              Here are some projects I have designed & developed!
            </div>
            <Project className="w-full" />
          </div>
          <div className="flex" style={{ marginRight: 32 }}>
            <div style={{ width: 50, background: 'black' }}></div>
            <div style={{ width: 100, background: '#E7F8A3', marginLeft: 0 }}></div>
          </div>

        </div>
      </section>
      {/* TODO 6: Change the email and phone number to your own in the footer component */}
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
