import React from "react";

function NoCode() {
  return (
    <>
      <div
        className="w-full min-h-[400px] bg-green-50 flex flex-col justify-center items-center px-6 py-14 "
        // style="opacity: 1; transform: none;"
      >
        <h1
          className="w-full text-3xl md:text-5xl font-extrabold text-center text-green-900 mb-8"
          // style="opacity: 1; transform: none;"
        >
          Build WhatsApp Chatbots{" "}
          <span className="text-green-600">No-Code</span>
        </h1>
        <ul
          className="list-disc list-inside space-y-4 text-lg text-gray-800 w-full max-w-screen-xl mb-8"
          // style="opacity: 1; transform: none;"
        >
          <li>
            <span className="font-semibold text-green-600">
              Media, Interactive List &amp; Button
            </span>
            , Catalog Message Support
          </li>
          <li>
            The Most Advanced No Code Chatbot Builder for{" "}
            <span className="relative text-green-600 font-semibold cursor-pointer group">
              WhatsApp
              <span
                className="absolute left-0 -bottom-1 h-[2px] bg-current"
                // style="width: 0px;"
              ></span>
            </span>
          </li>
          <li>
            API &amp; Web-hook for Real-Time Communication with any Software.
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-xl">
          <button
            className="flex justify-center items-center gap-2 px-6 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                 transform transition-all duration-300
                 hover:text-white hover:scale-[1.03]"
            // style="--hover-bg-color: #22C55E; --hover-shadow: 0 0 10px #22C55E; opacity: 1; transform: none; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>
            </svg>
            Share message
          </button>
          <button
            className="flex justify-center items-center gap-2 px-6 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                 transform transition-all duration-300
                 hover:text-white hover:scale-[1.03]"
            // style="--hover-bg-color: #22C55E; --hover-shadow: 0 0 10px #22C55E; opacity: 1; transform: none; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            Ask for information
          </button>
          <button
            className="flex justify-center items-center gap-2 px-6 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                 transform transition-all duration-300
                 hover:text-white hover:scale-[1.03]"
            // style="--hover-bg-color: #22C55E; --hover-shadow: 0 0 10px #22C55E; opacity: 1; transform: none;"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
            </svg>
            Commerce related
          </button>
          <button
            className="flex justify-center items-center gap-2 px-6 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                 transform transition-all duration-300
                 hover:text-white hover:scale-[1.03]"
            // style="--hover-bg-color: #22C55E; --hover-shadow: 0 0 10px #22C55E; opacity: 1; transform: none;"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            Action Button
          </button>
          <button
            className="flex justify-center items-center gap-2 px-6 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                 transform transition-all duration-300
                 hover:text-white hover:scale-[1.03]"
            // style="--hover-bg-color: #22C55E; --hover-shadow: 0 0 10px #22C55E; opacity: 1; transform: none;"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
            </svg>
            AI Chatbot
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 my-6">
        <div className="w-full h-full w-full aspect-video rounded-lg shadow-lg object-cover border-4 border-green-500">
          <video
            src="https://mittosapi.com/assets/MittosAPI%20(1)-BBZQE_Tv.mp4"
            className="w-full h-full object-cover"
            autoplay=""
            loop=""
          ></video>
        </div>
      </div>
    </>
  );
}

export default NoCode;
