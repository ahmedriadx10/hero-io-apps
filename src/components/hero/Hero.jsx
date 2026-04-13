import heroImg from '../../assets/images/hero.png';
import playStore  from '../../assets/images/play-store.png'
import appStore from '../../assets/images/app-store.png'
const Hero = () => {
  return (
    <section>

     <div className="space-y-5  text-center mx-auto">
  <h2 className="text-4xl lg:text-7xl font-bold">We Build <br />
<span className="bg-linear-[160deg,#632EE3,#9F62F2] bg-clip-text  text-transparent">Productive</span> App</h2>

<p className="md:text-xl w-[90%] max-w-4xl mx-auto text-[#627382]">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

<div className='space-x-4 mb-10'>

  <button className='btn font-semibold'><img src={playStore} className='h-6 ' alt="play store image" /><span>Google Play</span></button>
  <button className='btn font-semibold'> <img src={appStore} className='h-6 ' alt="app store image" /> <span> App Store </span></button>
</div>

</div>

{/* hero img */}


<div className='flex justify-center w-[90%] mx-auto'><img src={heroImg} alt="" /></div>
    </section>
  );
};

export default Hero;