import React, { useState } from "react";

export default function Earbud() {
  const earbudsData = [
    {
      name: "Accessories",
      title:
        "2 eartips, charging cable, Charging Cable, 2 extra Eartips, Type C Cable",
    },
    {
      name: "Battery Capacity",
      title: "40 mah, 40mah",
    },
    {
      name: "Battery Type",
      title: "Lithium-ion",
    },
    {
      name: "Bluetooth",
      title: "V5.0, 5.1",
    },
    {
      name: "Charging Case Capacity",
      title: "300 mAh, 250mAh, 300 mah",
    },
    {
      name: "Charging Interface",
      title: "Type-C",
    },
    {
      name: "Color",
      title: "Black, White, Pink",
    },
    {
      name: "Display",
      title: "LED",
    },
    {
      name: "Driver",
      title: "10mm, 10 mm, 13 mm",
    },
    {
      name: "Latency",
      title: "60ms",
    },
    {
      name: "Playtime",
      title: "18 hours, 4 hrs, 30 hrs, 20 hours, 20hrs",
    },
    {
      name: "Protection",
      title: "Nano Coating",
    },
    {
      name: "Resistance",
      title: "IPX 4",
    },
    {
      name: "Sound Quality",
      title: "Deep Bass",
    },
    {
      name: "Voice Assistant",
      title: "Siri and Google, Google and Siri",
    },
    {
      name: "Warranty",
      title: "12 Months, 12 months, 6 months",
    },
    {
      name: "Weight",
      title: "0.1 KG, 100 grams",
    },
  ];

  const [earbuds, setEarbuds] = useState(earbudsData);
  const [editAttribute, setEditAttribute] = useState(null);
  const [attrName, setAttrName] = useState("");
  const [showTitle, setShowTitle] = useState({ visible: false, index: null });

  const handleEditClick = (index) => {
    setEditAttribute(index);
    setAttrName(earbuds[index].name);
  };

  const handleChange = (e) => {
    setAttrName(e.target.value);
  };

  const handleUpdate = (index) => {
    const updatedAttributes = [...earbuds];
    updatedAttributes[index].name = attrName;
    setEarbuds(updatedAttributes);
    setEditAttribute(null);
  };

  const handleCancel = () => {
    setEditAttribute(null);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-3 border-b p-5">
          <h1 className="text-[#0F1314] text-[18px] font-medium">Earbuds</h1>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <h1 className="text-[#0F1314] text-[16px] font-normal">
            Attributes({earbuds.length})
          </h1>
          <div className="flex flex-wrap gap-2">
            {earbuds.map((earbud, index) => (
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
                      {earbud.name}
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
                      {earbud.title}
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
