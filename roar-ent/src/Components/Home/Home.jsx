import {Link} from "react-router-dom"
import "./Home.css"
const Home = () => {


  
  return (
    <div className="w-full body ">
      <div className="flex justify-center mt-7">
        <h1 className="uppercase font-robo font-bold text-white text-4xl">
          Roar ent
        </h1>
      </div>

      <div className="flex justify-center items-center text-center sm:mb-7 lg:mb-2">
        <p className="text-lg text-zinc-300  mt-7">
          ROAR ENT, is a youth community platform that bridgesthe gap between
          India's most capable youth and the work's they love to do through
          engagements andexperiences. We devote our energy first to making sure
          we're adding to the experiences and skillsets of India's Gen Z, and
          partner with companies to deliver the same, in innovative and creative
          ways that solve otherwise complex marketing issues for them as well.
        </p>
      </div> 

<Link to="/About" className=""> 
<button className="button " data-text="Awesome">
    <span className="actual-text">Explore</span>
    <span aria-hidden="true" className="hover-text">Explore</span>
</button>
</Link>


    </div>
  );
};

export default Home;
