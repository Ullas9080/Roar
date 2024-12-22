import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Core = () => {
  const [reviewOpen, setReviewOpen] = useState(null);

  const coreData = [
    {
      id: 1,
      name: "Person1",
      image: `/profile-pictures/user1.jpg`,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatesassumenda ab libero facilis rem deleniti dignissimos. Solutamolestias, vitae minus consequatur et alias eveniet blanditiis?Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sitamet consectetur adipisicing elit. Ab perferendis similique sitvoluptate facere praesentium voluptas cupiditate, quis optio. Earumipsa enim accusamus, totam deleniti inventore doloribus expeditaillo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Aliquid ullam odio omnis temporibus corporis temporerepudiandae deleniti dolore aliquam possimus maiores labore, officiaducimus dolorem porro ut fuga mollitia sequi!1",
    },
    {
      id: 2,
      name: "Person2",
      image: `/profile-pictures/user2.jpg`,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatesassumenda ab libero facilis rem deleniti dignissimos. Solutamolestias, vitae minus consequatur et alias eveniet blanditiis?Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sitamet consectetur adipisicing elit. Ab perferendis similique sitvoluptate facere praesentium voluptas cupiditate, quis optio. Earumipsa enim accusamus, totam deleniti inventore doloribus expeditaillo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Aliquid ullam odio omnis temporibus corporis temporerepudiandae deleniti dolore aliquam possimus maiores labore, officiaducimus dolorem porro ut fuga mollitia sequi!2"
    },
    {
      id: 3,
      name: "Person3",
      image: `/profile-pictures/user3.jpg`,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatesssumenda ab libero facilis rem deleniti dignissimos. Solutamolestias, vitae minus consequatur et alias eveniet blanditiis?Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sitamet consectetur adipisicing elit. Ab perferendis similique sitvoluptate facere praesentium voluptas cupiditate, quis optio. Earumipsa enim accusamus, totam deleniti inventore doloribus expeditaillo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Aliquid ullam odio omnis temporibus corporis temporerepudiandae deleniti dolore aliquam possimus maiores labore, officiaducimus dolorem porro ut fuga mollitia sequi!3",
    },
    {
      id: 4,
      name: "Person4",
      image: `/profile-pictures/user4.jpg`,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatesassumenda ab libero facilis rem deleniti dignissimos. Solutamolestias, vitae minus consequatur et alias eveniet blanditiis?Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sitamet consectetur adipisicing elit. Ab perferendis similique sitvoluptate facere praesentium voluptas cupiditate, quis optio. Earumipsa enim accusamus, totam deleniti inventore doloribus expeditaillo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Aliquid ullam odio omnis temporibus corporis temporerepudiandae deleniti dolore aliquam possimus maiores labore, officiaducimus dolorem porro ut fuga mollitia sequi!4",
    },
    {
      id: 5,
      name: "Person5",
      image: `/profile-pictures/user5.jpg`,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatesassumenda ab libero facilis rem deleniti dignissimos. Solutamolestias, vitae minus consequatur et alias eveniet blanditiis?Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sitamet consectetur adipisicing elit. Ab perferendis similique sitvoluptate facere praesentium voluptas cupiditate, quis optio. Earumipsa enim accusamus, totam deleniti inventore doloribus expeditaillo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Aliquid ullam odio omnis temporibus corporis temporerepudiandae deleniti dolore aliquam possimus maiores labore, officiaducimus dolorem porro ut fuga mollitia sequi!5",
    },
    {
      id: 6,
      name: "Person6",
      image: `/profile-pictures/user6.jpg`,
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatesassumenda ab libero facilis rem deleniti dignissimos. Solutamolestias, vitae minus consequatur et alias eveniet blanditiis?Provident pariatur unde deleniti perferendis? Lorem ipsum, dolor sitamet consectetur adipisicing elit. Ab perferendis similique sitvoluptate facere praesentium voluptas cupiditate, quis optio. Earumipsa enim accusamus, totam deleniti inventore doloribus expeditaillo. Autem. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Aliquid ullam odio omnis temporibus corporis temporerepudiandae deleniti dolore aliquam possimus maiores labore, officiaducimus dolorem porro ut fuga mollitia sequi!6",
    },
  ];

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
    <div className="w-full mt-1 border-b-2">
      <h1 className="text-blue-300 text-4xl font-robo text-center mb-5 underline ">
        Core Team
      </h1>
      <div className="flex justify-center items-center text-center sm:mb-7 lg:mb-2">
        <p className="text-lg text-zinc-300 mt-3">
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
      <Slider {...settings}>
        {coreData.map((person) => (
          <div key={person.id}>
             
            <img
              src={person.image}
              alt={person.name}
              width={350}
              className="rounded-full "
              onClick={() =>
               setReviewOpen((prev)=>prev === person.id ? null : person.id)
             }
            />
            
            <h3 className="text-center text-white text-lg">{person.name}</h3>
           
            
            {reviewOpen === person.id && (
              <div className="text-blue-200 font-robo px-5 text-center border-3">
                {person.review}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Core;
