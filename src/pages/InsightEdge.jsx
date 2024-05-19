import backgroundSvg from '../img/insightEdge/InsightEdge.svg';
import graphic1 from '../img/insightEdge/graphic1.png';
import logo from '../img/insightEdge/logo.png';
import suite from '../img/insightEdge/suiteDisplay.png';
import responses from '../img/insightEdge/dtiResponses.png';
import findings from '../img/insightEdge/findings.png';
import aspiring from '../img/insightEdge/aspiring.png';
import emerging from '../img/insightEdge/emerging.png';
import toolDetails from '../img/insightEdge/toolDetails.png';

const InsightEdge = () => {
   //const navigate = useNavigate();
   return (
      <div className="flex w-screen flex-col items-center overflow-x-hidden" style={{ backgroundImage: `url(${backgroundSvg})`, backgroundSize: 'cover' }}>
         <div className='flex flex-row justify-evenly items-center' style={{ marginTop: '150px', marginLeft: '50px' }}>
            <div className="title" style={{ fontSize: '8rem' }}>
               <div className='poiret-one-regular'>UNLOCKING</div>
               <div className='poiret-one-regular'>INSTAGRAM'S</div>
               <div className='poiret-one-regular'>POTENTIAL</div>
               <img src={logo} alt="logo" style={{ height: '50px', width: '290px' }} />
            </div>
            <img src={graphic1} alt="graphic1" style={{ height: '450px', width: '450px' }} />
         </div>
         <div>
            <img src={suite} alt="suite" />
         </div>
         <div className='nanum-myeongjo-regular w-[60%]' style={{ textAlign: 'center', fontSize: '25px' }}>
            As part of the Digital Technology Practicum (DTI) project, we collaborated with Meta-Instagram to ideate on a product that can enhance and alleviate the pains experienced in
            Content Creation.
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               Problem Statement
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               One of the primary reasons users prefer other content creation platforms such as TikTok is due to their <span className='nanum-myeongjo-bold'>reduced barrier to discoverability</span>. Research shows that Instagram heavily monetizes advertising, requiring content shared to have a large number of views. Hence, to increase revenue through advertising, we need to improve content discoverability.
            </div>
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               User Research
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               We interviewed 3 content creators who engage in both Instagram and TikTok platforms for content creation to understand their preference of platform and the hurdles they face when creating content on Instagram. The following are <span className='nanum-myeongjo-bold'>our findings</span>:
            </div>
         </div>
         <div>
            <img src={responses} alt="responses" style={{ height: '600px' }} />
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               Findings
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               Our research suggested that content creators tend to gravitate away from Instagram platform for a variety of reasons. The following are our <span className='nanum-myeongjo-bold'>main takeaways</span>:
            </div>
         </div>
         <div>
            <img src={findings} alt="findings" style={{ height: '200px' }} />
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
            <div className='nanum-myeongjo-regular w-[80%]'>
               These findings illuminated the significant obstacles young/new content creators face on Instagram. Establishing a social media presence and credibility can be challenging, particularly in the initial stages, and Instagram being a more established social media platform, is also saturated with established influencers, making it less enticing for building a presence.
            </div>
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
            <div className='nanum-myeongjo-extrabold' style={{ fontSize: '25px' }}>
               User Personas
            </div>
            <div className='nanum-myeongjo-regular w-[80%]'>
               Based on the User Research findings, we crafted two user personas of different tiers of influencers - Aspiring content creator (0 - 10K followers), Emerging content creators (10K - 100K followers) & Established content creators (100K+ followers). We decided to <span className='nanum-myeongjo-bold'>focus on Aspiring & Emerging content creators</span> as they hold a significant market share of influencers on Instagram. The following are the personas drafted:
            </div>
         </div>
         <div className='inter-bold' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
            Aspiring Content Creator
            <img src={aspiring} alt="aspiring" style={{ height: '500px', width: '850px' }} />
         </div>
         <div className='inter-bold' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
            Emerging Content Creator
            <img src={emerging} alt="emerging" style={{ height: '500px', width: '850px' }} />
         </div>
         <div className='flex flex-col justify-start w-screen' style={{ marginLeft: '150px', marginTop: '20px' }}>
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
         <div className="grid grid-cols-3 w-screen gap-3">
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 1
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px'}}>
               Optimal Placement and Color Recommendation
               </span>
            </div>
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 2
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px'}}>
               AI-Powered Caption & Hashtag Generation
               </span>
            </div>
            <div className='inter-semibold flex justify-center items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', color: '#8C8383' }}>
               #Feature 3
               <span className='inter-light flex text-center w-[50%]' style={{ fontSize: '20px'}}>
               Instagram-Ready Color Adjustment
               </span>
            </div>
         </div>
      </div>
   );
};

export default InsightEdge;