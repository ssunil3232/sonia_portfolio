import backgroundSvg from '../img/insightEdge/insightEdge.svg';
import graphic1 from '../img/insightEdge/graphic1.webp';
import logo from '../img/insightEdge/logo.webp';
import suite from '../img/insightEdge/suiteDisplay.webp';
import responses from '../img/insightEdge/dtiResponses.webp';
import findings from '../img/insightEdge/findings.webp';
import aspiring from '../img/insightEdge/aspiring.webp';
import emerging from '../img/insightEdge/emerging.webp';
import toolDetails from '../img/insightEdge/toolDetails.webp';
import firstGif from '../img/insightEdge/first.gif';
import secGif from '../img/insightEdge/second.gif';
import thirdGif from '../img/insightEdge/third.gif';
import fourthGif from '../img/insightEdge/fourth.gif';
import fifthGif from '../img/insightEdge/fifth.gif';
import sixthGif from '../img/insightEdge/sixth.gif';
import teamPicture from '../img/insightEdge/teamPicture.png';
import wireframe from '../img/insightEdge/wireframe.webp';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const InsightEdge = () => {
   //const navigate = useNavigate();
   const navigate = useNavigate();
   return (
      <div className="flex w-screen flex-col items-center overflow-x-hidden relative" style={{ backgroundImage: `url(${backgroundSvg})`, backgroundSize: 'cover'}}>
         <div className='flex flex-row justify-evenly items-center' style={{ marginTop: '150px', marginLeft: '50px' }}>
            <div className="title text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
               <div className='poiret-one-regular'>UNLOCKING</div>
               <div className='poiret-one-regular'>INSTAGRAM'S</div>
               <div className='poiret-one-regular'>POTENTIAL</div>
               <img src={logo} alt="logo" style={{ height: '50px', width: '290px' }} />
            </div>
            <img src={graphic1} className="block sm:hidden" alt="graphic1" style={{ height: '450px', width: '450px' }} />
         </div>
         <div>
            <img src={suite} alt="suite" />
         </div>
         <div className='nanum-myeongjo-regular w-[60%]' style={{ textAlign: 'center', fontSize: '25px' }}>
            As part of the Digital Technology Practicum (DTI) project, we collaborated with Meta-Instagram to ideate on a product that can enhance and alleviate the pains experienced in
            Content Creation.
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               Problem Statement
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               One of the primary reasons users prefer other content creation platforms such as TikTok is due to their <span className='nanum-myeongjo-bold'>reduced barrier to discoverability</span>. Research shows that Instagram heavily monetizes advertising, requiring content shared to have a large number of views. Hence, to increase revenue through advertising, we need to improve content discoverability.
            </div>
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               User Research
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               We interviewed 3 content creators who engage in both Instagram and TikTok platforms for content creation to understand their preference of platform and the hurdles they face when creating content on Instagram. The following are <span className='nanum-myeongjo-bold'>our findings</span>:
            </div>
         </div>
         <div className='sm:w-[80%] md:w-[80%] lg:w-[50%] flex items-center justify-center'>
            <img src={responses} alt="responses" className='sm:w-[90%] md:w-[80%] lg:w-[100%]' />
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               Findings
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               Our research suggested that content creators tend to gravitate away from Instagram platform for a variety of reasons. The following are our <span className='nanum-myeongjo-bold'>main takeaways</span>:
            </div>
         </div>
         <div className='sm:w-[80%] md:w-[80%] lg:w-[50%] flex items-center justify-center'>
            <img src={findings} alt="findings" className='sm:w-[100%] md:w-[80%] lg:w-[100%]'/>
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
            <div className='nanum-myeongjo-regular w-[80%]'>
               These findings illuminated the significant obstacles young/new content creators face on Instagram. Establishing a social media presence and credibility can be challenging, particularly in the initial stages, and Instagram being a more established social media platform, is also saturated with established influencers, making it less enticing for building a presence.
            </div>
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               User Personas
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               Based on the User Research findings, we crafted two user personas of different tiers of influencers - Aspiring content creator (0 - 10K followers), Emerging content creators (10K - 100K followers) & Established content creators (100K+ followers). We decided to <span className='nanum-myeongjo-bold'>focus on Aspiring & Emerging content creators</span> as they hold a significant market share of influencers on Instagram. The following are the personas drafted:
            </div>
         </div>
         <div className='inter-bold justify-center items-center sm:w-[80%] md:w-[80%] lg:w-[60%]' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
            Aspiring Content Creator
            <img src={aspiring} alt="aspiring"/>
         </div>
         <div className='inter-bold justify-center items-center sm:w-[80%] md:w-[80%] lg:w-[60%]' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
            Emerging Content Creator
            <img src={emerging} alt="emerging" />
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '20%', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               The Solution
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               Our idea focuses on enhancing discoverability by leveraging AI to provide analytics and editing suggestions, enabling content creators to produce faster, higher-quality content, ultimately leading to increased views and discoverability.
            </div>
         </div>
         <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <img src={logo} alt="logo" style={{ height: '50px', width: '290px' }} />
         </div>
         <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <img src={toolDetails} alt="toolDetails" style={{ width: '600px' }} />
         </div>
         <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-screen gap-3">
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 1
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px' }}>
                  Optimal Placement and Color Recommendation
               </span>
               <div>
                  <img src={firstGif} alt="firstGif" style={{ height: '400px', marginTop: 20, marginBottom: 20 }} />
               </div>
            </div>
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 2
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px' }}>
                  AI-Powered Caption & Hashtag Generation
               </span>
               <div>
                  <img src={secGif} alt="secondGif" style={{ height: '400px', marginTop: 20, marginBottom: 20 }} />
               </div>
            </div>
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 3
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px' }}>
                  Instagram-Ready Color Adjustment
               </span>
               <div>
                  <img src={thirdGif} alt="thirdGif" style={{ height: '400px', marginTop: 20, marginBottom: 20 }} />
               </div>
            </div>
         </div>
         <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-screen gap-3">
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 4
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px' }}>
                  Visual Transition Order Recommendation
               </span>
               <div>
                  <img src={fourthGif} alt="fourthGif" style={{ height: '400px', marginTop: 20, marginBottom: 50 }} />
               </div>
            </div>
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 5
               <span className='inter-light flex text-center w-[60%]' style={{ fontSize: '20px' }}>
                  Non-Engagement & Audience Segmentation Analysis
               </span>
               <div>
                  <img src={fifthGif} alt="fifthGif" style={{ height: '400px', marginTop: 20, marginBottom: 50 }} />
               </div>
            </div>
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 6
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px' }}>
                  Collaborative Editing & Review
               </span>
               <div>
                  <img src={sixthGif} alt="sixthGif" style={{ height: '400px', marginTop: 20, marginBottom: 50 }} />
               </div>
            </div>
         </div>
         <div className='nanum-myeongjo-regular w-[80%]' style={{ textAlign: 'center', fontSize: '20px', marginBottom: 50 }}>
            Our project <span className='nanum-myeongjo-extrabold'>won the ‘Best Presentation’ award</span> for well-thought through and well designed wireframes that conveyed our feature ideas. As well, our solution was praised for its ability to be seamlessly integrated with existing Instagram tools, and utilizing AI enhancements, which could give Instagram a competitive edge!
         </div>
         <div className='justify-center items-center sm:w-[80%] md:w-[80%] lg:w-[60%]'>
            <img src={teamPicture} alt="teamPicture" style={{  marginBottom: 50 }} />
         </div>
         <div className='nanum-myeongjo-extrabold w-[90%]' style={{ fontSize: '25px' }}>
            Wireframe Link
         </div>
         <a className='lg:w-[85%] sm:w-[80%] md:w-[80%]' href="https://www.figma.com/design/BI2XetztSbvG5K00XR1eOT/User-Stories?node-id=128%3A1214&t=HXJJebhBfwa50Anq-1" target="_blank" title="Wireframe Link" style={{ marginBottom: 50 }}>
            <img src={wireframe} />
         </a>
         <ScrollTop />
         <Button className='back-btn' onClick={() => navigate(-1)} icon="pi pi-arrow-left" aria-label="back" style={{position: 'fixed', right:'10px', top: '10px'}} />
      </div>
      
   );
};

export default InsightEdge;