import "../App.css";
import githublogo from "/src/img/github.svg";
import cornell from "../assets/cornell.svg"
import dbs from "../assets/dbs.svg";
import nus from "../assets/nus.svg";
import pslove from "../assets/pslove.svg";
import aimpower from "../assets/aimpower.svg";
import aiecd from "../assets/aiecd.svg";
import self from "../assets/self.svg";
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
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

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
    const [position, setPosition] = useState('right');
    const [dock, setDock] = useState('end');
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
    useEffect(() => {
        const updatePosition = () => {
            const width = window.innerWidth;
            if (width >= 768) { // 'md' starts at 768px, so 'md' and 'lg' will use 'right'
                setPosition('right');
                setDock('end');
            } else { // 'sm' and below will use 'top'
                setPosition('top');
                setDock('center');
            }
        };
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);
    return (
        <>
            <Dock model={menu} position={position} style={{
                position: 'fixed', right: 0, width: '100%', display: 'flex',
                justifyContent: dock
            }} />
            <section className="min-h-screen lg:w-[85%] md:w-[85%] sm:w-[100%] flex mx-auto items-center justify-start">
                <div className="flex flex-row sm:flex-col space-x-10 sm:space-x-0 ">
                    <div className="intro-header flex flex-col justify-center items-start space-y-5 text-base mx-5" style={{ marginBottom: '50px' }}>
                        <div className="title-text flex flex-col items-start">
                            <p style={{ lineHeight: '0.8', fontSize: '4rem' }}>Hello I am,</p>
                            <p className="sonia">Sonia</p>
                        </div>

                        <p className="profile-description space-y-5" style={{ fontSize: '50px' }}>
                            <span className="description-color" style={{ lineHeight: '0.9' }}>Frontend Developer | <br/>UX Designer</span>
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
                    <div className="flex justify-center">
                        <img
                            src={self}
                            alt="Profile Picture"
                            className="object-contain profile-image sm:h-50"
                        />
                    </div>
                    {/* <div style={{ width: 50, background: 'black', marginLeft: 150 }}></div>
                    <div style={{ width: 100, background: '#E7F8A3', marginLeft: 0 }}></div> */}
                </div>
            </section>
            <section ref={aboutMeRef} className="bg-[#FFFFFF] h-[100%] w-[100%] flex justify-center rounded-t-3xl">
                <div className="flex flex-col items-start space-y-5 w-[80%] flex h-[100%]">
                    <div className="flex font-medium italiana section-title" >More about me!</div>
                    <p>Hailing from the <span className="emphasis-line">little red dot, Singapore,</span> I have always been in touch with my creative side, thus it was natural to pursue UI/UX.</p>
                    <p>My journey started with my <span className="emphasis-line">undergraduate in Computer Engineering</span>, where I <span className="emphasis-line">interned as a frontend developer</span> with a local Startup Pslove (now rebranded 'Blood'). I enjoyed frontend developement so much, I decided to join DBS Bank Singapore as a <span className="emphasis-line">frontend developer, where I worked for 2 years</span>. It was there that I delved into frontend development, UX Design and Product Engineering, honing my craft in user interface development and problem solving with design. To expand my knowledge further, I decided to pursue a <span className="emphasis-line">Masters in Information Science at Cornell</span> where I focused on <span className="emphasis-line">Human Computer Interaction (HCI)</span>, Frontend development, UX design and Product management.</p>
                    <p>Currently, I am working as a frontend developer for US-based startups AImpower.org and AI ECD.</p>
                    <p>My goal is to develop interfaces that are sleek, intuitive and elevates user experience. I want to design interfaces in a way that users gain an experience they never realised they needed!</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button className="skills-button font-bold py-2 px-4 rounded" style={{ background: showSkills ? '#E7F8A3' : '#D7D3C0' }} onClick={() => { setShowSkills(true); setShowBackground(false) }}>
                            Skills & Technologies
                        </button>
                        <button className="skills-button font-bold py-2 px-4 rounded ml-3" style={{ background: showBackground ? '#E7F8A3' : '#D7D3C0' }} onClick={() => { setShowSkills(false); setShowBackground(true) }}>
                            Background
                        </button>
                    </div>
                    {showSkills && <div className="skillset flex h-[100%]">
                        <Grid container spacing={2}>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>Programming Languages: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">JavaScript, Typescript, Python, D3.js, HTML, CSS, C, C++, Java, SQL, C# (basic)</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>Frontend frameworks: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">Angular.js, React.js, Vue.js (v3), Next.js, React Native, Flutter</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>UX Skills: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">Figma, Balsamiq, Miro, User Research, User Interviews, Usability Testing, Persona, Information Architecture, Interaction Design, User Journey Mapping, WCAG, Design Thinking, User-Centered Design, Responsive Design</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>Database Management: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">MongoDB, Firebase/Firestore, MariaDB, Microsoft Azure, PostgreSQL, Elasticsearch</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>API Tools: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">GraphQL/Apollo Client, Postman, REST Api</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>Tools: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">GitHub, Tableau, Jira, Jenkins, Bitbucket, OpenShift, JFrog, Spring Boot, Android Studio, Xcode, NPM, Webpack</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>Libraries: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">Prime Components, ChartJs, AnyChart.js, AG Grid, Tailwind CSS, Bootstrap, Material-UI</span>
                            </Grid>
                            <Grid item xs={4} md={4} lg={3} className="skills-header-box">
                                <div>Others: </div>
                            </Grid>
                            <Grid item xs={8} md={8} lg={9} className="skills-text-box">
                                <span className="skills-text">VS Code, Unity, Arduino, Machine Learning, Jupyter, Scrum and Agile Methodologies</span>
                            </Grid>
                        </Grid>
                    </div>}
                    {showBackground && <div className="skillset w-[100%] sm:w-[100%] md:w-[100%] justify-center items-center flex flex-row sm:flex-col-reverse md:flex-col-reverse">
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] lg:mb-[5%] md:mb-[5%] sm:mb-[0%]">
                            <img
                                src={nus}
                                alt="NUS Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] lg:mb-[5%] md:mb-[5%] sm:mb-[0%]">
                            <img
                                src={pslove}
                                alt="Pslove Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] lg:mb-[5%] md:mb-[5%] sm:mb-[0%]">
                            <img
                                src={dbs}
                                alt="DBS Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] lg:mb-[5%] md:mb-[5%] sm:mb-[0%]">
                            <img
                                src={cornell}
                                alt="Cornell Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] lg:mb-[5%] md:mb-[5%] sm:mb-[0%]">
                            <img
                                src={aimpower}
                                alt="AImpower Picture"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center sm:w-[80%] md:w-[70%] lg:mb-[5%] md:mb-[5%] sm:mb-[0%]">
                            <img
                                src={aiecd}
                                alt="AI ECD"
                                className="object-contain"
                            />
                        </div>
                    </div>}
                </div>
            </section>
            <section ref={projectsRef} className="bg-[#FFFFFF] min-h-screen w-screen flex justify-center">
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
