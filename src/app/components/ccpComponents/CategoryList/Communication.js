import React from "react";

const communicationData = [
  {
    id: "6502e5b11c4cb6441a0b9421",
    adapterTypeId: "64fec234d5cae646d50f6152",
    status: "ACTIVE",
    adapterName: "Telegram",
    tmCategory: null,
    adapterTypeKeys: ["Phone Number", "Code"],
    adapterTypeName: "COMMUNICATION",
    logo: "/svgs/Telegram_logo.svg",
    adapterDetails: null,
  },
  {
    id: "651bef74650b7d11c8f41340",
    adapterTypeId: "64fec234d5cae646d50f6152",
    status: "ACTIVE",
    adapterName: "Whatsapp",
    tmCategory: null,
    adapterTypeKeys: ["apikey", "appname", "source"],
    adapterTypeName: "COMMUNICATION",
    logo: "/svgs/gupshup.png",
    adapterDetails:
      "Automate conversational engagement on WhatsApp Business. Engage customers across sales, marketing, and support journeys—with their consent, conversationally and in real-time.",
  },
];

export default function Communication({
  isActive,
  toggleButton,
  adaptorModel,
}) {
  return (
    <div className="h-[70vh]">
      <div className="flex flex-col gap-3 border-b p-5">
        <h1 className="text-[#0F1314] text-[18px] font-medium">
          Communication
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-5">
        {communicationData.map((adapter) => (
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
            {adapter.adapterName === "Whatsapp" ? (
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
