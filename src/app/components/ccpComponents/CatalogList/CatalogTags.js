import React, { useState } from "react";

export default function CatalogTags() {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  const handleAddCategory = () => {
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
      setValue("");
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleRemoveCategory = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Add Tag"
          value={value}
          onChange={handleInputChange}
          className="border-2 p-1.5 rounded-md outline-none w-full"
        />
        <button
          onClick={handleAddCategory}
          className="bg-[#019ed1] text-white text-[14px] font-medium h-[40px] w-[55px] rounded-md"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((item, index) => (
          <div
            key={index}
            className="bg-[#019ed1] bg-opacity-10 flex justify-between gap-2 border rounded-full p-2 my-4"
          >
            <p className="text-[#027296] text-sm font-medium break-words">
              {item}
            </p>
            <img
              src="/svgs/close.svg"
              alt="close"
              width={15}
              height={15}
              className="cursor-pointer opacity-55"
              onClick={() => handleRemoveCategory(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
