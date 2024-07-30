import React from "react";

export default function Ecommerce({ isActive, toggleButton, adaptorModel }) {
  const ecommerceData = [
    {
      id: "64f81a2eb472b0c1209701a6",
      adapterTypeId: "64f81a84b472b0c1209701a7",
      status: "ACTIVE",
      adapterName: "shopify",
      tmCategory: null,
      adapterTypeKeys: [
        "shop_name",
        "access_token",
        "x-shopify-hmac-sha256",
        "app_secret_key",
        "app_key",
      ],
      adapterTypeName: "ECOMMERCE",
      logo: "/svgs/shopify.png",
      adapterDetails:
        "No.1 eCommerce Platform for All Businesses. Start, Run + Grow Your Business with Shopify®. Customize Your Store With Our Website Builder. Trusted by Millions of Businesses. 100+ Professional Themes. Shop Pay at Checkout. Fraud Prevention.",
    },
  ];
  return (
    <div className="h-[70vh]">
      <div className="flex flex-col gap-3 border-b p-5">
        <h1 className="text-[#0F1314] text-[18px] font-medium">
          Ecommerce
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-5">
        {ecommerceData.map((adapter) => (
          <div
            key={adapter.id}
            className="flex items-center justify-between gap-4 p-5 border rounded-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={adapter.logo}
                alt={`${adapter.adapterName}_logo`}
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0F1314] text-[16px] font-medium">
                  {adapter.adapterName}
                </h3>
                <p className="text-[#0F1314] text-[13px] font-normal">
                  {adapter.adapterDetails || "No details present."}
                </p>
              </div>
            </div>
            {adapter.status === "ACTIVE" ? (
              <div className="flex items-center gap-2 w-[20%]">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`p-[2px] rounded-full flex items-center border w-[28px] ${
                      isActive
                        ? "border-[#787878]"
                        : "border-[#019ED1] justify-end"
                    }`}
                    onClick={toggleButton}
                  >
                    <span
                      className={`w-[8px] h-[8px] rounded-full ${
                        isActive ? "bg-[#787878]" : "bg-[#019ED1]"
                      }`}
                    />
                  </span>
                  <span className="text-[#0F1314] text-sm font-normal">
                    {isActive ? `Inactive` : `Active`}
                  </span>
                </div>
                <div
                  onClick={() => adaptorModel(adapter)}
                  className="flex items-center justify-center border rounded w-[25px] h-[25px]"
                >
                  <img src="/svgs/edit.svg" alt="edit" width={20} height={20} />
                </div>
              </div>
            ) : (
              <button
                onClick={() => adaptorModel(adapter)}
                className="bg-[#019ed1] p-4 rounded-md text-[16px] font-medium text-white"
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
