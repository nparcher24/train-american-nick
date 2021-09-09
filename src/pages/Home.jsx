import React from "react";

export default function Home() {
  const [showAboutVid, setShowAboutVid] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  function showAboutVideo() {
    setShowAboutVid(true);
  }

  function hideAboutVideo() {
    console.log("alsdkfjkladsjfkalsdfj");
    // setShowAboutVid(false);
  }

  //   function showContactForm() {
  //     document.getElementById("contactModal").style.display = "flex";
  //   }

  //   function hideContactForm() {
  //     document.getElementById("contactModal").style.display = "none";
  //   }

  //   window.addEventListener("scroll", () => {
  //     var top = window.scrollY;
  //     if (top > 400) {
  //       document.getElementById("navbarDiv").style.backgroundColor = "white";
  //       document.getElementById("navbarDiv").style.boxShadow =
  //         "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  //       document.getElementById("navLogo").src =
  //         "https://firebasestorage.googleapis.com/v0/b/site-cad0c.appspot.com/o/dark-logo.svg?alt=media&token=591823b3-2280-448f-907d-25b3a57cb2a8";
  //       document.getElementById("navbarButton").style.color = "black";
  //       document.getElementById("franchiseButton").style.color = "black";

  //       document.getElementById("hamburgerButton").style.color = "black";
  //       document.getElementById("hamburgerButton").style.borderColor = "black";
  //     } else {
  //       document.getElementById("navbarDiv").style.backgroundColor =
  //         "transparent";
  //       document.getElementById("navbarDiv").style.boxShadow = "0 0 #0000";
  //       document.getElementById("navLogo").src =
  //         "https://firebasestorage.googleapis.com/v0/b/site-cad0c.appspot.com/o/Light%20Logo.svg?alt=media&token=a7de9d98-969d-4177-b4b1-0e54408f7fda";
  //       document.getElementById("navbarButton").style.color = "white";
  //       document.getElementById("franchiseButton").style.color = "white";
  //       document.getElementById("hamburgerButton").style.color = "white";
  //       document.getElementById("hamburgerButton").style.borderColor = "white";
  //     }
  //   });

  return (
    <div>
      <div
        class="fixed z-50 w-full px-8 lg:px-32 transition duration-500"
        id="navbarDiv"
      >
        <nav class="flex flex-row justify-between items-center py-3 max-w-6xl mx-auto">
          <a
            class="text-3xl text-white font-semibold leading-none hover:bg-gray-300 p-2 rounded hover:bg-opacity-30 transition duration-500 hover:shadow-sm"
            href="/"
          >
            <img
              id="navLogo"
              src="https://firebasestorage.googleapis.com/v0/b/site-cad0c.appspot.com/o/Light%20Logo.svg?alt=media&token=a7de9d98-969d-4177-b4b1-0e54408f7fda"
              alt="10.40.10 Fitness"
              width="80"
            />
          </a>
          <div class="lg:hidden">
            <button
              class="navbar-burger flex items-center py-2 px-3 text-blueGray-100 hover:text-blueGray-200 rounded border border-blueGray-200 hover:border-blueGray-300"
              id="hamburgerButton"
            >
              <svg
                class="fill-current h-4 w-4"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex">
            <ul class="flex flex-row lg:items-center lg:w-auto lg:space-x-6 lg:px-10 ">
              <li>
                <a
                  class="p-3 rounded text-md text-blueGray-100 hover:bg-gray-300 hover:bg-opacity-30 transition duration-500 hover:shadow-sm"
                  id="navbarButton"
                  href="/about"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  class="p-3 rounded text-md text-blueGray-100 hover:bg-gray-300 hover:bg-opacity-30 transition duration-500 hover:shadow-sm"
                  id="franchiseButton"
                  href="/franchise"
                >
                  FRANCHISE
                </a>
              </li>
            </ul>
            <div
              class="inline-block px-4 py-3 text-md font-semibold leading-none bg-taBlue hover:bg-taLightBlue text-white rounded transition duration-500"
              //   onclick="javascript:showContactForm()"
            >
              FREE TRIAL
            </div>
          </div>
        </nav>
      </div>

      <div>
        <section class="pb-8 bg-black relative flex items-center justify-center overflow-hidden">
          <video
            class="absolute bottom-0 left-0 z-10 w-auto min-w-full min-h-full max-w-none opacity-20"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
          >
            <source
              src="https://res.cloudinary.com/trainamerican/video/upload/v1631045595/Website_video_3_fthkuj.mp4"
              type="video/mp4"
            />
          </video>
          <div class="container px-4 mx-auto z-30 relative bg-opacity-50">
            <div class="py-48 lg:py-32 text-center">
              <div class="max-w-lg mx-auto mb-8 ">
                <h1 class="text-3xl md:text-4xl mb-4 text-white font-bold font-heading flex flex-col">
                  <span>Train Safely. </span>
                  <span>Train Intelligently. </span>
                  <span class="text-taLightBlue">Train American.</span>
                </h1>
                <p class="text-blueGray-100 leading-relaxed">
                  Show your patriotism by working hard, living healthy and
                  looking good.
                </p>
              </div>
              <div>
                <a
                  class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-taRed hover:bg-taLightRed rounded"
                  href="#"
                  onclick="javascript:showContactForm()"
                >
                  Start your FREE trial
                </a>
                <a
                  class="block sm:inline-block py-4 px-8 text-xs text-blueGray-100 hover:text-blueGray-200 text-center font-semibold leading-none border border-blueGray-200 hover:border-blueGray-300 rounded"
                  href="#"
                >
                  Membership Options
                </a>
              </div>
            </div>
          </div>

          <div class="hidden navbar-menu z-50 fixed ">
            <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div class="flex items-center mb-8">
                <a class="mr-auto text-3xl font-semibold leading-none" href="#">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/site-cad0c.appspot.com/o/dark-logo.svg?alt=media&token=591823b3-2280-448f-907d-25b3a57cb2a8"
                    alt="10.40.10 Fitness"
                    width="80"
                  />
                </a>
                <button class="navbar-close">
                  <svg
                    class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li class="mb-1">
                    <a
                      class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li class="mb-1">
                    <a
                      class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      PRICING
                    </a>
                  </li>
                </ul>
                <div class="mt-4 pt-6 border-t border-blueGray-100">
                  <a
                    class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-taBlue hover:bg-taLightBlue text-white rounded"
                    href="#"
                    onclick="javascript:showContactForm()"
                  >
                    FREE TRIAL
                  </a>
                </div>
              </div>
              <div class="mt-auto">
                <p class="my-4 text-xs text-blueGray-400">
                  <span>FREE TRIAL</span>{" "}
                  <a
                    class="text-blue-600 hover:text-blue-600 underline"
                    href="#"
                  >
                    info@104010Fitness.com
                  </a>
                </p>
                <a class="inline-block px-1" href="#">
                  <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                </a>{" "}
                <a class="inline-block px-1" href="#">
                  <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                </a>{" "}
                <a class="inline-block px-1" href="#">
                  <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                </a>
              </div>
            </nav>
          </div>
        </section>

        <div class="container mx-auto max-w-6xl">
          <section class="py-2">
            <div class="container px-4 mx-auto">
              <div class="px-8 md:px-16">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class=" flex flex-col justify-center">
                    <img
                      class="lg:px-32 px-10"
                      src="https://firebasestorage.googleapis.com/v0/b/site-cad0c.appspot.com/o/dark-logo.svg?alt=media&token=591823b3-2280-448f-907d-25b3a57cb2a8"
                      alt="10.40.10 Fitness"
                    />
                  </div>
                  <div class=" flex flex-col justify-center p-5">
                    <h2 class="text-3xl lg:text-4xl font-bold text-black font-heading">
                      MORE THAN A GYM{" "}
                    </h2>
                    <p class="mt-2 mb-6 lg:text-xl text-blueGray-900 leading-loose">
                      Our mission is to bring back what it means to be an
                      American through safe and intelligent fitness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="w-full bg-black">
          <div
            class=" relative flex items-center justify-center overflow-hidden hover:opacity-90 transition ease-in-out duration-500"
            onClick={showAboutVideo}
          >
            <img
              class="absolute w-full object-cover object-center opacity-40"
              src="https://res.cloudinary.com/trainamerican/image/upload/v1631063202/image_8_esdv2h.png"
              alt="What is 10.40.10 Fitness Video"
            />
            <div class="container py-32">
              <h2 class="text-white font-heading font-semibold text-xl text-center lg:text-4xl">
                What is 10.40.10 Fitness?
              </h2>
              <img
                class="mx-auto my-5 relative"
                src="images/youtube.svg"
                alt="youtube play"
                width="100"
              />
            </div>
          </div>
        </div>

        {showAboutVid ? (
          <div class="flex fixed z-50 inset-0 h-screen w-screen backdrop-filter backdrop-blur-lg overflow-y-auto bg-gray-800 bg-opacity-70 transition duration-1000">
            <div class="my-auto w-full">
              <h2 class="text-4xl p-8 lg:px-32 text-white text-center leading-tight font-bold font-heading mx-auto">
                What is 10.40.10 Fitness?
              </h2>
              <div class="px-4 lg:px-12 w-full" onclick={hideAboutVideo}>
                <div class="aspect-w-16 aspect-h-9 max-h-screen">
                  <iframe
                    class="absolute w-full h-full transition duration-1000"
                    id="aboutiframe"
                    src="https://www.youtube-nocookie.com/embed/c3YY_8gK2sE?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer"
                    title="What is 10.40.10?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; enablejsapi"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}

        <div
          class="hidden py-20 fixed z-50 inset-0 h-screen w-screen backdrop-filter backdrop-blur-lg overflow-y-auto bg-gray-800 bg-opacity-70 transition duration-1000"
          id="contactModal"
          onclick="javascript:hideContactForm()"
        >
          <div class="my-auto w-full transition duration-500">
            <div
              class="px-4 lg:px-12 w-full transition duration-500 h-full"
              onclick="javascript:hideContactForm()"
            >
              <iframe
                class="w-full max-w-lg mx-auto h-full"
                src="https://msgsndr.com/widget/form/e24tWmK0yNqTlZ04NK78"
                scrolling="no"
                id="e24tWmK0yNqTlZ04NK78"
              ></iframe>
              <script src="https://msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </div>

        <section class="py-20 z-50">
          <div class="container px-4 mx-auto">
            <h2 class="mb-12 lg:mb-20 text-3xl md:text-4xl font-bold font-heading">
              The 10.40.10 Workout{" "}
            </h2>
            <div class="flex flex-wrap -mx-4 mb-20">
              <div class="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                <span class="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-100 rounded-full text-taBlue">
                  WARM UP
                </span>
                <h3 class="my-4 text-2xl md:text-4xl font-bold font-heading text-taBlue">
                  10 MINUTES
                </h3>
                <p class="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  10 minutes to warm the muscles you will be training and
                  mentally prepare for one hell of a workout.
                </p>
              </div>
              <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                <div class="aspect-h-9 aspect-w-16">
                  <iframe
                    class="absolute w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/45Q66T63gV4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-4 mb-20">
              <div class="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                <span class="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                  HARD WORK
                </span>
                <h3 class="my-4 text-2xl md:text-4xl font-bold text-taRed font-heading">
                  40 MINUTES
                </h3>
                <p class="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  40 minutes of functional strength and stamina work. You will
                  be pushed to your limits.
                </p>
              </div>
              <div class="w-full lg:w-1/2 px-4 mb-8 order-0">
                <div class="aspect-h-9 aspect-w-16">
                  <iframe
                    class="absolute w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/hccTSB2R88A"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-4 mb-20">
              <div class="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                <span class="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-100 rounded-full text-taBlue">
                  MIND AND MUSCLE DECOMPRESSION
                </span>
                <h3 class="my-4 text-2xl md:text-4xl font-bold font-heading text-taBlue">
                  10 MINUTES
                </h3>
                <p class="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  10 minutes to cool down, stretch the muscles you've trained
                  and decompress by way of breathing.
                </p>
              </div>
              <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                <div class="aspect-h-9 aspect-w-16">
                  <iframe
                    class="absolute w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/agoc3OnqhTY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div class="flex flex-wrap -mb-4 md:mb-0 py-8">
            <div class="w-full md:w-2/3 mb-4 md:mb-0">
              <div class="my-12 bg-taLightRed py-12 px-6 w-11/12 rounded-r-full">
                <div class="ml-10 pb-6">
                  <p class="md:pb-8 text-2xl md:text-5xl font-heading text-gray-50 leading-loose tracking-wide">
                    Help the person next to you improve,{" "}
                  </p>
                  <p class="text-xl md:text-5xl font-heading text-gray-50 norwester">
                    and you will find
                    <span class="bg-gray-50 text-taLightRed px-2 py-1 rounded-lg ml-1">
                      IMPROVEMENT YOURSELF.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="md:flex px-6 md:px-2 justify-center items-center">
              <div class="space-y-12 text-center">
                <p class="text-4xl ml-6 font-bold text-gray-900 font-heading tracking-wider text-center md:text-left">
                  Try it for free...{" "}
                </p>
                <a
                  class="rounded ml-6 inline-block py-5 px-16 leading-none font-medium text-xl text-white bg-taBlue hover:bg-taLightBlue shadow"
                  href="#"
                  onclick="javascript:showContactForm()"
                >
                  CLAIM FREE WEEK
                </a>
              </div>
            </div>
          </div>
          <section class="py-20 pb-8 overflow-x-hidden">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap mb-24">
                <div class="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0">
                  <div class="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                  <img
                    class="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
                    src="https://res.cloudinary.com/trainamerican/image/upload/v1631107071/image_7_xjmsjo.png"
                    alt=""
                  />
                </div>
                <div class="w-full lg:w-1/2 lg:pl-24 my-auto">
                  <img src="metis-assets/icons/quote.svg" alt="" />
                  <h2 class="my-4 text-2xl font-bold font-heading">
                    104010 has the best workout vibe, amazing trainers, top
                    equipment, and is super clean. Regardless of whether you’re
                    a beginner or a professional athlete, you will be
                    challenged. Slay for days at 104010.
                  </h2>
                  <p class="mb-1 text-xl">Katy P.</p>
                </div>
              </div>
            </div>
          </section>
          <section class="py-16 bg-gray-50">
            <div class="container px-4 mx-auto">
              <div class="flex flex-col lg:flex-row mb-10">
                <a
                  class="inline-block mx-auto mb-10 lg:mb-0 lg:ml-0 lg:mr-auto text-3xl font-semibold leading-none"
                  href="#"
                >
                  <img
                    class="h-20"
                    src="https://firebasestorage.googleapis.com/v0/b/site-cad0c.appspot.com/o/dark-logo.svg?alt=media&token=591823b3-2280-448f-907d-25b3a57cb2a8"
                    alt=""
                    width="auto"
                  />
                </a>
                <ul class="flex lg:flex-row items-center justify-center space-x-12">
                  <li>
                    <a
                      class="text-lg font-bold font-heading hover:text-blueGray-600"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-lg font-bold font-heading hover:text-blueGray-600"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col lg:flex-row items-center lg:justify-between">
                <p class="text-xs text-blueGray-400">
                  © 2020. All rights reserved.
                </p>
                <div class="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                  </a>{" "}
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                  </a>{" "}
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <script scr="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
      function showAboutVideo() {
          document.getElementById("aboutModal").style.display = "flex"
      }
      
      function hideAboutVideo() {
          document.getElementById("aboutModal").style.display = "none"
          document.getElementById("aboutiframe").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
      }
      
      function showContactForm() {
          document.getElementById("contactModal").style.display = "flex"
      }
      
      function hideContactForm() {
          document.getElementById("contactModal").style.display = "none"
      }
      
    </script>
    <script type="text/javascript">
      window.addEventListener('scroll', () => {
          var top = window.scrollY 
         if (top > 400) {
             document.getElementById("navbarDiv").style.backgroundColor = "white"
             document.getElementById("navbarDiv").style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
             document.getElementById("navLogo").src = "images/dark-logo.svg"
             document.getElementById("navbarButton").style.color = "black"
             document.getElementById("franchiseButton").style.color = "black"
      
             document.getElementById("hamburgerButton").style.color = "black"
             document.getElementById("hamburgerButton").style.borderColor = "black"
      
             
         } else {
             document.getElementById("navbarDiv").style.backgroundColor = "transparent"
             document.getElementById("navbarDiv").style.boxShadow = "0 0 #0000"
             document.getElementById("navLogo").src = "images/Light-logo.svg"
             document.getElementById("navbarButton").style.color = "white"
             document.getElementById("franchiseButton").style.color = "white"
             document.getElementById("hamburgerButton").style.color = "white"
             document.getElementById("hamburgerButton").style.borderColor = "white"
      
         }
      })
    </script> */}
    </div>
  );
}
