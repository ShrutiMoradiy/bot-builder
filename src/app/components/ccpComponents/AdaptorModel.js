import React from "react";

export default function AdaptorModel({ adaptorModel, showModel, selectedAdapter, setShowModel }) {
  // if (!adapter) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#0F1314] bg-opacity-50">
        <div className="bg-white p-5 rounded-md shadow-lg w-[50%] h-fit flex flex-col justify-between gap-4">
          <div>
            <div className="flex relative justify-between items-start mb-5">
              <img
                src={selectedAdapter.logo}
                alt="adapter-logo"
                width={60}
                height={60}
                className="absolute right-[45%] bottom-5"
              />
              <h1 className="text-[#0F1314] text-[18px] font-medium">
                {selectedAdapter.adapterName} Integration
              </h1>
              <img
                src="/svgs/close.svg"
                alt="close"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setShowModel(false)}
                />
            </div>
            <div className="flex flex-col gap-4 items-center">
              {selectedAdapter.adapterTypeKeys && selectedAdapter.adapterTypeKeys.map((key, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={key}
                  className="border border-[#dcdbdb] w-full rounded-md py-1 px-2 outline-none bg-[#019ed1] bg-opacity-[10%]"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowModel(false)}
              className="bg-[#019ed1] p-2 w-[150px] rounded-md text-[16px] font-medium text-white"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
