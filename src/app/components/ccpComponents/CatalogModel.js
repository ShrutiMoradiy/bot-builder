import React, { useState, useEffect } from "react";
import CatalogCategory from "./CatalogList/CatalogCategory";
import CatalogFeatures from "./CatalogList/CatalogFeatures";
import CatalogTags from "./CatalogList/CatalogTags";
import CatalogGenre from "./CatalogList/CatalogGenre";
import CatalogPdfs from "./CatalogList/CatalogPdfs";

export default function CatalogModel({ catalogModel, activeTab }) {
  const [category, setCategory] = useState(false);
  const [features, setFeatures] = useState(false);
  const [tags, setTags] = useState(false);
  const [genre, setGenre] = useState(false);
  const [pdf, setPdf] = useState(false);

  useEffect(() => {
    switch (activeTab) {
      case "Category":
        setCategory(true);
        break;
      case "Product Features":
        setFeatures(true);
        break;
      case "Tags":
        setTags(true);
        break;
      case "Genre":
        setGenre(true);
        break;
      case "PDF":
        setPdf(true);
        break;
      default:
        setCategory(true);
    }
  }, [activeTab]);

  const showCategory = () => {
    setCategory(true);
    setFeatures(false);
    setTags(false);
    setGenre(false);
    setPdf(false);
  };
  const showFeatures = () => {
    setFeatures(true);
    setCategory(false);
    setTags(false);
    setGenre(false);
    setPdf(false);
  };
  const showTags = () => {
    setTags(true);
    setCategory(false);
    setFeatures(false);
    setGenre(false);
    setPdf(false);
  };
  const showGenre = () => {
    setGenre(true);
    setCategory(false);
    setFeatures(false);
    setTags(false);
    setPdf(false);
  };
  const showPdfs = () => {
    setPdf(true);
    setCategory(false);
    setFeatures(false);
    setTags(false);
    setGenre(false);
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#0F1314] bg-opacity-50">
        <div className="bg-white p-5 rounded-md shadow-lg w-[50%] h-[70%] flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h1 className="text-[#0F1314] text-[18px] font-medium">
              Ace | Portable & Power-Packed Speaker with vibrant LED Lights
            </h1>
            <img
              src="/svgs/close.svg"
              alt="close"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={catalogModel}
            />
          </div>
          <div className="flex gap-4 items-center border-b">
            <span
              className={`text-[16px] pb-1.5 ${
                category
                  ? "text-[#019ed1] font-medium border-b-2 border-[#019ed1]"
                  : "text-[#0F1314] font-normal"
              }`}
              onClick={showCategory}
            >
              Category
            </span>
            <span
              className={`text-[16px] pb-1.5 ${
                features
                  ? "text-[#019ed1] font-medium border-b-2 border-[#019ed1]"
                  : "text-[#0F1314] font-normal"
              }`}
              onClick={showFeatures}
            >
              Features
            </span>
            <span
              className={`text-[16px] pb-1.5 ${
                tags
                  ? "text-[#019ed1] font-medium border-b-2 border-[#019ed1]"
                  : "text-[#0F1314] font-normal"
              }`}
              onClick={showTags}
            >
              Tags
            </span>
            <span
              className={`text-[16px] pb-1.5 ${
                genre
                  ? "text-[#019ed1] font-medium border-b-2 border-[#019ed1]"
                  : "text-[#0F1314] font-normal"
              }`}
              onClick={showGenre}
            >
              Genre
            </span>
            <span
              className={`text-[16px] pb-1.5 ${
                pdf
                  ? "text-[#019ed1] font-medium border-b-2 border-[#019ed1]"
                  : "text-[#0F1314] font-normal"
              }`}
              onClick={showPdfs}
            >
              PDF
            </span>
          </div>

          {category && <CatalogCategory />}
          {features && <CatalogFeatures />}
          {tags && <CatalogTags />}
          {genre && <CatalogGenre />}
          {pdf && <CatalogPdfs />}
        </div>
      </div>
    </>
  );
}
