import Image from "next/image";

const Home = () => {
    return (
      <div>
        <>
          <div
            id="navBar"
            className="sticky-top flex justify-between items-center py-2"
          >
            <Image
              src="/logo.png"
              alt="logo"
                        className="w-[70px] lg:flex"
                        width={50}
                        height={50}
            />
            <nav className="hidden md:block">
              <ul className="list-none text-white inline-flex">
                <a href="#intro">
                  <li className=" hover:underline decoration-1 mx-3">Intro</li>
                </a>
                <a href="#countdown">
                  <li className="hover:underline decoration-1 mx-3">
                    Countdown
                  </li>
                </a>
                <a href="#notes">
                  <li className="hover:underline decoration-1 mx-3">Notes</li>
                </a>
                <a href="#location">
                  <li className="hover:underline decoration-1 mx-3">
                    Location
                  </li>
                </a>
                <a href="#moreInfo">
                  <li className="hover:underline decoration-1 mx-3">Contact</li>
                </a>
              </ul>
            </nav>
            <div className="toggleSwitch">
              <button className="toggle" onclick="toggleMode()">
                <i className="fa-solid fa-toggle-on toggleon" id="toggle" />
              </button>
            </div>
            <button onclick="toggleSwitch" />
            <div className="lg:hidden">
              <i className="fa-solid fa-bars text-red-100 text-3xl mb-4" />
            </div>
            <button className="hidden lg:flex bg-red-700 py-2 px-8 text-white rounded text-base ">
              <i className="fa-solid fa-phone-volume py-1" />
              Call Us
            </button>
          </div>
          {/* Header Section */}
          <header>
            {/* <div className="owl-carousel">
              <div className="item1" />
              <div className="item2" />
              <div className="item3" />
            </div> */}
            <div className="navHead">
              <div className="mt-14">
                <p className="text-center mt-28 text-[#fdac2b] font-mono italic text-base pt-12">
                  imomotimi foundation presents
                </p>
                <h1 className="text-white font-extrabold font-serif text-3xl text-center">
                  Imomotimi Ijaw <br />
                  Dance Contest 2024
                </h1>
                <div className="text-center">
                  <button className="bg-red-700 py-2 px-8  text-white rounded text-base">
                    Download Entry Form{" "}
                    <i className="fa-solid download fa-download" />
                  </button>
                </div>
                <p className="text-white text-center md:font-medium font-light pt-5">
                  All duly filled out forms and the entry fees should be brought
                  along to the audition.
                </p>
              </div>
              <div className="flex  justify-center pt-20  text-white motion-safe:animate-bounce md:h-3 md:mt-1">
                <i className="fa-solid fa-computer-mouse" />
              </div>
              <Image
                id="topsmoke"
                className="w-full md:mt-14 mt-6 md:pt-36 pt-36"
                src="/shape-top-grey-80.png"
                            alt="smokes"
                            width={1000}
                            height={100}
              />
            </div>
          </header>
        </>
      </div>
    );
}

export default Home;