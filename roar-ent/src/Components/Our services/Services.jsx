import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {

const Images=[
  {id:1,
    name:'Production',
    image:'/Services/Production.png'
  },
  {id:2,
    name:'Application Development',
    image:'/Services/Software-Application-Development.webp'
  },
  {id:3,
    name:'Games',
    image:'/Services/gaming.jpg'
  },
  {id:4,
    name:'Brand Promotion',
    image:'/Services/Brand-promotion-include.jpeg'
  },
  {id:5,
    name:'Artish Management',
    image:'/Services/artist-management.jpg'
  },
  {id:6,
    name:'Content Creator',
    image:'/Services/content_create.webp'
  },
  {id:7,
    name:'Content Design',
    image:'/Services/content_creator.jpeg'
  },
  {id:8,
    name:'Event Management',
    image:'/Services/production.jpeg'
  },
  {id:9,
    name:'Digital Management',
    image:'/Services/digital marketing.png'
  },
]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <div>
  {/* Heading */}
  <div className='border-b-2'>
        <div className="flex justify-center ">
          <h1 className="  uppercase font-robo font-bold text-white text-4xl">
        Services we offer
          </h1>
        </div>
        </div>

        <Slider {...settings} className="mt-4">
        {Images.map((i)=>{
          return <div key={i.id}>
<div><img src={i.image} alt={i.image} width={300}/>
<h1 className="  font-robo font-bold text-white text-lg">
{i.name}  
          </h1></div>
          </div>
        })}
      </Slider>
      <div className="flex justify-center items-center text-center sm:mb-7 lg:mb-2">
        <p className="text-lg text-zinc-400 mt-3">
          ROAR ENT, is a youth community platform that bridges the gap between
          India's most capable youth and the work's they love to do through
          engagements and experiences. While we were born out of our own
          realizations and needs as students, our growth is a result of us
          aligning with other like-minded youth at large. We devote our energy
          first to making sure we're adding to the experiences and skillsets of
          India's Gen Z, and partner with companies to deliver the same, in
          innovative and creative ways that solve otherwise complex marketing
          issues for them as well.
        </p>
      </div>
        
    </div>
  )
}

export default Services
