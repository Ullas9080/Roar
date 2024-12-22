import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SubContact} from '../Contact/SubContact'
const Partnership = () => {
  const Images = [
    { id: 1, image: "/Partner/actc.png" ,name:'ACTC'},
    { id: 2, image: "/Partner/Bahumukhi.png",name:'Bahumuki' },
    { id: 3, image: "/Partner/boompanda.jpeg" ,name:'Boompanda'},
    { id: 4, image: "/Partner/far.jpg",name:'FAR' },
    { id: 5, image: "/Partner/gracetech.png",name:'GraceTeach' },
    { id: 6, image: "/Partner/kgenLogo.svg" ,name:"KGEN"},
    { id: 7, image: "/Partner/koncept.jpg", name:'Koncept'},
    { id: 8, image: "/Partner/Naaraa.png",name:'Naaraa' },
    { id: 9, image: "/Partner/noizz.jpeg",name:'Noizz' },
    { id: 10, image: "/Partner/raze.jpeg",name:'Raze' },
    { id: 11, image: "/Partner/teragames.webp" ,name:'TeraGames'},
    { id: 12, image: "/Partner/TR.jpg",name:'TR'},
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div >
    {/* Heading */}
    <div className='border-b-2'>
        <div className="flex justify-center ">
          <h1 className=" lg:hidden uppercase font-robo font-bold text-white text-4xl">
         Partnership
          </h1>
        </div>
        </div>
      {/* Image */}
      <div>
      <Slider {...settings}>
        {Images.map((i) => (
          <div key={i.id} className="text-center items-center justify-center mt-5">
             
            <img
              src={i.image}
              alt={i.name}
              width={350}
              className="rounded-full gap-3 lg:w-[150px] border-2 border-red-50"
            />
            
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {Images.reverse().map((i) => (
          <div key={i.id} className="text-center items-center justify-center mt-5">
             
            <img
              src={i.image}
              alt={i.name}
              width={350}
              className="rounded-full gap-3 lg:w-[150px] border-2 border-red-50"
            />
            
          </div>
        ))}
      </Slider>
      </div>
    <SubContact/>
    </div>
  );
};

export default Partnership;
