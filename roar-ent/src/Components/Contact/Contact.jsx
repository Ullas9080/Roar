const Contact = () => {
  return (
    <div className=" grid-cols-1  p-4">
        {/* Heading */}
        <div className='border-b-2'>
        <div className="flex justify-center ">
          <h1 className=" lg:hidden uppercase font-robo font-bold text-white text-4xl">
            Contact-us
          </h1>
        </div>
        </div>
      
      {/* Google Map */}
      <div className="  w-full">
        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=jayanagar%204th%20block+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>


      <div className="mt-3 p-5 grid lg:grid-cols-2 background">
        {/* Phone */}
        <div className="grid-cols-2 gap-2 flex ">
          <div>
            <img
              src="https://img.icons8.com/?size=30&id=78382&format=png&color=F25081"
              alt=""
            />
          </div>
          <div className="text-white">
            <h1 >+91 9380673384</h1>
            <h1 className="text-blue-400 font-robo">Phone</h1>
          </div>
        </div>
        {/* Mail */}
        <div className="grid-cols-2 gap-2 flex mt-5 lg:mt-0">
          <div>
            <img
              src="https://img.icons8.com/?size=30&id=86875&format=png&color=F25081"
              alt=""
            />
          </div>
          <div className="text-white ">
            <h1>roar.ent23@gmail.com</h1>
            <h1 className="text-blue-400 font-robo">Mail</h1>
          </div>
        </div>
        {/* Instagram */}
        <div className="grid-cols-2 gap-2 flex mt-5 ">
          <div>
            <a href="https://www.instagram.com/roar_ent_official">
              <img
                src="https://img.icons8.com/?size=30&id=85154&format=png&color=F25081"
                alt=""
              />
            </a>
          </div>
          <div className="text-white">
            <h1>@roar_ent_official</h1>
            <h1 className="text-blue-400 font-robo">Instagram</h1>
          </div>
        </div>
        {/* Lintree */}
        <div className="grid-cols-2 gap-2 flex mt-5">
          <div>
            <a href="https://linktr.ee/roarent">
              <img
                src="https://img.icons8.com/?size=30&id=SAuKSoGPfNAW&format=png&color=F25081"
                alt=""
              />
            </a>
          </div>
          <div className="text-white">
            <h1>https://linktr.ee/roarent</h1>
            <h1 className="text-blue-400 font-robo">LinkTree</h1>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Contact;
