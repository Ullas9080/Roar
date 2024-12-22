
import "./Activites.css";
const Activities = () => {
  const FamilyFunction = [
    {
      id: 1,
      images: "/Events/Family function/Screenshot 2024-12-15 235019.png",
    },
    {
      id: 2,
      images: "/Events/Family function/Screenshot 2024-12-15 235043.png",
    },
    {
      id: 3,
      images: "/Events/Family function/Screenshot 2024-12-15 235105.png",
    },
    {
      id: 4,
      images: "/Events/Family function/Screenshot 2024-12-15 235144.png",
    },
    { show: true },
  ];
  const Gardencity = [
    { id: 1, images: "/Events/Gardencity/Screenshot 2024-12-15 233143.png"},
    { id: 2, images: "/Events/Gardencity/Screenshot 2024-12-15 233022.png" },
    { id: 3, images: "/Events/Gardencity/Screenshot 2024-12-15 233257.png" },
    { id: 4, images: "/Events/Gardencity/Screenshot 2024-12-15 233329.png" },
  ];

  const Hitachi = [
    { id: 1, images: "/Events/Hitachi/Screenshot 2024-12-15 234421.png" },
    { id: 2, images: "/Events/Hitachi/Screenshot 2024-12-15 234444.png" },
    { id: 3, images: "/Events/Hitachi/Screenshot 2024-12-15 234511.png" },
  ];

  const Leelaplace = [
    { id: 1, images: "/Events/leelaplace/Screenshot 2024-12-15 233709.png" },
    { id: 2, images: "/Events/leelaplace/Screenshot 2024-12-15 233752.png" },
    { id: 3, images: "/Events/leelaplace/Screenshot 2024-12-15 233813.png" },
    { id: 4, images: "/Events/leelaplace/Screenshot 2024-12-15 233908.png" },
  ];

  const LilEvents = [
    { id: 1, images: "/Events/lilevnt/Screenshot 2024-12-15 235441.png" },
    { id: 2, images: "/Events/lilevnt/Screenshot 2024-12-15 235458.png" },
    { id: 3, images: "/Events/lilevnt/Screenshot 2024-12-15 235514.png" },
    { id: 4, images: "/Events/lilevnt/Screenshot 2024-12-15 235529.png" },
  ];
  const MultipleVerse = [
    { id: 1, images: "/Events/Multipleverse/Screenshot 2024-12-15 231447.png" },
    { id: 2, images: "/Events/Multipleverse/Screenshot 2024-12-15 231520.png" },
    { id: 3, images: "/Events/Multipleverse/Screenshot 2024-12-15 231607.png" },
    { id: 4, images: "/Events/Multipleverse/Screenshot 2024-12-15 231722.png" },
  ];
  const TheBay = [
    { id: 1, images: "/Events/Thebay/Screenshot 2024-12-15 230909.png" },
    { id: 2, images: "/Events/Thebay/Screenshot 2024-12-15 230946.png" },
    { id: 3, images: "/Events/Thebay/Screenshot 2024-12-15 231010.png" },
    { id: 4, images: "/Events/Thebay/Screenshot 2024-12-15 231104.png" },
  ];
  const Valorant = [
    { id: 1, images: "/Events/valorant/Screenshot 2024-12-15 234642.png" },
    { id: 2, images: "/Events/valorant/Screenshot 2024-12-15 234701.png" },
    { id: 3, images: "/Events/valorant/Screenshot 2024-12-15 234740.png" },
  ];
  const WellFroGo = [
    { id: 1, images: "/Events/wellsforgo/Screenshot 2024-12-15 230040.png" },
    { id: 2, images: "/Events/wellsforgo/Screenshot 2024-12-15 230222.png" },
    { id: 3, images: "/Events/wellsforgo/Screenshot 2024-12-15 230318.png" },
    { id: 3, images: "/Events/wellsforgo/Screenshot 2024-12-15 230346.png" },
  ];

  return (
    <div>
      {/* Heading */}
      <div className="border-b-2">
        <div className="flex justify-center ">
          <h1 className=" lg:hidden uppercase font-robo font-bold text-white text-4xl">
            Activities
          </h1>
        </div>
      </div>
      {/* Family event  */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
        {/* name */}
        <div className="md:border-r-2  ">
          <img
            src="/Events/Family function/Screenshot 2024-12-15 235043.png"
            alt=""
            width={200}
            className="md:w-[350px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">Family Function</p>
            <p className="text-orange-500">@Satya sai samkrutha sadan</p>
          </h1>
        </div>
        {/* Show Image */}
        <div className="grid grid-cols-2 ">
          {FamilyFunction.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[150px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* leelaplace  */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
         {/* Show Image */}
         <div className="grid grid-cols-2  ">
          {Leelaplace.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[150px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
        {/* Name */}
        <div className="  ">
          <img
            src="Events/leelaplace/Screenshot 2024-12-15 233752.png"
            alt=""
            width={200}
            className="md:w-[350px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">Onam fest</p>
            <p className="text-orange-500">@leela place</p>
          </h1>
        </div>
       
      </div>
      {/* The Bay  */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
        {/* name */}
        <div className="md:border-r-2  ">
          <img
            src="/Events/Thebay/Screenshot 2024-12-15 230946.png"
            alt=""
            width={200}
            className="md:w-[250px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">oktoberfest</p>
            <p className="text-orange-500">@the bay</p>
          </h1>
        </div>
        {/* Show Image */}
        <div className="grid grid-cols-2 ">
          {TheBay.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[150px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
          {/*  Multipleverse */}
          <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
         {/* Show Image */}
         <div className="grid grid-cols-2  ">
          {MultipleVerse.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[150px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
        {/* Name */}
        <div className="  ">
          <img
            src="/Events/Multipleverse/Screenshot 2024-12-15 231722.png"
            alt=""
            width={200}
            className="md:w-[350px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">Golbal school</p>
            <p className="text-orange-500">@multiple venue's</p>
          </h1>
        </div>
       
      </div>
      {/* wellsforgo */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
        {/* name */}
        <div className="md:border-r-2  ">
          <img
            src="/Events/wellsforgo/Screenshot 2024-12-15 230040.png"
            alt=""
            width={200}
            className="md:w-[350px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">ohana</p>
            <p className="text-orange-500">@wells forgo</p>
          </h1>
        </div>
        {/* Show Image */}
        <div className="grid grid-cols-2 ">
          {WellFroGo.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[100px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
  
      

      {/* Valorant  */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
         {/* Show Image */}
         <div className="grid grid-cols-2  ">
          {Valorant.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[150px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
        {/* Name */}
        <div className="  ">
          <img
            src="Events/valorant/Screenshot 2024-12-15 234642.png"
            alt=""
            width={200}
            className="md:w-[150px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className=""> Valorant meet and greet</p>
            <p className="text-orange-500">@Girias ,kodehalli gate</p>
          </h1>
        </div>
       
      </div>
            {/* Hitachi */}
            <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
      
      {/* name */}
      <div className="md:border-r-2  ">
        <img
          src="Events/Hitachi/Screenshot 2024-12-15 234444.png"
          alt=""
          width={100}
          className="md:w-[150px]  rounded-xl"
        />
        <h1 className="text-white font-robo uppercase mt-3">
          <p className="">Family Events</p>
          <p className="text-orange-500">@hitachi,madevpura</p>
        </h1>
      </div>
        {/* Show Image */}
        <div className="grid grid-cols-2 ">
        {Hitachi.map((i, index) => {
          return (
            <div key={index}>
              <img
                src={i.images}
                alt=""
                width={100}
                className="md:w-[100px] rounded-xl "
              />
            </div>
          );
        })}
      </div>
    </div>
      {/* Gardencity  */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
         {/* Show Image */}
         <div className="grid grid-cols-2  ">
          {Gardencity.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[150px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
        {/* Name */}
        <div className="  ">
          <img
            src="/Events/Gardencity/Screenshot 2024-12-15 233257.png"
            alt=""
            width={200}
            className="md:w-[350px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">hp omen</p>
            <p className="text-orange-500">@Gardern city university</p>
          </h1>
        </div>
       
      </div>
      {/* Little input */}
      <div className="grid grid-cols-2 gap-7 text-center md:text-left mt-4 ">
        {/* name */}
        <div className="md:border-r-2  ">
          <img
            src="/Events/lilevnt/Screenshot 2024-12-15 235529.png"
            alt=""
            width={200}
            className="md:w-[250px]  rounded-xl"
          />
          <h1 className="text-white font-robo uppercase mt-3">
            <p className="">little input</p>
            <p className="text-orange-500">@intuit ,escape</p>
          </h1>
        </div>
        {/* Show Image */}
        <div className="grid grid-cols-2 ">
          {LilEvents.map((i, index) => {
            return (
              <div key={index}>
                <img
                  src={i.images}
                  alt=""
                  width={100}
                  className="md:w-[100px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
