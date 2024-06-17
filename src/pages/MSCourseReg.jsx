import cover from '../img/msCoureReg/background.png';
import title from '../img/msCoureReg/title.png';
import mockup from '../img/msCoureReg/mockup.png';
import bracket from '../img/msCoureReg/bracket.png';
import frontend from '../img/msCoureReg/frontend.png';
import contribution from '../img/msCoureReg/contribution.png';
import painPoints from '../img/msCoureReg/painPoints.png';
import lofi from '../img/msCoureReg/lofiDesign.png';
import midfi from '../img/msCoureReg/midfiDesign.png';
import hifi from '../img/msCoureReg/hifiDesign.png';
import secondaryResearch from '../img/msCoureReg/secondaryResearch.png';
import featureAnalysis from '../img/msCoureReg/featureAnalysis.png';
import cursor from '../img/prisonerExpress/cursor.gif';
import star from '../img/msCoureReg/star.webp';
import goals from '../img/msCoureReg/goals.png';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import userResearch from '../img/msCoureReg/UserResearch.pdf';
import caseStudy from '../img/msCoureReg/CourseRegistrationFeatureAnalysis.pdf';
import final from '../img/msCoureReg/fin.gif';
import backgroundReverse from '../img/msCoureReg/backgroundReverse.png';

const MSCourseReg = () => {
    //const navigate = useNavigate();
    const navigate = useNavigate();
    return (
        <div style={{ background: 'white' }}>
            <div className="flex w-screen flex-col items-center overflow-x-hidden relative" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                <div>
                    <img src={title} alt="title" style={{ height: '150px', marginTop: 50, marginBottom: 50, borderRadius: 10 }} />
                </div>
                <div>
                    <img src={mockup} alt="mockup" style={{ height: '750px', borderRadius: 10 }} />
                </div>
                <div className='nanum-myeongjo-regular w-[65%]' style={{ textAlign: 'center', fontSize: '25px', marginBottom: 50 }}>
                    The purpose of this project was to design a high-fidelity university course registration system utilizing Microsoft Azure cloud services. The final result is a full-stack system consisting of the student frontend perspective and the backend Azure SQL database database necessary to support this.
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px', marginBottom: 20 }}>
                        Project Goals
                    </div>
                    <div className='w-[90%] flex flex-row items-center justify-center'>
                        <img src={goals} alt="goals" style={{ height: '350px', borderRadius: 10 }} />
                        <img src={bracket} alt="bracket" style={{ height: '350px', borderRadius: 10, marginLeft: '20px', marginRight: '20px' }} />
                        <img src={contribution} alt="contribution" style={{ height: '100px', borderRadius: 10 }} />
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        User Research - Primary & Secondary
                    </div>
                    <div className='inter-semibold' style={{ fontSize: '20px', color: '#8C8383' }}>
                        Primary Research:
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        The primary research for the course registration system is focused on understanding user behavior and pain points, particularly with Cornell’s Course Registration System. This involves using a <span className='nanum-myeongjo-bold'>survey method to collect data for UI/UX enhancements</span>. We aimed to evaluate ease of use, function usability, and identify potential improvements. We collected <span className='nanum-myeongjo-bold'>feedback from 28 respondents</span> and the comprehensive data on the survey method and results can be found&nbsp;
                        <a href={userResearch} target="_blank" title="Primary Research Findings">
                            <span style={{ color: '#610a0c', fontWeight: '900', textDecoration: 'underline' }}>here</span>
                        </a>
                        . The following are user <span className='nanum-myeongjo-bold'>pain points</span> highlighted by several respondents:
                    </div>
                    <div className='flex justify-center w-[90%]'>
                        <img src={painPoints} alt="painPoints" style={{ height: '150px', borderRadius: 10 }} />
                    </div>
                    <div className='inter-semibold' style={{ fontSize: '20px', color: '#8C8383', marginTop: '50px' }}>
                        Secondary Research:
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        To grasp the intricacies of the course registration system’s information architecture, we conducted a thorough <span className='nanum-myeongjo-bold'>secondary analysis of existing university systems</span>. Specifically, we scrutinized the course registration processes at <span className='nanum-myeongjo-bold'>Cornell University, Carnegie Mellon University, and the National University of Singapore</span>. Future works would include analysis of a broader number of university course registration system to understand different university and student needs. Our thorough usability analysis was meticulously compiled into a comprehensive&nbsp;
                        <a href={caseStudy} target="_blank" title="Secondary Research Case Study">
                            <span style={{ color: '#610a0c', fontWeight: '900', textDecoration: 'underline' }}>Case Study slide deck</span>
                        </a>.
                    </div>
                    <div className='flex justify-center w-[90%]' style={{ marginTop: '40px' }}>
                        <img src={secondaryResearch} alt="secondaryResearch" style={{ height: '400px' }} />
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]' style={{ marginTop: '20px' }}>
                        Subsequently, using Figma, we synthesized the case study features, identifying five pivotal modules crucial to the student course registration experience: <span className='nanum-myeongjo-bold'>the Home Page, Course Catalog, Schedule, Registration, and Student Information modules</span>. This analysis formed the basis for our Research Analysis, where we distilled key feature takeaways and defined must-haves and nice-to-haves based on our findings.
                    </div>
                </div>
                <div style={{ position: 'relative', marginTop: '20px' }}>
                    <a href="https://www.figma.com/board/jeSb53KDMHuS19KytU4ipJ/Course-Registration_Case-Study-Feature-Synthesis?node-id=0-1&t=taHA45dyBOxfHHOS-1" target="_blank" rel="noopener noreferrer">
                        <img src={featureAnalysis} alt="featureAnalysis" style={{ height: '500px' }} />
                    </a>
                    <img src={cursor} alt="cursor" style={{ height: '200px', position: 'absolute', right: '-150px', bottom: '-50px' }} />
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Figma Prototypes
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        We then delved into detailing the Figma Prototype, including <span className='nanum-myeongjo-bold'>Lo-fi, Mid-fi, and Hi-fi Prototypes</span>. This comprehensive approach ensures a clear and systematic understanding of the essential elements guiding the course registration system’s development.
                    </div>
                </div>
                <div className='flex flex-row w-[100%] justify-center' style={{ marginTop: '20px', position: 'relative' }}>
                    <a className='mx-5' href="https://www.figma.com/design/MooiMOAVEL7Oe0OiI0wp5R/Lo-Fi-Prototype?node-id=0-1&t=4IdGsfycJpHyoOJc-1" target="_blank" title="Lo-Fi Prototype">
                        <img src={lofi} alt="lofi" style={{ height: '300px', marginBottom: 50 }} />
                    </a>
                    <a className='mx-5' href="https://www.figma.com/design/w25Fq3HTZC20cfcb1wEaQR/Mid-Fi-Prototype?node-id=697-6&t=8bUwtuAQMtx0idjK-1" target="_blank" title="Mid-Fi Prototype">
                        <img src={midfi} alt="midfi" style={{ height: '300px', marginBottom: 50 }} />
                    </a>
                    <a className='mx-5' href="https://www.figma.com/design/WXSxqGwZogvZwJUQpvP73B/Hi-Fi-Prototype?node-id=697-6&t=Z0zfmZrIgfx6dmHK-1" target="_blank" title="Hi-Fi Prototype">
                        <img src={hifi} alt="hifi" style={{ height: '300px', marginBottom: 50 }} />
                    </a>
                    <img src={star} alt="star" style={{ height: '200px', position: 'absolute', right: '0px', bottom: '-50px' }} />
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        In developing the prototype, we implemented a&nbsp;
                        <a href="https://www.figma.com/design/rjzrqWxZ1CkClEYtEd54yE/Design-System_Style-Guide-%26-Components?node-id=491-1064&t=0k6uosuUcul1ruxe-1" target="_blank" title="Design System">
                            <span style={{ color: '#610a0c', fontWeight: '900', textDecoration: 'underline' }}>design system with a color and font scheme</span>
                        </a>&nbsp;
                        from Cornell University. It was chosen as an illustrative example due to our accessibility to its resources. This intentional design choice ensures scalability, facilitating the seamless replacement of colors to align with those of other universities. Within this framework, we integrated PrimeNG Components for development purposes, contributing to a cohesive and visually consistent design system for the prototype.
                    </div>
                </div>
                <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
                    <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                        Frontend Development
                    </div>
                    <div className='nanum-myeongjo-regular w-[80%]'>
                        As for the frontend, I developed it using <span className='nanum-myeongjo-bold'>AngularJs framework</span> and utilised third-party packages <span className='nanum-myeongjo-bold'>PrimeNG, PrimeFlex and FullCalendar.io</span>. PrimeNG is an AngularJS-compatible library with UI components that make development faster, cleaner, and more efficient. It is combined with PrimeFlex, a responsive CSS utility library to accompany Prime UI libraries. The most challenging component to develop was the Scheduler screen, as we needed a third-party component compatible with AngularJS. Hence, after much investigation, we used FullCalendar, which had most of the functionalities we needed for our development. However, as we need Premium features to fully display all the features we planned to develop, our Scheduler as of now, is only capable of displaying static data.
                    </div>
                    <div className='flex justify-center w-[90%]'>
                        <img src={frontend} alt="frontend" style={{ height: '300px', marginBottom: 50, marginTop: 20 }} />
                    </div>
                </div>
                <div  className='w-[100%] justify-center items-center flex flex-col' style={{backgroundImage: `url(${backgroundReverse})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}>
                <div className='nanum-myeongjo-regular w-[80%]' style={{ textAlign: 'center', fontSize: '20px', marginBottom: 50 }}>
                    We presented the finalized course registration system to our clients and received high praise and appreciation for the development efforts. The clients thoroughly enjoyed the product and has
                    <a href="https://devblogs.microsoft.com/azure-sql/course-registration-project-with-azure-sql-database/" target="_blank" title="Microsoft Dev Blog"> published our work on&nbsp;
                        <span className='nanum-myeongjo-extrabold' style={{ color: '#610a0c', textDecoration: 'underline' }}>Microsoft’s Dev Blogs</span>
                    </a>, indicating a successful demonstration of the system's capabilities.
                </div>
                <div className='flex flex-col justify-center items-center w-[90%]' style={{ marginBottom: '50px' }}>
                    <img src={final} alt="final" style={{ height: '500px', marginBottom: 10, borderRadius: 15, width: '900px' }} />
                    <a href="https://github.com/ssunil3232/MPS_Project" target="_blank" title="Github Repository">
                        <span className='nanum-myeongjo-extrabold' style={{ color: '#610a0c', textDecoration: 'underline', fontSize: '25px' }}>Github Repository Link</span>
                    </a>
                </div>
                </div>
                <ScrollTop />
                <Button className='back-btn' onClick={() => navigate(-1)} icon="pi pi-arrow-left" aria-label="back" style={{ position: 'fixed', right: '10px', top: '10px' }} />
            </div>
        </div>
    );
};

export default MSCourseReg;