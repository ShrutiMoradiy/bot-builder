import React from "react";

export default function CRM({ isActive, toggleButton, adaptorModel }) {
  const crmData = [
    
    {
      id: "664c977339f7080795f0e7dc",
      adapterTypeId: "64febcb047b92915d3a9bd1c",
      status: "ACTIVE",
      adapterName: "freshdesk",
      tmCategory: null,
      adapterTypeKeys: ["api_key", "domain_name"],
      adapterTypeName: "CRM",
      logo: "/svgs/freshdesk.png",
      adapterDetails:
        "A unique and powerful software suite to transform the way you work; built by a company that values your privacy.",
    },
    {
      id: "667bee8dc2769258b220bab4",
      adapterTypeId: "64febcb047b92915d3a9bd1c",
      status: "ACTIVE",
      adapterName: "tmticket",
      tmCategory: null,
      adapterTypeKeys: [],
      adapterTypeName: "CRM",
      logo: "/svgs/teckmonk_logo.png",
      adapterDetails: null,
    },
    {
      id: "64febcdbd5cae646d50f614b",
      adapterTypeId: "64febcb047b92915d3a9bd1c",
      status: "ACTIVE",
      adapterName: "zoho",
      tmCategory: null,
      adapterTypeKeys: [
        "access_token",
        "org_id",
        "client_id",
        "client_secret",
        "grant_type",
        "refreh_token",
        "departmentId",
        "webhook_callback",
      ],
      adapterTypeName: "CRM",
      logo: "/svgs/zoho-logo.png",
      adapterDetails:
        "A unique and powerful software suite to transform the way you work; built by a company that values your privacy.",
    },
  ];
  return (
    <div className="h-[70vh]">
      <div className="flex flex-col gap-3 border-b p-5">
        <h1 className="text-[#0F1314] text-[18px] font-medium">
          CRM
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-5">
        {crmData.map((adapter) => (
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
            {adapter.adapterName === "zoho" ? (
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
