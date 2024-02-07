// import './App.css';
import { findAllByTestId } from "@testing-library/react";
import logo from "./img/companyLogo.png";
import React, { useEffect } from "react";

function App() {
  let mode = [
    "system",
    "wespon",
    "iff",
    "test",
    "targetProfile",
    "spectral",
    "targetSelect",
  ];
  let selectMode = {
    select: mode[0],
    setting: false
  };
  let settingsentry = {'system': 0,'wespon': 0,'Iff': 0,'test': 0,'targetProfile': 0,'spectral': 0,'targetSelect': 0};

  const handleKeyPress = (event) => {
    if (selectMode.setting === false) {
      switch (event.key) {
        case "ArrowLeft":
          if(selectMode.select === mode[0]){
            selectMode.select = mode[6];
          } else {
            selectMode.select = mode[mode.indexOf(selectMode.select) - 1];
          }
          console.log(selectMode.select);
          console.log("===================================");
          break;
        case "ArrowRight":
          if(selectMode.select === mode[6]){
            selectMode.select = mode[0];
          } else {
            selectMode.select = mode[mode.indexOf(selectMode.select) + 1];
          }
          console.log(selectMode.select);
          console.log("===================================");
          break;
        case "Enter":
          selectMode.setting = true;
          console.log(selectMode);
          break;
        default:
          console.log(event.key);
          break;
      }
    } else {
      switch (event.key) {
        case "ArrowUp":
          if(selectMode.select === 'system' || selectMode.select === 'targetProfile' || selectMode.select === 'targetSelect'){
            if(settingsentry[selectMode.select] <= 2 && settingsentry[selectMode.select] > 0) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] - 1;
            } else if(settingsentry[selectMode.select] === 0) {
              settingsentry[selectMode.select] = 2;
            }
          } else if(selectMode.select === 'wespon' || selectMode.select === 'test' || selectMode.select === 'spectral'){
            if(settingsentry[selectMode.select] <= 1 && settingsentry[selectMode.select] > 0) {
                settingsentry[selectMode.select] = settingsentry[selectMode.select] - 1;
            } else if(settingsentry[selectMode.select] === 0) {
                settingsentry[selectMode.select] = 1;
            }
          } else if(selectMode.select === 'iff'){
            if(settingsentry[selectMode.select] <= 3 && settingsentry[selectMode.select] > 0) {
                settingsentry[selectMode.select] = settingsentry[selectMode.select] - 
                1;
            } else if(settingsentry[selectMode.select] === 0) {
                settingsentry[selectMode.select] = 3;
            }
          }
          console.log(settingsentry);
          break;
        case "ArrowDown":
          if(selectMode.select === 'system' || selectMode.select === 'targetProfile' || selectMode.select === 'targetSelect'){
            if(settingsentry[selectMode.select] < 2) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] + 1;
            } else if(settingsentry[selectMode.select] === 2) {
              settingsentry[selectMode.select] = 0;
            }
          } else if(selectMode.select === 'wespon' || selectMode.select === 'test' || selectMode.select === 'spectral'){
            if(settingsentry[selectMode.select] < 1) {
                settingsentry[selectMode.select] = settingsentry[selectMode.select] + 1;
            } else if(settingsentry[selectMode.select] === 1) {
                settingsentry[selectMode.select] = 0;
            }
          } else if(selectMode.select === 'iff'){
            if(settingsentry[selectMode.select] < 3) {
                settingsentry[selectMode.select] = settingsentry[selectMode.select] + 
                1;
            } else if(settingsentry[selectMode.select] === 3) {
                settingsentry[selectMode.select] = 0;
            }
          }
          console.log(settingsentry);
          break;
        case "Enter":
          console.log("Enter Pressed");
          break;
        default:
          console.log(event.key);
          break;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let element; 
      let select = selectMode.select;
      if(selectMode.setting === false) {
        element = document.getElementById(select).querySelectorAll('div')[0].querySelectorAll('p')[0];
        // document.getElementById(select).querySelectorAll('div')[0].querySelectorAll('p')[settingsentry[select]].classList.add('bg-c1d72d', 'text-191919')
      } else {
        console.log(select);
        document.getElementById(select).querySelectorAll('div')[0].querySelectorAll('p')[0].classList.remove('bg-c1d72d', 'text-191919')
        if(select === 'system' || select === 'targetProfile' || select === 'targetSelect'){
          element = document.getElementById(select).querySelectorAll('div')[1].querySelectorAll('p')[settingsentry[select]];
        }
        // clearInterval(interval);
      }
      if (element) {
        element.classList.toggle('bg-c1d72d');
        element.classList.toggle('text-191919');
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // const setting = () => {
  //   console.log("settingsentry");
  // }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    // document.addEventListener("keydown", settingsentry);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }); // ใส่ [] เพื่อให้ useEffect ทำงานเฉพาะครั้งแรก

  return (
    <div className="flex flex-wrap bg-default h-full px-16 flex justify-center content-center uppercase">
      <fieldset className="relative border-[1px] border-dashed border-c1d72d border-opacity-7 p-4 pt-0 w-[800px]">
        <legend>
          <div className="w-auto mx-2 relative">
            <img className="rotate-y-animation h-[16px] mb-4" src={logo} />
          </div>
        </legend>
        <span className="absolute -top-10 left-[6rem] text-[11px]">
          weyland-yutani-corporation
        </span>
        <span className="absolute -bottom-2 right-2.5 bg-[#191919] pl-1.5 text-[9px]">
          united states colonial marine corps
        </span>
        <div className="border-4 border-solid border-c1d72d p-5">
          <div className="border-4 border-solid border-c1d72d">
            <div className="border-b-4 border-c1d72d py-2 flex">
              <div className="pl-4 grid content-center">
                <div className="w-[40px] h-[40px] flex justify-center border-2 border-solid border-c1d72d rounded-full">
                  <p className="pl-1 grid content-center text-c1d72d text-2xl text-center font-bold">
                    A
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center grid content-center px-14">
                <h1 className=" text-[18px] font-semibold">ur s71-c</h1>
                <h1 className="text-center text-[18px] font-semibold">
                  remote sentry wespon system
                </h1>
              </div>
              <div className="pr-4 w-13 flex grid content-center justify-end">
                <div className="w-[40px] h-[40px] flex justify-center border-2 border-solid border-c1d72d rounded-full">
                  <p className="pl-1 grid content-center text-c1d72d text-2xl text-center font-bold">
                    A
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gird-rows-3 grid-flow-col border-c1d72d border-b-4">
              <div id="system" className="border-c1d72d border-r-4 border-solid">
                <div className="text-center border-c1d72d border-b-4">
                  <p>system<br/>mode</p>
                </div>
                <div className="py-2">
                  <p className="pl-3" id="first">auto-remote</p>
                  <p className="pl-3 ">man-override</p>
                  <p className="pl-3 ">semi-auto</p>
                </div>
              </div>
              <div id="wespon" className="border-c1d72d border-r-4 border-solid">
                <div className="text-center border-c1d72d border-b-4">
                  <p>wespon<br/>status</p>
                </div>
                <div className="py-2">
                  <p className="pl-3 bg-c1d72d text-191919">safe</p>
                  <p className="pl-3 ">armed</p>
                </div>
              </div>
              <div className="border-c1d72d border-r-4 border-solid">
                <div className="border-c1d72d border-b-4 text-center">
                  <p>Iff<br/>status</p>
                </div>
                <div className="py-2">
                  <p className="pl-3 bg-c1d72d text-191919">search</p>
                  <p className="pl-3 ">test</p>
                  <p className="pl-3 ">engaged</p>
                  <p className="pl-3 ">interrogate</p>
                </div>
              </div>
              <div className="">
                <div className="py-0.5 pl-3 bg-c1d72d">
                  <p className="text-191919">test<br/>Routine</p>
                </div>
                <div className="py-2 pl-3">
                  <p>auto<br/>selective</p>
                </div>
              </div>
            </div>
            <div className="grid gird-rows-3 grid-flow-col text-c1d72d border-c1d72">
              <div className="border-c1d72d border-r-4">
                <div className="pl-3 py-1 border-c1d72d border-b-4">
                  <p>target profile</p>
                </div>
                <div className="pl-3 pt-1 pb-5">
                  <p>soft</p>
                  <p>semehard</p>
                  <p>hard</p>
                </div>
              </div>
              <div className="border-c1d72d border-r-4">
                <div className="pl-3 py-1 border-c1d72d border-b-4">
                  <p>spectral profile</p>
                </div>
                <div className="pl-3 py-1">
                  <p>bio</p>
                  <p>inert</p>
                </div>
              </div>
              <div>
                <div className="pl-3 py-1 border-c1d72d border-b-4">
                  <p>target select</p>
                </div>
                <div className="pl-3 py-1">
                  <p>multi spec</p>
                  <p>infra reo</p>
                  <p>uv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
