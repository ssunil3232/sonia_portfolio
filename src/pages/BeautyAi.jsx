import cover from '../img/beautyAi/background2.png';
import interview from '../img/beautyAi/interview.png';
import hifi from '../img/beautyAi/hifi.png';
import requirements from '../img/beautyAi/requirements.png';
import idea from '../img/beautyAi/ideaBoard.jpg';
import pillar from '../img/beautyAi/pillars.png';
import backgroundReverse from '../img/beautyAi/backgroundReverse.png';
import paperPrototype from '../img/beautyAi/paperPrototype.mp4';
import participants from '../img/beautyAi/participants.png';
import figma from '../img/beautyAi/figma.png';
import persona from '../img/beautyAi/personaCard.png';
import recruitment from '../img/beautyAi/recruitment.png';
import affinity from '../img/beautyAi/affinity.jpg';
import presentation from '../img/beautyAi/presentation.png';
import insights from '../img/beautyAi/insights.png';
import cursor from '../img/prisonerExpress/cursor.gif';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const MSCourseReg = () => {
    //const navigate = useNavigate();
    const navigate = useNavigate();
    return (
        <div style={{ background: 'white' }}>
            <div className="flex w-screen flex-col items-center overflow-x-hidden relative" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                <div className='nanum-myeongjo-regular w-[65%] lg:mr-[20%] md:mr-[10%] lg:mt-[40%] sm:mt-[50%] md:mt-[50%]' style={{ textAlign: 'center', fontSize: '25px', marginBottom: 50 }}>
                    The aim of the <span className='nanum-myeongjo-bold'>Human-Computer Interaction Design</span> project, was to understand the user-centered design cycle and human-computer interaction design concepts. Our task was to discover a prevalent, yet unique, problem faced by users, conduct User Research to understand the problem space, and finally, design a solution that addresses it.
                    For our project, we identified <span className='nanum-myeongjo-extrabold' style={{ color: '#610a0c' }}>challenges in tailoring and learning makeup styles and techniques suitable for each unique facial structure, tone, complexion</span>.
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Problem Statement
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        Makeup styles can be intimidating and confusing. Many users want to find the optimal makeup styles and techniques for their unique skin tone, facial shapes, and features, but feel overwhelmed by the time and energy this takes. They also want to match their makeup style to specific occasions and their shifting schedules. Our project aims to enhance users’ confidence and overall experience by offering <span className='nanum-myeongjo-bold'>personalized makeup style recommendations and tutorials, while connecting them with a community of skilled makeup enthusiasts</span>.
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Interview Plan & Protocol
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        To understand the problem space better - to understand the varying challenges, significance of this problem to individuals, current methods and their limitations, we first developed a comprehensive interview protocol and plan.
                    </div>
                    <div className='flex lg:flex-row md:flex-col flex-wrap justify-center items-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginTop: '20px' }}>
                        <img src={participants} alt="participants" className='lg:w-[45%] md:w-[100%] lg:mr-[5%] sm:w-[100%]' style={{ borderRadius: 10 }} />
                        <img src={recruitment} alt="recruitment" className='lg:w-[45%] md:w-[100%] sm:w-[100%] sm:mt-[5%] md:mt-[5%]' style={{ borderRadius: 10 }} />
                    </div>
                    <div className='flex flex-row justify-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginTop: '20px' }}>
                        <div className='nanum-myeongjo-regular w-[60%] justify-center items-center text-center' style={{ background: '#efe6eb' }}>
                            We recruited <span className='inter-semibold'>8 participants</span> who fit our target group. After obtaining informed consent, we proceeded with the interview, taking notes while recording the audio. Each interview lasted around <span className='inter-semibold'>30-40 minutes long</span> and was <span className='inter-semibold'>conducted in-person</span>, in an area with access to the individual’s makeup tools.
                        </div>
                    </div>
                    <div className='flex justify-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginTop: '40px' }}>
                        <img className='lg:w-[60%]' src={interview} alt="interview" />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Data Analysis
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        Extracting our raw interview notes, we created a descriptive <span className='nanum-myeongjo-extrabold'>Session Essay on each interview</span> that describes the interview setting, process, users responses, reactions and demonstrations. We then created <span className='nanum-myeongjo-extrabold'>Activity Notes from each session essay</span>, which we categorized under the following <span className='nanum-myeongjo-extrabold'>Affinity Diagram</span>.
                    </div>
                </div>
                <div style={{ position: 'relative' }} className='sm:w-[80%] lg:w-[60%] md:w-[80%]'>
                    <a href="https://miro.com/app/board/uXjVK7eeTlM=/?share_link_id=93610415847" target="_blank" rel="noopener noreferrer">
                        <img src={affinity} alt="affinity" />
                    </a>
                    <img src={cursor} alt="cursor" className='sm:h-[50%] lg:h-[30%] md:h-[55%] sm:right-[-10%] lg:right-[-5%] md:right-[-20%] sm:bottom-[-20%] lg:bottom-[0%] md:bottom-[-20%]' style={{ position: 'absolute' }} />
                    {/* <img src={cursor} alt="cursor" style={{ height: '200px', position: 'absolute', right: '-150px', bottom: '-50px' }} /> */}
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Insights Gathering
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        Using the Affinity Clustering, we derived <span className='nanum-myeongjo-bold'>4 significant insights</span> from our interviews:
                    </div>
                    <div className='flex justify-center items-center lg:w-[80%] sm:w-[80%] md:w-[80%]'>
                        <img src={insights} alt="insights" className='lg:w-[50%]' style={{ marginTop: 20 }} />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Persona
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        By keeping in mind the insights, we refined the problem statement and then created a persona to identify with.
                    </div>
                    <div className='flex justify-center lg:w-[80%] sm:w-[80%] md:w-[80%]'>
                        <img src={persona} alt="persona" className='lg:w-[70%] md:w-[100%]' style={{ marginBottom: 10, marginTop: 20 }} />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Requirements Formulated
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        The following are the requirements we realized our solution has to meet, based off our research thus far. <span className='nanum-myeongjo-bold'>Our solution must be able to:</span>
                    </div>
                    <div className='flex justify-center lg:w-[80%] sm:w-[80%] md:w-[80%]'>
                        <img src={requirements} alt="requirements" className='lg:w-[60%] md:w-[100%]' style={{ marginBottom: 50, marginTop: 20 }} />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Brainstorming & Ideation
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        Exploring the existing solution space, we <span className='nanum-myeongjo-bold'>evaluated 20 solutions in this problem space</span> and weighed the features we liked and the limitations they pose. This allowed us to then brainstorm and <span className='nanum-myeongjo-bold'>sketch around 20 design ideas each</span>, thinking out-of-the-box, yet feasible ideas. These idea sketches were gathered and <span className='nanum-myeongjo-bold'>categorized on an “Idea Board”</span>. Using Miro as our collaborative platform, we highlighted ideas that were perceived as innovative, concurrently identifying and linking ideas that had potential synergies, streamlining the process of integrating them into a cohesive solution later on.
                    </div>
                    <div className='flex justify-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginTop: '10px', marginBottom: '50px' }}>
                        <div style={{ position: 'relative', marginTop: '20px' }}>
                            <a href="https://miro.com/app/board/uXjVNbfPgj4=/?share_link_id=590673931007" target="_blank" rel="noopener noreferrer" className='flex justify-center'>
                                <img src={idea} alt="idea" className='sm:h-[90%] lg:w-[70%]' />
                            </a>
                            <img src={cursor} alt="cursor" className='sm:h-[50%] lg:h-[30%] md:h-[45%] sm:right-[-10%] lg:right-[5%] md:right-[-20%] sm:bottom-[-20%] lg:bottom-[0%] md:bottom-[-20%]' style={{ position: 'absolute' }} />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] justify-center items-center flex flex-col'>
                    <div className='nanum-myeongjo-regular w-[80%]' style={{ textAlign: 'center', fontSize: '20px', marginBottom: 20 }}>
                        We then identified <span className='nanum-myeongjo-extrabold' style={{ color: '#B93278' }}>4 primary pillars</span> to implement in our solution:
                    </div>
                    <div className='flex flex-col justify-center items-center w-[90%]' style={{ marginBottom: '50px' }}>
                        <img src={pillar} alt="pillar" className='sm:w-[70%] lg:w-[40%] md:w-[50%]' />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Paper Prototype (Lo-Fi)
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        Starting off the low-fidelity design of our solution, we created a paper prototype of the idea we envisioned. This <span className='nanum-myeongjo-extrabold'>Paper Prototype was used to conduct Usability tests</span> to gather feedback and understand how the design and utility of the solution can be improved.
                    </div>
                    <div className='flex justify-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginTop: '10px', marginBottom: '50px' }}>
                        <video className='sm:w-[100%] md:w-[80%] lg:w-[60%]' height="auto" controls>
                            <source src={paperPrototype} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Mid & Hi-Fidelity Prototype Designs
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        Using the insights from the usability testing feedback with the paper prototype, it informed the creation of our <span className='nanum-myeongjo-extrabold'>Mid-fidelity Figma prototype</span>. Post a design critique session, we were able to further improve the design, culminating in our <span className='nanum-myeongjo-extrabold'>Hi-Fidelity Prototype</span>. We performed <span className='nanum-myeongjo-extrabold'>heuristic evaluations</span> on the prototype based on Nielsen’s 10 heuristics for user interface design, which led to a few more iterations to match the goals and needs of our target users.
                    </div>
                    <div className='flex flex-col justify-center items-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginBottom: '50px' }}>
                        <img src={hifi} alt="hifi" style={{ marginBottom: 10, width: '900px' }} />
                    </div>
                </div>
                <div className='w-[100%] justify-center items-center flex flex-col' style={{ backgroundImage: `url(${backgroundReverse})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
                    <div className='nanum-myeongjo-regular w-[60%]' style={{ textAlign: 'center', fontSize: '20px', marginBottom: 10 }}>
                        We showcased our Figma Prototype during a Poster Presentation event and managed to clinch the prestigious <span className='nanum-myeongjo-extrabold'>'Most Creative' project award</span> for the most innovative and imaginative prototype.
                    </div>
                    <div className='flex flex-col justify-center items-center w-[90%]' style={{ marginBottom: '50px' }}>
                        <img src={presentation} alt="presentation" className='sm:w-[70%] lg:w-[40%] md:w-[50%]' style={{ marginBottom: 10, borderRadius: 15 }} />
                    </div>
                    <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%' }}>
                        <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                            Figma Link
                        </div>
                        <div className='flex flex-col justify-center items-center lg:w-[80%] sm:w-[80%] md:w-[80%]' style={{ marginBottom: '50px' }}>
                            <a className='mx-5 flex justify-center' href="https://www.figma.com/design/XguQMbQ4PK1XiE5dcndTkU/HCI-Figma?node-id=836-9283&t=D22wRVIrBqStiWuz-1" target="_blank" title="Hi-Fi Prototype" >
                                <img src={figma} alt="figma" className='lg:w-[60%]' style={{ marginBottom: 10 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <ScrollTop />
                <Button className='back-btn' onClick={() => navigate(-1)} icon="pi pi-arrow-left" aria-label="back" style={{ position: 'fixed', right: '10px', top: '10px' }} />
            </div>
        </div>
    );
};

export default MSCourseReg;