import React, { useState } from "react";

export default function Neckband() {
  const neckbandsData = [
    {
        name: "Accessories", title: "2 Extra Eartips, USB Charging Cable, Extra Ear tips, Charging Cable"
    },
    {
        name: "Battery Capacity", title: "150 mAh"
    },
    {
        name: "Bluetooth", title: "5.0"
    },
    {
        name: "Bluetooth Range", title: "10 meters"
    },
    {
        name: "Charging Interface", title: "Type-C"
    },
    {
        name: "Color", title: "Blue, Neon, Green, Yellow, Pink, Orange, Neon Blue, Black, Grey, Neon Green"
    },
    {
        name: "Design", title: "Magnetic earbuds, Metal neckbands, Sleek"
    },
    {
        name: "Driver", title: "12mm, 10 mm, 12 mm, 10mm"
    },
    {
        name: "Memory Card", title: "TF card"
    },
    {
        name: "Playtime", title: "15 Hr, 15 hours, 18 hours, 24 hours, 24 hrs"
    },
    {
        name: "Protection", title: "Nanocoating, Nano Coating"
    },
    {
        name: "Sound Quality", title: "Superior"
    },
    {
        name: "Voice Assistant", title: "Siri and Google, Googe and Siri, Google and Siri, Google & Siri, Google"
    },
    {
        name: "Voicte Assistant", title: "Siri"
    },
    {
        name: "Warranty", title: "6 months, 6 Months"
    },
    {
        name: "Weight", title: "30g, 0.1 kg, 100 grams"
    }
];
const [neckbands, setNeckbands] = useState(neckbandsData);
const [editAttribute, setEditAttribute] = useState(null);
const [attrName, setAttrName] = useState("");
const [showTitle, setShowTitle] = useState({ visible: false, index: null });

const handleEditClick = (index) => {
  setEditAttribute(index);
  setAttrName(neckbands[index].name);
};

const handleChange = (e) => {
  setAttrName(e.target.value);
};

const handleUpdate = (index) => {
  const updatedAttributes = [...neckbands];
  updatedAttributes[index].name = attrName;
  setNeckbands(updatedAttributes);
  setEditAttribute(null);
};

const handleCancel = () => {
  setEditAttribute(null);
};
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-3 border-b p-5">
          <h1 className="text-[#0F1314] text-[18px] font-medium">Neckband</h1>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <h1 className="text-[#0F1314] text-[16px] font-normal">
            Attributes({neckbands.length})
          </h1>
          <div className="flex flex-wrap gap-2">
            {neckbands.map((neckband, index) => (
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
                      {neckband.name}
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
                      {neckband.title}
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
