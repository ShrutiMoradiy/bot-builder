import React, { useState } from "react";
import Earbud from "./CategoryList/Earbud";
import Neckband from "./CategoryList/Neckband";
import Earphone from "./CategoryList/Earphone";
import Logistics from "./CategoryList/Logistics";

export default function Categories({ catalog }) {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = () => {
    setIsActive(!isActive);
  };
  const [editAttribute, setEditAttribute] = useState(null);

  const [showEarbud, setShowEarbud] = useState(true);
  const [showNeckband, setShowNeckband] = useState(false);
  const [showEarphone, setShowEarphone] = useState(false);
  const [showLogistic, setShowLogistic] = useState(false);

  const Earbuds = () => {
    setShowEarbud(true);
    setShowNeckband(false);
    setShowEarphone(false);
    setShowLogistic(false);
  };
  const neckband = () => {
    setShowNeckband(true);
    setShowEarbud(false);
    setShowEarphone(false);
    setShowLogistic(false);
  };
  const ecommerce = () => {
    setShowEarphone(true);
    setShowEarbud(false);
    setShowNeckband(false);
    setShowLogistic(false);
  };
  const logistics = () => {
    setShowLogistic(true);
    setShowEarbud(false);
    setShowNeckband(false);
    setShowEarphone(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex">
          <div className="w-[30%] h-[70vh] border-r p-5">
            <div className="mb-2">
              <h1 className="text-[#0F1314] text-[18px] font-medium">
                Categories
              </h1>
            </div>
            <div
              className={`border rounded-md p-2 my-4 ${
                showEarbud ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={Earbuds}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">Earbud</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border rounded-md p-2 my-4 ${
                showNeckband ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={neckband}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">Neckband</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border rounded-md p-2 my-4 ${
                showEarphone ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={ecommerce}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">Earphone</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {/* <div
              className={`border rounded-md p-2 my-4 ${
                showLogistic ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={logistics}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">LOGISTICS</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div> */}
          </div>
          <div
            className="w-[70%] max-h-[70vh] border-r "
            style={{ scrollbarWidth: "thin" }}
          >
            {showEarbud && (
              <Earbud
                showEarbud={showEarbud}
                Earbuds={Earbuds}
                isActive={isActive}
                toggleButton={toggleButton}
                editAttribute={editAttribute} setEditAttribute={setEditAttribute}
              />
            )}
            {showNeckband && (
              <Neckband
                showNeckband={showNeckband}
                neckband={neckband}
                isActive={isActive}
                toggleButton={toggleButton}
                editAttribute={editAttribute} setEditAttribute={setEditAttribute}
              />
            )}
            {showEarphone && (
              <Earphone
                showEarphone={showEarphone}
                ecommerce={ecommerce}
                isActive={isActive}
                toggleButton={toggleButton}
                editAttribute={editAttribute} setEditAttribute={setEditAttribute}
              />
            )}
            {/* {showLogistic && (
              <Logistics
                showLogistic={showLogistic}
                logistics={logistics}
                isActive={isActive}
                toggleButton={toggleButton}
              />
            )} */}
          </div>
        </div>
        <div className="border-t p-4 flex justify-between">
          <button
            onClick={catalog}
            className="border border-[#019ed1] p-2 rounded-md text-[#019ed1] text-[16px] font-medium"
          >
            Previous
          </button>
          <button
            onClick={catalog}
            className="bg-[#019ed1] px-4 rounded-md text-[16px] font-medium text-white"
          >
            Retrain Bot
          </button>
        </div>
      </div>
    </>
  );
}
