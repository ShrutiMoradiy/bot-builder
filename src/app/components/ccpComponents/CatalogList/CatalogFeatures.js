import React, { useState } from "react";

export default function CatalogFeatures() {
  const [features, setFeatures] = useState([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const handleAddFeatures = () => {
    if (key && value) {
      setFeatures([...features, { key, value }]);
      setKey("");
      setValue("");
    }
  };

  const handleInputChange = (e, setFunction) => {
    setFunction(e.target.value);
  };

  const handleRemoveFeatures = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex justify-between gap-4 items-center">
        <input
          type="text"
          placeholder="Enter Key"
          value={key}
          onChange={(e) => handleInputChange(e, setKey)}
          className="border-2 p-1.5 rounded-md outline-none w-[45%]"
        />
        <input
          type="text"
          placeholder="Enter Value"
          value={value}
          onChange={(e) => handleInputChange(e, setValue)}
          className="border-2 p-1.5 rounded-md outline-none w-[45%]"
        />
        <button
          onClick={handleAddFeatures}
          className="bg-[#019ed1] text-white text-[14px] font-medium h-[40px] w-[10%] rounded-md"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#019ed1] bg-opacity-10 flex justify-between gap-2 border rounded-full p-2 "
          >
            <p className="text-[#027296] text-sm font-medium">
            {item.key} : {item.value}
            </p>
            <img
              src="/svgs/close.svg"
              alt="close"
              width={15}
              height={15}
              className="cursor-pointer opacity-55"
              onClick={() => handleRemoveFeatures(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
