import backgroundSvg from '../img/prisonerExpress/prisonerExpress.svg';
import logo from '../img/prisonerExpress/logo.png';
import cursor from '../img/prisonerExpress/cursor.gif';
import click3 from '../img/prisonerExpress/click3.webp';
import affinity from '../img/prisonerExpress/affinity.png';
import idea from '../img/prisonerExpress/ideaBoard.png';
import task1 from '../img/prisonerExpress/task1.png';
import task2 from '../img/prisonerExpress/task2.png';
import preview from '../img/prisonerExpress/preview.gif';
import implement1 from '../img/prisonerExpress/implement1.png';
import implement2 from '../img/prisonerExpress/implement2.png';
import pres1 from '../img/prisonerExpress/pres1.png';
import pres2 from '../img/prisonerExpress/pres2.png';
import proto1 from '../img/prisonerExpress/proto1.png';
import proto2 from '../img/prisonerExpress/proto2.png';
import proto3 from '../img/prisonerExpress/proto3.png';
import proto4 from '../img/prisonerExpress/proto4.png';
import testing from '../img/prisonerExpress/testing.png';
import github from '../img/prisonerExpress/github.png';
import pwaApp from '../img/prisonerExpress/pwaApp.png';
import report from '../img/prisonerExpress/report.png';
import presentation from '../img/prisonerExpress/presentation.png';
import backgroundReverse from '../img/prisonerExpress/backgroundReverse.png';
import prisoner from '../img/prisonerExpress/prisonerPersona.png';
import admin from '../img/prisonerExpress/adminPersona.png';
import final from '../img/prisonerExpress/final.png';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import finalReport from '../img/prisonerExpress/Final Report.pdf';

const PrisonerExpress = () => {
   //const navigate = useNavigate();
   const navigate = useNavigate();
   return (
      <div style={{ background: 'white' }}>
         <div className="flex w-screen flex-col items-center overflow-x-hidden relative" style={{ backgroundImage: `url(${backgroundSvg})`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}>
            <div className='flex flex-col md:flex-col lg:flex-row justify-evenly items-center' style={{ marginTop: '150px', marginLeft: '50px' }}>
               <div className="title">
                  <div className='poiret-one-regular-header'>PRISONER</div>
                  <div className='poiret-one-regular-header'>EXPRESS</div>
               </div>
               <img src={logo} alt="logo" style={{ height: '200px', width: '650px' }} />
            </div>
            <div className='sm:w-[90%] lg:w-[60%]'>
               <img src={preview} alt="preview" style={{ marginTop: 50, marginBottom: 50, borderRadius: 10 }} />
            </div>
            <div className='nanum-myeongjo-regular w-[65%]' style={{ textAlign: 'center', fontSize: '25px' }}>
               Prisoner Express creates an opportunity for incarcerated individuals to get information, education and a public forum for creative self-expression. Through newsletters and programs they hope to step through the isolation and alienation of prison life, bringing hope and fostering a sense of community among prisoners.
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  Problem Statement
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Increased scrutiny, regulations and expense surrounding the delivery of physical mails to prisoners have mandated the need to move the contents of the Prisoner Express newsletter digital. Thus, the primary goal of this project was to create a <span className='nanum-myeongjo-bold'>seamless app experience that emulates the feeling of physical letters or writings</span> for incarcerated individuals. Given that almost all prisoners have a tablet of their own, this project envisions an application that can be installed onto tablets to bring a similar experience as that of a physical newsletter.
               </div>
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  User Research
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  To understand the goals and requirements of the application, we <span className='nanum-myeongjo-bold'>first interviewed the client</span> to understand their goals and requirements and assessed the current physical newsletter’s contents. Followed by which, we conducted a <span className='nanum-myeongjo-bold'>modified user interview (proxy)</span> of a formerly incarcerated individual, to gain more understanding of what our primary users (prisoners) seek from the newsletter application. Finally, using <span className='nanum-myeongjo-bold'>survey data collected</span> by Lyss, the developer of Prisoner Express’ App Design program, we gathered further insights on primary user pains. Our user research uncovered several critical insights and established a foundation of requirements for the app's development, as well as the goals of the app’s audience.
               </div>
               <div className='inter-semibold' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
                  Key Findings:
                  <div className='w-[80%] flex flex-col items-center'>
                     <ol style={{ listStyle: 'auto' }}>
                        <li>
                           <div className='nanum-myeongjo-regular' style={{ color: 'black', fontSize: '16px' }}>
                              Illuminated the need to create <span className='nanum-myeongjo-bold'>an app experience that mirrors the personal touch and connection of physical letters</span> for incarcerated individuals.
                           </div>
                        </li>
                        <li>
                           <div className='nanum-myeongjo-regular' style={{ color: 'black', fontSize: '16px' }}>
                              Importance of <span className='nanum-myeongjo-bold'>seamless operation across different tablet devices</span> within prisons, <span className='nanum-myeongjo-bold'>without the need for internet</span> access.
                           </div>
                        </li>
                        <li>
                           <div className='nanum-myeongjo-regular' style={{ color: 'black', fontSize: '16px' }}>
                              Emphasized the app's ease of use to <span className='nanum-myeongjo-bold'>cater to the technological skills spectrum of the inmate population</span>.
                           </div>
                        </li>
                        <li>
                           <div className='nanum-myeongjo-regular' style={{ color: 'black', fontSize: '16px' }}>
                              As user-submitted content and responses are received by Prisoner Express via physical mail, the app’s <span className='nanum-myeongjo-bold'>administrative side should be able to keep track of these received mails</span>.
                           </div>
                        </li>
                        <li>
                           <div className='nanum-myeongjo-regular' style={{ color: 'black', fontSize: '16px' }}>
                              Stressed the <span className='nanum-myeongjo-bold'>significance of human connection and self-expression</span>, and the <span className='nanum-myeongjo-bold'>relevance and variety of options</span> of engaging and enriching content.
                           </div>
                        </li>
                     </ol>
                  </div>
               </div>
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  Affinity Diagram
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Consolidating the findings from the User Research, we created an Affinity diagram, brainstorming and identifying themes. We extracted information from both the user interview and the survey data to create an Affinity Diagram. We went about to identify, consolidate and extract relevant information, which then narrowed to themes which potentially captures the essence of incarcerated individuals’ needs and expectations.
               </div>
            </div>
            <div style={{ position: 'relative' }} className='sm:w-[90%] lg:w-[70%]'>
               <a href="https://www.figma.com/board/mOhCaLDCwLS0LPKF4HtwBv/Prisoner-Express-Affinity-Diagram?node-id=0-1&t=TeS1PB1sBUZ3F0l6-1" target="_blank" rel="noopener noreferrer">
                  <img src={affinity} alt="affinity" className='sm:h-[40%] lg:h-[70%]' />
               </a>
               <img src={cursor} alt="cursor" className='sm:h-[70%] lg:h-[50%] md:h-[55%] sm:right-[-20%] lg:right-[-10%] md:right-[-20%] sm:bottom-[-20%] lg:bottom-[-15%] md:bottom-[-20%]' style={{ position: 'absolute' }} />
               {/* <img src={cursor} alt="cursor" style={{ height: '200px', position: 'absolute', right: '-150px', bottom: '-50px' }} /> */}
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  User Personas & Task Scenarios
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Using our user research findings, we thoroughly understood the different users and their goals with our app - our <span className='nanum-myeongjo-bold'>primary audience (prisoners)</span> and the <span className='nanum-myeongjo-bold'>administrative audience (Prisoner Express admins)</span>, and created suitable Personas and Task Scenarios for future testing to understand if our app is intuitive and performs the goals of our users.
               </div>
               <div className='inter-semibold flex items-start' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
                  Primary User - Prisoners
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Our primary users are incarcerated individuals who have limited connections and knowledge of the world outside the confines of prison walls. As such, they desire a human connection and validation, which they get from reading other prisoners’ experiences, knowledge of the outside world, and when they get to share their feelings and experiences. However, they have limited resources to fuel this desire due to limited internet access and receiving up-to-date content.
               </div>
               <div className='flex items-center sm:w-[80%] lg:w-[90%] md:w-[80%] justify-center'>
                  <img src={prisoner} alt="prisoner" className='sm:w-[100%] lg:w-[70%] md:w-[100%]' style={{ marginTop: '20px', }} />
               </div>
               <div className='flex items-center w-[90%] justify-center'>
                  <div className='flex flex-col items-start'>
                     <div className='inter-light flex justify-start items-start' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
                        Goals & Task Scenarios
                     </div>
                     <div className='flex items-center sm:w-[90%] lg:w-[100%] md:w-[90%] justify-center'>
                        <img src={task1} alt="task1" className='sm:w-[100%] lg:w-[70%] md:w-[100%]' style={{ marginTop: '20px', }} />
                     </div>
                  </div>
               </div>
               <div className='inter-semibold flex items-start' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
                  Administrative User - Prisoner Express Admins
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Our administrative users are the admins of Prisoner Express who compile the content and resources to publish in the Newsletter to distribute to prisoners, that is updated quarterly. They publish work sent by prisoners and other educational program content that prisoners might be interested in, so as to give prisoners the opportunity to improve their mental well-being and learning. However, there are lots of mails that come through, and keeping track and ensuring each prisoner gets recognized is a hassle. As well, due to differing technical literacy of prisoners, they would want to provide content in an inclusive manner.
               </div>
               <div className='flex items-center sm:w-[80%] lg:w-[90%] md:w-[80%] justify-center'>
                  <img src={admin} alt="admin" className='sm:w-[100%] lg:w-[70%] md:w-[100%]' style={{ marginTop: '20px', }} />
               </div>
               <div className='flex items-center w-[90%] justify-center'>
                  <div className='flex flex-col items-start'>
                     <div className='inter-light flex justify-start items-start' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
                        Goals & Task Scenarios
                     </div>
                     <div className='flex items-center sm:w-[90%] lg:w-[100%] md:w-[90%] justify-center'>
                        <img src={task2} alt="task2" className='sm:w-[100%] lg:w-[70%] md:w-[100%]' style={{ marginTop: '20px', }} />
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  Brainstorming & Ideation
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  We then proceeded to research existing reading app interfaces, pasting them on an <span className='nanum-myeongjo-bold'>“Idea Board”</span> and highlighting features we felt gelled and wanted our app to consider incorporating. We reviewed apps like <span className='nanum-myeongjo-bold'>FBReader, Kindle, AppleBooks, Barnes & Noble, and RecipeKeeper</span> to brainstorm ideas for our Primary users. For the Administrative users, we referenced apps like <span className='nanum-myeongjo-bold'>Cornell’s Canvas and Quizlet</span> app.
               </div>
               <div style={{ position: 'relative' }} className='flex items-center sm:w-[80%] lg:w-[90%] md:w-[80%] justify-center'>
                  <a href="https://www.figma.com/board/ZhovCH4zplCXi5do2lVPFF/Idea-Board-for-Prisoner-Express-App?node-id=0-1&t=qqnfSlB1AGa8EbD4-1" target="_blank" rel="noopener noreferrer">
                     <img src={idea} alt="idea" style={{ marginTop: '20px', marginBottom: '20px' }} />
                  </a>
                  <img src={cursor} alt="cursor" className='sm:h-[70%] lg:h-[50%] md:h-[55%] sm:right-[-20%] lg:right-[-10%] md:right-[-20%] sm:bottom-[-20%] lg:bottom-[-15%] md:bottom-[-20%]' style={{ position: 'absolute' }} />
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Taking all of these findings, we sketched out a design flow of what we envisioned the app to look like and features it should include. We then wore the hats of users and <span className='nanum-myeongjo-bold'>walked through each task scenario</span> we had created with the design, to assess if the features and functionalities incorporated allowed the users to perform the task scenarios smoothly. This evaluation brought about some design changes, which culminated in our <span className='nanum-myeongjo-bold'>Final Design</span>.
               </div>
               <div style={{ position: 'relative' }} className='sm:w-[80%] md:w-[80%] lg:w-[90%]'>
                  <a href="https://www.figma.com/board/MhCNAdnU4ZEkhDyAnHmMkM/Design-Flows?node-id=0-1&t=aX20NYmzJCllQQfR-1" target="_blank" rel="noopener noreferrer">
                     <img src={final} alt="final" className='sm:w-[100%]' style={{ marginTop: '20px', marginBottom: '20px' }} />
                  </a>
                  <img src={click3} alt="cursor" className='sm:h-[50%] lg:h-[30%] md:h-[50%] sm:right-[10%] lg:right-[10%] md:right-[10%] bottom-[0%]' style={{ position: 'absolute' }} />
                  {/* <img src={click3} alt="click3" style={{ height: '200px', position: 'absolute', right: '400px', bottom: '50px' }} /> */}
               </div>
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  Prototyping in VueJS
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  As a team, we sketched out different views that we needed and their components. We identified the components that are reusable over different views, and views that are repeated and could be dynamically rendered. We built the <span className='nanum-myeongjo-bold'>prototype in Vue.js, utilizing Bootstrap and PrimeVue</span> libraries for components. We deployed the primary user app as a Progressive Web App (PWA).
               </div>
            </div>
            <div className='inter-semibold lg:w-[80%] sm:w-[90%] md:w-[85%]' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
               Implementation Plan Sketches
               <div className='flex flex-row flex-wrap' style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <img src={implement1} alt="implement" className='mr-3 lg:w-[48%]' />
                  <img src={implement2} alt="implement" className='lg:w-[48%]' />
               </div>
            </div>
            <div className='inter-semibold lg:w-[80%] sm:w-[90%] md:w-[85%]' style={{ fontSize: '20px', marginTop: '20px', color: '#8C8383' }}>
               Final Prototype
               <div className='flex flex-row flex-wrap' style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <img src={proto1} alt="proto1" className='mr-3 lg:w-[48%]' />
                  <img src={proto2} alt="proto2" className='mr-3 lg:w-[48%]' />
                  <img src={proto3} alt="proto3" className='mr-3 lg:w-[48%]' />
                  <img src={proto4} alt="proto4" className=' lg:w-[48%]' />
               </div>
            </div>
            <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
               <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                  Usability Testing
               </div>
               <div className='nanum-myeongjo-regular w-[80%]'>
                  Our prototype was then <span className='nanum-myeongjo-bold'>extensively tested</span>, keeping in mind the ideal <span className='nanum-myeongjo-bold'>“happy-path”</span> for each task scenario.
               </div>
            </div>
            <div className='lg:w-[40%] sm:w-[90%] md:w-[70%]' style={{ marginTop: '20px', marginBottom: '20px' }}>
               <img src={testing} alt="testing"  />
            </div>
            <div className='w-[100%] justify-center items-center flex flex-col' style={{ backgroundImage: `url(${backgroundReverse})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
               <div className='nanum-myeongjo-regular w-[80%]' style={{ textAlign: 'center', fontSize: '20px', marginBottom: 50 }}>
                  Our Prisoner Express received high praise from the client and was awarded the <span className='nanum-myeongjo-extrabold'>“Best Prototype”</span> title! It was an honor to work with Prisoner Express on this project and to be given the opportunity to create an app that could potentially bring hope and foster a sense of community among prisoners.
               </div>
               <div className='lg:w-[60%] sm:w-[90%] md:w-[90%] flex flex-row flex-wrap items-center justify-center'>
                  <img src={pres1} alt="presentation" className='w-[58%] mr-3' style={{ marginBottom: 50 }} />
                  <img src={pres2} alt="presentation" className='w-[40%]' style={{ marginBottom: 50 }} />
               </div>
               <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
                  <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
                     Artifacts:
                  </div>
                  <div className='flex flex-row w-[90%] justify-start'>
                     <a className='mx-5' href="https://github.com/ssunil3232/prisoner-express-project" target="_blank" title="Github Link">
                        <img src={github} alt="github" style={{ height: '100px', marginBottom: 50 }} />
                     </a>
                     <a className='mx-5' href="https://cornell-info4340-2024sp.github.io/vue-nicorn-project/" target="_blank" title="PWA App">
                        <img src={pwaApp} alt="pwaApp" style={{ height: '100px', marginBottom: 50 }} />
                     </a>
                     <a className='mx-5' href={finalReport} target="_blank" title="Final Report">
                        <img src={report} alt="report" style={{ height: '100px', marginBottom: 50 }} />
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

export default PrisonerExpress;