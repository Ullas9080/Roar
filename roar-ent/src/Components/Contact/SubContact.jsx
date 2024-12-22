import {Link} from 'react-router-dom'
export const SubContact = () => {
  return (
    <div className="w-full mt-4 mb-4 background rounded-lg p-5">
  

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Phone */}
        <div className="grid-cols-2 gap-2 flex">
          <div>
            <img
              src="https://img.icons8.com/?size=30&id=78382&format=png&color=F25081"
              alt=""
            />
          </div>
          <div className="text-white">
            <h1>+91 9380673384</h1>
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
        <div className="grid-cols-2 gap-2 flex mt-5">
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
<Link to="/Contact">
      <button
        type="submit"
        className="mt-5 flex justify-center gap-2 items-center mx-auto border-black shadow-xl text-lg bg-black backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-zinc-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group text-white"
      >
        Contact-us
        <svg
          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border group-hover:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg" 
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-gray-800 group-hover:fill-gray-800"
          ></path>
        </svg>
      </button></Link>
    </div>
  );
};
