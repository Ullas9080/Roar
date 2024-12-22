import AOS from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Core from '../../Core/Core.jsx'
import { SubContact } from '../Contact/SubContact.jsx';
import Mission from '../Mission/Mission.jsx';
const About = () => {

  useEffect(() => {
    AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 50,
    });
    }, []);

  return (
    <div className='body'>
      {/* Heading */}
      <div className='border-b-2'>
        <div className="flex justify-center ">
          <h1 className=" lg:hidden uppercase font-robo font-bold text-white text-4xl">
            About Us
          </h1>
        </div>
     
      </div>

      {/* Behind the sucess */}
      <div className="grid  grid-cols-1 lg:grid-cols-2 mt-10 gap-5" >
        {/* Ceo Image*/}
        <div className=''>
          {/* Ceo Name */}
          <div>
            <h1 className="text-3xl uppercase text-white font-robo">Darshan</h1>
            <p className="text-blue-300 font-robo uppercase">Ceo & Founder</p>
          </div>

          <div>
            <img
              src="/public/profile-pictures/user7.jpg"
              alt=""
              width={350}
              className="rounded-full"
            />
          </div>
        </div>

        {/* About him */}
        <div>
          <h1 className="text-4xl uppercase text-blue-300 font-robo">
            Behind the <br /> Sucess
          </h1>
          <p className="text-left text-zinc-300 mt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            assumenda ab libero facilis rem deleniti dignissimos. Soluta
            molestias, vitae minus consequatur et alias eveniet blanditiis?
            Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Ab perferendis similique sit
            voluptate facere praesentium voluptas cupiditate, quis optio. Earum
            ipsa enim accusamus, totam deleniti inventore doloribus expedita
            illo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid ullam odio omnis temporibus corporis tempore
            repudiandae deleniti dolore aliquam possimus maiores labore, officia
            ducimus dolorem porro ut fuga mollitia sequi!
          </p>
        </div>
      </div>
  
{/* Core Team */}
<Core/>
<Mission/>
<SubContact/>
    </div>
  );
};

export default About;
