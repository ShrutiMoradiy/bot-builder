import React, { useState } from "react";
import CatalogModel from "./CatalogModel";

export default function Catalog({ adaptor, category }) {
  const catalogData = [
    {
      name: "Ace",
      title: "Ace | Portable & Power-Packed Speaker with vibrant LED Lights",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "AerDock",
      title: "AerDock",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "AerDock Pro",
      title: "AerDock Pro | Step up your game with 60ms Latency TWS earphones",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce 3.0",
      title: "Bounce 3.0 |  Lightest neckbands with greatly extended playtime",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce Plus",
      title: "Bounce Plus | Lightweight Neckband with 15-hour battery life",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce Pro",
      title: "Bounce Pro | Advanced Neckband with Sweatproof Nanocoating",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce",
      title: "Bounce | Power on with 15-hour battery life",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Emerge",
      title: "Emerge",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Exult",
      title: "Exult | True 360 Sound in a sturdy package",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Firebolt",
      title: "Firebolt | Quality sounds meet smashing looks",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },

    {
      name: "Ace",
      title: "Ace | Portable & Power-Packed Speaker with vibrant LED Lights",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "AerDock",
      title: "AerDock",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "AerDock Pro",
      title: "AerDock Pro | Step up your game with 60ms Latency TWS earphones",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce 3.0",
      title: "Bounce 3.0 |  Lightest neckbands with greatly extended playtime",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce Plus",
      title: "Bounce Plus | Lightweight Neckband with 15-hour battery life",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce Pro",
      title: "Bounce Pro | Advanced Neckband with Sweatproof Nanocoating",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Bounce",
      title: "Bounce | Power on with 15-hour battery life",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Emerge",
      title: "Emerge",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Exult",
      title: "Exult | True 360 Sound in a sturdy package",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
    {
      name: "Firebolt",
      title: "Firebolt | Quality sounds meet smashing looks",
      links: ["Category", "Product Features", "Tags", "Genre", "PDF"],
    },
  ];

  const [catalogs, setCatalogs] = useState(catalogData);
  const [showModel, setShowModel] = useState(false);
  const [activeTab, setActiveTab] = useState("Category");
  const [currentPage, setCurrentPage] = useState(1);
  const [editName, setEditName] = useState(null);
  const catalogPerPage = 10;
  const totalPages = Math.ceil(catalogs.length / catalogPerPage);

  const catalogModel = (tab) => {
    if (typeof tab === "string") {
      setActiveTab(tab);
    }
    setShowModel(!showModel);
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getVisibleCatalog = () => {
    const startIndex = (currentPage - 1) * catalogPerPage;
    return catalogs.slice(startIndex, startIndex + catalogPerPage);
  };

  const handleEditClick = (index) => {
    setEditName(index);
  };

  const handleNameChange = (event, index) => {
    const updatedCatalogs = [...catalogs];
    updatedCatalogs[index].name = event.target.value;
    setCatalogs(updatedCatalogs);
  };

  const handleNameBlur = () => {
    setEditName(null);
  };

  return (
    <div className="flex flex-col py-5">
      <div
        className="h-[70vh] px-10 overflow-y-scroll"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="mb-5">
          <h1 className="text-[#0F1314] text-[20px] font-semibold">
            Review Product Catalog ({catalogs.length})
          </h1>
        </div>
        {getVisibleCatalog().map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/svgs/edit.svg"
                  alt="edit"
                  width={25}
                  height={25}
                  className="cursor-pointer"
                  onClick={() => handleEditClick(index)}
                />
                {editName === index ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(event) => handleNameChange(event, index)}
                    onBlur={handleNameBlur}
                    className="border border-[#0F1314] rounded-md px-2 outline-none"
                  />
                ) : (
                  <h3 className="text-[#0F1314] text-[16px] font-medium">
                    {item.name}
                  </h3>
                )}
              </div>
              <p className="text-[#0F1314] text-[14px] font-normal">
                {item.title}
              </p>
            </div>
            <div className="flex gap-5">
              {item.links.map((link, idx) => (
                <span
                  key={idx}
                  onClick={() => catalogModel(link)}
                  className="text-[#019ED1] text-[16px] font-medium cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t px-5 pt-3 flex justify-between">
        <button
          onClick={adaptor}
          className="border border-[#019ed1] p-2 rounded-md text-[#019ed1] text-[16px] font-medium"
        >
          Previous
        </button>
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`rotate-180 flex items-center ${
              currentPage === 1 && "opacity-50"
            }`}
          >
            <img src="/svgs/arrow.svg" alt="Previous" width={40} height={40} />
          </button>
          <span className="text-[#0F1314] text-[14px] md:text-[16px] font-normal">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center ${
              currentPage === totalPages && "opacity-50"
            }`}
          >
            <img src="/svgs/arrow.svg" alt="next" width={40} height={40} />
          </button>
        </div>
        <button
          onClick={category}
          className="bg-[#019ed1] px-4 rounded-md text-[16px] font-medium text-white"
        >
          Next
        </button>
      </div>
      {showModel && (
        <CatalogModel
          catalogModel={catalogModel}
          activeTab={activeTab}
          catalogData={catalogData}
        />
      )}
    </div>
  );
}
