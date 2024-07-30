import React, { useState } from "react";

export default function Earphone() {
  const earphonesData = [
    {
      name: "Cable Type",
      title: "Tangle-Free",
    },
    {
      name: "Color",
      title: "Black, Grey",
    },
    {
      name: "Driver",
      title: "10 millimeter, 12mm, 10mm",
    },
    {
      name: "Driver Type",
      title: "Dynamic Copper Drivers",
    },
    {
      name: "Headphone Jack",
      title: "3.5 millimeters",
    },
    {
      name: "Protection",
      title: "Nano Coating",
    },
    {
      name: "Voice Assistant",
      title: "Google and Siri",
    },
    {
      name: "Warranty",
      title: "3 months, 3 Months",
    },
    {
      name: "Weight",
      title: "100 grams",
    },
  ];
  const [earphones, setEarphone] = useState(earphonesData);
  const [editAttribute, setEditAttribute] = useState(null);
  const [attrName, setAttrName] = useState("");
  const [showTitle, setShowTitle] = useState({ visible: false, index: null });

  const handleEditClick = (index) => {
    setEditAttribute(index);
    setAttrName(earphones[index].name);
  };

  const handleChange = (e) => {
    setAttrName(e.target.value);
  };

  const handleUpdate = (index) => {
    const updatedAttributes = [...earphones];
    updatedAttributes[index].name = attrName;
    setEarphone(updatedAttributes);
    setEditAttribute(null);
  };

  const handleCancel = () => {
    setEditAttribute(null);
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-3 border-b p-5">
          <h1 className="text-[#0F1314] text-[18px] font-medium">Earphone</h1>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <h1 className="text-[#0F1314] text-[16px] font-normal">
            Attributes({earphones.length})
          </h1>
          <div className="flex flex-wrap gap-2">
            {earphones.map((earphone, index) => (
              <div
                key={index}
                className="bg-[#019ed1] bg-opacity-[5%] flex justify-between items-center gap-2 border rounded-full p-2"
              >
                <div className="flex justify-between items-center gap-2">
                  {editAttribute === index ? (
                    <>
                      <img
                        src="/svgs/update.svg"
                        alt="update"
                        width={17}
                        height={17}
                        className="opacity-90 cursor-pointer"
                        onClick={() => handleUpdate(index)}
                      />
                      <img
                        src="/svgs/close.svg"
                        alt="cancel"
                        width={13}
                        height={13}
                        className="opacity-90 cursor-pointer"
                        onClick={handleCancel}
                      />
                    </>
                  ) : (
                    <img
                      src="/svgs/edit.svg"
                      alt="edit"
                      width={17}
                      height={17}
                      className="opacity-90 cursor-pointer"
                      onClick={() => handleEditClick(index)}
                    />
                  )}

                  {editAttribute === index ? (
                    <input
                      type="text"
                      value={attrName}
                      onChange={handleChange}
                      className="border border-[#027296] text-[#027296] opacity-80 text-xs font-semibold rounded-md p-1.5 outline-none"
                    />
                  ) : (
                    <span className="text-[#027296] opacity-80 text-xs font-semibold">
                      {earphone.name}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <img
                    src="/svgs/info.svg"
                    alt="info"
                    width={12}
                    height={12}
                    className="opacity-60 cursor-pointer"
                    onMouseEnter={() => setShowTitle({ visible: true, index })}
                    onMouseLeave={() => setShowTitle({ visible: false, index })}
                  />
                  {showTitle.visible && showTitle.index === index && (
                    <p className="tooltip absolute -right-[20px] bottom-[20px] text-white w-[120px] text-center break-words text-[12px] font-normal">
                      {earphone.title}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
