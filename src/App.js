// import './App.css';
import logo from "./img/companyLogo.png";

function App() {
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
                <div class="w-[40px] h-[40px] flex justify-center border-2 border-solid border-c1d72d rounded-full">
                  <p class="pl-1.5 grid content-center text-c1d72d text-2xl text-center font-bold">
                    A
                  </p>
                </div>
              </div>
              <div class="w-full flex justify-center grid content-center px-14">
                <h1 className=" text-[18px] font-semibold">ur s71-c</h1>
                <h1 className="text-center text-[18px] font-semibold">
                  remote sentry wespon system
                </h1>
              </div>
              <div class="pr-4 w-13 flex grid content-center justify-end">
                <div class="w-[40px] h-[40px] flex justify-center border-2 border-solid border-c1d72d rounded-full">
                  <p class="pl-1.5 grid content-center text-c1d72d text-2xl text-center font-bold">
                    A
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gird-rows-3 grid-flow-col border-c1d72d border-b-4">
              <div className="py-1 border-c1d72d border-r-4 border-solid">
                <div className="text-center border-c1d72d border-b-4">
                  <p>system</p>
                  <p>mode</p>
                </div>
                <div className="py-2">
                  <p className="pl-3 bg-c1d72d text-191919">auto-remote</p>
                  <p className="pl-3 ">man-override</p>
                  <p className="pl-3 ">semi-auto</p>
                </div>
              </div>
              <div className="py-1 border-c1d72d border-r-4 border-solid">
                <div className="pl-3 border-c1d72d border-b-4">
                  <p>wespon</p>
                  <p>status</p>
                </div>
                <div className="py-2">
                  <p className="pl-3 bg-c1d72d text-191919">safe</p>
                  <p className="pl-3 ">armed</p>
                </div>
              </div>
              <div className="py-1 border-c1d72d border-r-4 border-solid">
                <div className="border-c1d72d border-b-4 text-center">
                  <p>Iff</p>
                  <p>status</p>
                </div>
                <div className="py-2">
                  <p className="pl-3 bg-c1d72d text-191919">search</p>
                  <p className="pl-3 ">test</p>
                  <p className="pl-3 ">engaged</p>
                  <p className="pl-3 ">interrogate</p>
                </div>
              </div>
              <div>
                <div className="py-1 pl-3 bg-c1d72d">
                  <p className="text-191919">test</p>
                  <p className="text-191919">Routine</p>
                </div>
                <div className="py-2">
                  <p className="pl-3 ">auto</p>
                  <p className="pl-3 ">selective</p>
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
              <div className="border-c1d72d border-r-4">
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
