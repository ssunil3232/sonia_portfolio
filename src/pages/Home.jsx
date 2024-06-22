import "../App.css";
import githublogo from "/src/img/github.svg";
import cornell from "../assets/cornell.svg"
import dbs from "../assets/dbs.svg";
import nus from "../assets/nus.svg";
import pslove from "../assets/pslove.svg";
import aimpower from "../assets/aimpower.svg";
import location from "/src/img/location.svg";
import linkedinlogo from "/src/img/linkedin.svg";
import emaillogo from "../img/email.svg";
import datavizlogo from "../img/dataviz.svg";
import Project from "../components/Project.jsx";
import Footer from "../components/Footer.jsx";
import { useTrail, animated } from 'react-spring';
import { Dock } from 'primereact/dock';
import aboutme from "../assets/aboutme.svg";
import resume from "../assets/resume.pdf";
import resumelogo from "../assets/resumeIcon.png";
import contact from "../assets/contact.svg";
import projects from "../assets/projects.svg";
import React, { useState } from 'react';

const HomePage = () => {
    //const navigate = useNavigate();
    const aboutMeRef = React.useRef(null);
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
            <section className="min-h-screen lg:w-[85%] md:w-[85%] sm:w-[100%] flex mx-auto items-center justify-start">
                <div className="flex flex-row sm:flex-col space-x-10 sm:space-x-0 ">
                    <div className="flex flex-col justify-center items-start space-y-5 text-base mx-5" style={{ marginTop: '90px', marginBottom: '100px' }}>
                        <p className="title-text flex flex-col items-start">
                            <p style={{ lineHeight: '0.8', fontSize: '4rem' }}>Hello I am,</p>
                            <p className="sonia">Sonia</p>
                        </p>

                        <p className="profile-description space-y-5" style={{ fontSize: '50px' }}>
                            I am a <span className="description-color" style={{ lineHeight: '0.9' }}>Frontend Developer | UX Designer</span>
                        </p>
                        <p className="profile-description space-y-5" style={{ fontSize: '25px' }}>
                            <span style={{ fontStyle: 'italic' }}>with</span> a knack for <span className="description-color">designing & developing</span> creative and aesthetically appealing User Interfaces.
                        </p>
                        <p className="profile-description space-y-5" style={{ fontSize: '25px' }}>
                            Passionate about Human-Centered computing to develop interfaces that <span className="description-color">enhance user experiences</span>.
                        </p>
                        <div className="flex flex-row items-center space-x-2 profile-description ">
                            <img style={{ height: 'auto' }} src={location} />
                            <p>New York, United States</p>
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: '15px' }}>
                            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                            <p>Avaliable for new projects</p>
                        </div>
                        <div className="flex flex-row h-12 space-x-2 items-center">
                            <a href="https://github.com/ssunil3232" target="_blank" title="GitHub" className="show-hover-text">
                                <img style={{ height: 70 }} src={githublogo} />
                            </a>
                            <a className="datavizlogo show-hover-text" href="https://sonia-sunil-d3.onrender.com/" target="_blank" title="D3 Data Visualization">
                                <img style={{ height: 50 }} src={datavizlogo} />
                            </a>
                            <a href="https://www.linkedin.com/in/sonia-sunil-ss32" target="_blank" title="LinkedIn" className="show-hover-text">
                                <img style={{ height: 60 }} src={linkedinlogo} />
                            </a>
                            <a href="mailto:soniasunil47@gmail.com?cc=ss3587@cornell.edu" title="Email" className="show-hover-text">
                                <img style={{ height: 65 }} src={emaillogo} />
                            </a>
                            <a href={resume} target="_blank" title="Resume" className="show-hover-text">
                                <img className="m-[10px]" style={{ height: 50 }} src={resumelogo} />
                            </a>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <img
                            src={self}
                            alt="Profile Picture"
                            className="object-contain profile-image sm:h-72"
                        />
                    </div> */}
                    {/* <div style={{ width: 50, background: 'black', marginLeft: 150 }}></div>
                    <div style={{ width: 100, background: '#E7F8A3', marginLeft: 0 }}></div> */}
                </div>
            </section>
            <section ref={aboutMeRef} className="bg-[#FFFFFF] min-h-screen w-[100%] flex justify-center rounded-t-3xl">
                <div className="flex flex-col items-start space-y-5 w-[80%]">
                    <div className="flex font-medium italiana section-title" >More about me!</div>
                    <p>Hailing from the little red dot, Singapore, I have always been in touch with my creative side, thus it was natural to pursue UI/UX.</p>
                    <p>My journey started with my undergraduate in Computer Engineering, where I interned as a frontend developer with a local Startup Pslove (now rebranded 'Blood'). I enjoyed frontend developement so much, I decided to join DBS Bank Singapore as a frontend developer, where I worked for 2 years. It was there that I delved into frontend development, UX Design and Product Engineering, honing my craft in user interface development and problem solving with design. To expand my knowledge further, I decided to pursue a Masters in Information Science at Cornell where I focused on Human Computer Interaction (HCI), Frontend development, UX design and Product management.</p>
                    <p>Currently, I am working as a frontend developer for a US-based NGO 'AImpower.org'.</p>
                    <p>My goal is to develop interfaces that are sleek, intuitive and elevates user experience. I want to design interfaces in a way that users gain an experience they never realised they needed!</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button className="skills-button font-bold py-2 px-4 rounded" style={{ background: showSkills ? '#E7F8A3' : '#D7D3C0' }} onClick={() => { setShowSkills(true); setShowBackground(false) }}>
                            Skills & Technologies
                        </button>
                        <button className="skills-button font-bold py-2 px-4 rounded ml-3" style={{ background: showBackground ? '#E7F8A3' : '#D7D3C0' }} onClick={() => { setShowSkills(false); setShowBackground(true) }}>
                            Background
                        </button>
                    </div>
                    {showSkills && <div className="skillset w-[80%]" style={{ marginBottom: '8rem!important' }}>
                        <ul className="show-bullets">
                            <li>Programming Languages: <span className="skills-text">C, C++, Python, SQL, Typescript, JavaScript, D3.js, Java, HTML, CSS, Machine Learning, C# (basic)</span></li>
                            <li>Frontend frameworks: <span className="skills-text">AngularJS, ReactJS, VueJS, Flutter (Dart)</span></li>
                            <li>Tools: <span className="skills-text">VS Code, Figma, GitHub, Jenkins, Bitbucket, OpenShift, Elasticsearch, Firebase, Jupyter, PyTorch, Unity, Arduino</span></li>
                            <li>Languages: <span className="skills-text">Native in English; Fluent in Malayalam, Intermediate in Hindi</span></li>
                            <li>Others: <span className="skills-text">PrimeNg, PrimeFlex, GraphQL/Apollo Client, Tailwind CSS, Bootstrap, Material-UI, Scrum methodology</span></li>
                        </ul>
                    </div>}
                    {showBackground && <div className="skillset w-[100%] sm:w-[100%] md:w-[100%] justify-center items-center flex flex-row sm:flex-col-reverse md:flex-col-reverse">
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] sm:mb-[10%]">
                            <img
                                src={nus}
                                alt="NUS Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center sm:w-[80%] md:w-[70%]">
                            <img
                                src={pslove}
                                alt="Pslove Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center sm:w-[80%] md:w-[70%]">
                            <img
                                src={dbs}
                                alt="DBS Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center sm:w-[80%] md:w-[70%]">
                            <img
                                src={cornell}
                                alt="Cornell Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center sm:w-[80%] md:w-[70%]">
                            <img
                                src={aimpower}
                                alt="AImpower Picture"
                                className="object-contain"
                            />
                        </div>
                    </div>}
                </div>
            </section>
            <section ref={projectsRef} className="bg-[#FFFFFF] min-h-screen w-screen flex justify-center move-up">
                <div className="bg-[#F3E3EE] flex w-screen flex-row justify-evenly rounded-t-3xl">
                    <div className="flex flex-col mb-5 mt-5 items-center space-y-5 w-[100%]">
                        <div className="w-[80%]">
                            <div className="flex italiana font-medium section-title">Projects</div>
                            <div className="text-base">
                                Here are some projects I have designed & developed!
                            </div>
                        </div>

                        <Project className="w-full" />
                    </div>

                </div>
            </section>
            <Footer ref={contactRef} />
        </>
    );
}

export default HomePage;
