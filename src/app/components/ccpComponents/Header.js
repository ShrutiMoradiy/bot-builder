import React from "react";

export default function Header({
  showInfo,
  companyInfo,
  showLegalPolicy,
  legalPolicies,
  showAdaptorSetting,
  adaptor,
  showCatalog,
  catalog,
  showCategories,
  category,
}) {
  
  const currentStep = showInfo ? 1 : showLegalPolicy ? 2 : showAdaptorSetting ? 3 : showCatalog ? 4 : showCategories ? 5 : 0;

  return (
    <>
      <div className="w-full bg-[#f9f9fa] flex justify-center p-4">
        <h1 className="text-[#0F1314] text-[20px] font-semibold">
          Bot Builder
        </h1>
      </div>
      <div className="w-full border-b p-5">
        <ul className="flex gap-4">
          <li
            className={`flex gap-4 items-center text-[#019ED1] text-[16px] font-medium cursor-pointer ${
              currentStep === 1
                ? "text-[#019ed1]"
                : currentStep > 1
                ? "text-[#027296]"
                : "text-[#0F1314] text-[16px] font-medium opacity-40"
            }`}
            onClick={companyInfo}
          >
            <span
              className={`rounded-full w-[25px] h-[25px] flex justify-center items-center ${
                currentStep === 1
                  ? "border border-[#019ed1] bg-white text-[#019ed1]"
                  : currentStep > 1
                  ? "bg-[#027296] bg-opacity-[15%] text-[#027296]"
                  : "text-[#0F1314] bg-[#0F1314] bg-opacity-10 font-semibold"
              }`}
            >
              1
            </span>
            Company Info
          </li>
          <li
            className={`flex gap-4 items-center text-[#019ED1] text-[16px] font-medium cursor-pointer ${
              currentStep === 2
                ? "text-[#019ed1]"
                : currentStep > 2
                ? "text-[#027296]"
                : "text-[#0F1314] text-[16px] font-medium opacity-40"
            }`}
            onClick={legalPolicies}
          >
            <span
              className={`rounded-full w-[25px] h-[25px] flex justify-center items-center ${
                currentStep === 2
                  ? "border border-[#019ed1] bg-white text-[#019ed1]"
                  : currentStep > 2
                  ? "bg-[#027296] bg-opacity-[15%] text-[#027296]"
                  : "text-[#0F1314] bg-[#0F1314] bg-opacity-10 font-semibold"
              }`}
            >
              2
            </span>
            Legal / Policy
          </li>
          <li
            className={`flex gap-4 items-center text-[#019ED1] text-[16px] font-medium cursor-pointer ${
              currentStep === 3
                ? "text-[#019ed1]"
                : currentStep > 3
                ? "text-[#027296]"
                : "text-[#0F1314] text-[16px] font-medium opacity-40"
            }`}
            onClick={adaptor}
          >
            <span
              className={`rounded-full w-[25px] h-[25px] flex justify-center items-center ${
                currentStep === 3
                  ? "border border-[#019ed1] bg-white text-[#019ed1]"
                  : currentStep > 3
                  ? "bg-[#027296] bg-opacity-[15%] text-[#027296]"
                  : "text-[#0F1314] bg-[#0F1314] bg-opacity-10 font-semibold"
              }`}
            >
              3
            </span>
            Adaptor Setting
          </li>
          <li
            className={`flex gap-4 items-center text-[#019ED1] text-[16px] font-medium cursor-pointer ${
              currentStep === 4
                ? "text-[#019ed1]"
                : currentStep > 4
                ? "text-[#027296]"
                : "text-[#0F1314] text-[16px] font-medium opacity-40"
            }`}
            onClick={catalog}
          >
            <span
              className={`rounded-full w-[25px] h-[25px] flex justify-center items-center ${
                currentStep === 4
                  ? "border border-[#019ed1] bg-white text-[#019ed1]"
                  : currentStep > 4
                  ? "bg-[#027296] bg-opacity-[15%] text-[#027296]"
                  : "text-[#0F1314] bg-[#0F1314] bg-opacity-10 font-semibold"
              }`}
            >
              4
            </span>
            Catalog
          </li>
          <li
            className={`flex gap-4 items-center text-[#019ED1] text-[16px] font-medium cursor-pointer ${
              currentStep === 5
                ? "text-[#019ed1]"
                : currentStep > 5
                ? "text-[#027296]"
                : "text-[#0F1314] text-[16px] font-medium opacity-40"
            }`}
            onClick={category}
          >
            <span
              className={`rounded-full w-[25px] h-[25px] flex justify-center items-center ${
                currentStep === 5
                  ? "border border-[#019ed1] bg-white text-[#019ed1]"
                  : currentStep > 5
                  ? "bg-[#027296] bg-opacity-[15%] text-[#027296]"
                  : "text-[#0F1314] bg-[#0F1314] bg-opacity-10 font-semibold"
              }`}
            >
              5
            </span>
            Categories
          </li>
        </ul>
      </div>
    </>
  );
}
