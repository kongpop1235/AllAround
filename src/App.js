// import './App.css';
import logo from "./img/companyLogo.png";
import React, { useEffect } from "react";

function App() {
  let mode = [
    "system",
    "wespon",
    "iff",
    "testRoutine",
    "targetProfile",
    "spectral",
    "targetSelect",
  ];
  let selectMode = {
    select: mode[0],
    setting: false
  };
  let settingsentry = { 'system': 0, 'wespon': 0, 'iff': 0, 'testRoutine': 0, 'targetProfile': 0, 'spectral': 0, 'targetSelect': 0 };

  const handleKeyPress = (event) => {
    if (selectMode.setting === false) {
      switch (event.key) {
        case "ArrowLeft":
          if (selectMode.select === mode[0]) {
            selectMode.select = mode[6];
          } else {
            selectMode.select = mode[mode.indexOf(selectMode.select) - 1];
          }
          break;
        case "ArrowRight":
          if (selectMode.select === mode[6]) {
            selectMode.select = mode[0];
          } else {
            selectMode.select = mode[mode.indexOf(selectMode.select) + 1];
          }
          break;
        case "Enter":
          selectMode.setting = true;
          document.getElementById(selectMode.select).querySelectorAll('div')[0].querySelectorAll('p')[0].classList.add('bg-c1d72d', 'text-191919');
          break;
        default:
          break;
      }
    } else {
      switch (event.key) {
        case "ArrowUp":
          if (selectMode.select === 'system' || selectMode.select === 'targetProfile' || selectMode.select === 'targetSelect') {
            if (settingsentry[selectMode.select] <= 2 && settingsentry[selectMode.select] > 0) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] - 1;
            } else if (settingsentry[selectMode.select] === 0) {
              settingsentry[selectMode.select] = 2;
            }
          } else if (selectMode.select === 'wespon' || selectMode.select === 'testRoutine' || selectMode.select === 'spectral') {
            if (settingsentry[selectMode.select] <= 1 && settingsentry[selectMode.select] > 0) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] - 1;
            } else if (settingsentry[selectMode.select] === 0) {
              settingsentry[selectMode.select] = 1;
            }
          } else if (selectMode.select === 'iff') {
            if (settingsentry[selectMode.select] <= 3 && settingsentry[selectMode.select] > 0) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] -
                1;
            } else if (settingsentry[selectMode.select] === 0) {
              settingsentry[selectMode.select] = 3;
            }
          }
          break;
        case "ArrowDown":
          if (selectMode.select === 'system' || selectMode.select === 'targetProfile' || selectMode.select === 'targetSelect') {
            if (settingsentry[selectMode.select] < 2) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] + 1;
            } else if (settingsentry[selectMode.select] === 2) {
              settingsentry[selectMode.select] = 0;
            }
          } else if (selectMode.select === 'wespon' || selectMode.select === 'testRoutine' || selectMode.select === 'spectral') {
            if (settingsentry[selectMode.select] < 1) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] + 1;
            } else if (settingsentry[selectMode.select] === 1) {
              settingsentry[selectMode.select] = 0;
            }
          } else if (selectMode.select === 'iff') {
            if (settingsentry[selectMode.select] < 3) {
              settingsentry[selectMode.select] = settingsentry[selectMode.select] +
                1;
            } else if (settingsentry[selectMode.select] === 3) {
              settingsentry[selectMode.select] = 0;
            }
          }
          break;
        case "Enter":
          selectMode.setting = false;
          document.getElementById(selectMode.select).querySelectorAll('div')[1].querySelectorAll('p')[settingsentry[selectMode.select]].classList.add('bg-c1d72d', 'text-191919');
          break;
        default:
          break;
      }
    }
  };



  useEffect(() => {
    for (let modeItem in mode) {
      if (selectMode.select !== mode[modeItem] || selectMode.setting === false) {
        document.getElementById(mode[modeItem]).querySelectorAll('div')[1].querySelectorAll('p')[settingsentry[mode[modeItem]]].classList.add('bg-c1d72d', 'text-191919');
      }
    }

    const interval = setInterval(() => {
      let element;
      let select = selectMode.select;
      if (selectMode.setting === false) {
        element = document.getElementById(select).querySelectorAll('div')[0].querySelectorAll('p')[0];
      } else {
        //Remove class form mode

        if (settingsentry[select] !== 0) {
          document.getElementById(select).querySelectorAll('div')[1].querySelectorAll('p')[settingsentry[select] - 1].classList.remove('bg-c1d72d', 'text-191919')
        } else {
          if (select === 'system' || select === 'targetProfile' || select === 'targetSelect') {
            document.getElementById(select).querySelectorAll('div')[1].querySelectorAll('p')[2].classList.remove('bg-c1d72d', 'text-191919')
          } else if (select === 'iff') {
            document.getElementById(select).querySelectorAll('div')[1].querySelectorAll('p')[3].classList.remove('bg-c1d72d', 'text-191919')
          } else if (select === 'wespon' || select === 'testRoutine' || select === 'spectral') {
            document.getElementById(select).querySelectorAll('div')[1].querySelectorAll('p')[1].classList.remove('bg-c1d72d', 'text-191919')
          }
        }
        element = document.getElementById(select).querySelectorAll('div')[1].querySelectorAll('p')[settingsentry[select]];
        // clearInterval(interval);
      }
      if (element) {
        element.classList.toggle('bg-c1d72d');
        element.classList.toggle('text-191919');
      }
      for (let modeItem in mode) {
        if (select !== mode[modeItem]) {
          document.getElementById(mode[modeItem]).querySelectorAll('div')[0].querySelectorAll('p')[0].classList.remove('bg-c1d72d', 'text-191919');
        }
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
    <div className="flex flex-wrap bg-default h-full px-16 justify-center content-center uppercase">
      <fieldset className="relative border-[1px] border-dashed border-c1d72d border-opacity-7 p-4 pt-0 w-[800px]">
        <legend>
          <div className="w-auto mx-2 relative">
            <img className="rotate-y-animation h-[16px] mb-4" src={logo} />
          </div>
        </legend>
        <span className="absolute -top-10 left-[6rem] text-[11px] drop-shadow-3xl">
          weyland-yutani-corporation
        </span>
        <span className="absolute -bottom-2 right-2.5 bg-[#191919] pl-1.5 text-[9px]">
          <p className="drop-shadow-3xl">united states colonial marine corps</p>
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
                  <p>system<br />mode</p>
                </div>
                <div className="py-2 px-2">
                  <p className="pl-3">auto-remote</p>
                  <p className="pl-3">man-override</p>
                  <p className="pl-3">semi-auto</p>
                </div>
              </div>
              <div id="wespon" className="border-c1d72d border-r-4 border-solid">
                <div className="text-center border-c1d72d border-b-4">
                  <p>wespon<br />status</p>
                </div>
                <div className="py-2 px-2">
                  <p className="pl-3">safe</p>
                  <p className="pl-3">armed</p>
                </div>
              </div>
              <div id="iff" className="border-c1d72d border-r-4 border-solid">
                <div className="border-c1d72d border-b-4 text-center">
                  <p>Iff<br />status</p>
                </div>
                <div className="py-2 px-2">
                  <p className="pl-3">search</p>
                  <p className="pl-3">test</p>
                  <p className="pl-3">engaged</p>
                  <p className="pl-3">interrogate</p>
                </div>
              </div>
              <div id="testRoutine">
                <div className="text-center border-c1d72d border-b-4">
                  <p>wespon<br />status</p>
                </div>
                <div className="py-2 px-2">
                  <p className="pl-3">auto</p>
                  <p className="pl-3">selective</p>
                </div>
              </div>
            </div>
            <div className="grid gird-rows-3 grid-flow-col text-c1d72d border-c1d72">
              <div id="targetProfile" className="border-c1d72d border-r-4">
                <div className="border-c1d72d border-b-4">
                  <p className="pl-3 py-1">target profile</p>
                </div>
                <div className="pt-1 pb-5 px-2">
                  <p className="pl-3">soft</p>
                  <p className="pl-3">semehard</p>
                  <p className="pl-3">hard</p>
                </div>
              </div>
              <div id="spectral" className="border-c1d72d border-r-4">
                <div className="border-c1d72d border-b-4">
                  <p className="pl-3 py-1">spectral profile</p>
                </div>
                <div className="py-1 px-2">
                  <p className="pl-3">bio</p>
                  <p className="pl-3">inert</p>
                </div>
              </div>
              <div id="targetSelect">
                <div className="border-c1d72d border-b-4">
                  <p className="pl-3 py-1">target select</p>
                </div>
                <div className="py-1 px-2">
                  <p className="pl-3">multi spec</p>
                  <p className="pl-3">infra reo</p>
                  <p className="pl-3">uv</p>
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
