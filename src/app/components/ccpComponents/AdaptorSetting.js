import React, { useState } from "react";
import Communication from "./CategoryList/Communication";
import CRM from "./CategoryList/CRM";
import Ecommerce from "./CategoryList/Ecommerce";
import Logistics from "./CategoryList/Logistics";
import AdaptorModel from "./AdaptorModel";

function AdaptorSetting({ legalPolicies, catalog }) {
  const [adaptorData, setAdaptorData] = useState([
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
      logo: "/content/images/shopify.png",
      adapterDetails:
        "No.1 eCommerce Platform for All Businesses. Start, Run + Grow Your Business with Shopify®. Customize Your Store With Our Website Builder. Trusted by Millions of Businesses. 100+ Professional Themes. Shop Pay at Checkout. Fraud Prevention.",
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
      logo: "/content/images/zoho-logo.png",
      adapterDetails:
        "A unique and powerful software suite to transform the way you work; built by a company that values your privacy.",
    },
    {
      id: "64fec33dd5cae646d50f6156",
      adapterTypeId: "64fec2d3d5cae646d50f6155",
      status: "ACTIVE",
      adapterName: "shiprocket",
      tmCategory: null,
      adapterTypeKeys: [
        "email",
        "password",
        "pickup_postcode",
        "weight",
        "access_token",
      ],
      adapterTypeName: "LOGISTICS",
      logo: "/content/images/shiprocket.png",
      adapterDetails:
        "India’s #1 eCommerce shipping solution, trusted by over 100k+ brands and entrepreneurs for lowest shipping rates, widest reach and best customer service.",
    },
    {
      id: "6502e5b11c4cb6441a0b9421",
      adapterTypeId: "64fec234d5cae646d50f6152",
      status: "ACTIVE",
      adapterName: "Telegram",
      tmCategory: null,
      adapterTypeKeys: ["Phone Number", "Code"],
      adapterTypeName: "COMMUNICATION",
      logo: "/content/images/Telegram_logo.svg",
      adapterDetails: null,
    },
    {
      id: "651bef74650b7d11c8f41340",
      adapterTypeId: "64fec234d5cae646d50f6152",
      status: "ACTIVE",
      adapterName: "whatsapp",
      tmCategory: null,
      adapterTypeKeys: ["apikey", "appname", "source"],
      adapterTypeName: "COMMUNICATION",
      logo: "/content/images/gupshup.png",
      adapterDetails:
        "Automate conversational engagement on WhatsApp Business.Engage customers across sales, marketing and support journeys-with their consent, conversationally and in real-time",
    },
    {
      id: "664c977339f7080795f0e7dc",
      adapterTypeId: "64febcb047b92915d3a9bd1c",
      status: "ACTIVE",
      adapterName: "freshdesk",
      tmCategory: null,
      adapterTypeKeys: ["api_key", "domain_name"],
      adapterTypeName: "CRM",
      logo: "/content/images/freshdesk.png",
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
      logo: "/content/images/teckmonk_logo.png",
      adapterDetails: null,
    },
  ]);
  const [isActive, setIsActive] = useState(false);
  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const [showModel, setShowModel] = useState(false);
  const [selectedAdapter, setSelectedAdapter] = useState(null);

  const adaptorModel = (adapter) => {
    setSelectedAdapter(adapter);
    setShowModel(!showModel);
  };

  const [showCommunication, setShowCommunication] = useState(true);
  const [showCRM, setShowCRM] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [showLogistic, setShowLogistic] = useState(false);

  const communications = () => {
    setShowCommunication(true);
    setShowCRM(false);
    setShowEcommerce(false);
    setShowLogistic(false);
  };
  const crm = () => {
    setShowCRM(true);
    setShowCommunication(false);
    setShowEcommerce(false);
    setShowLogistic(false);
  };
  const ecommerce = () => {
    setShowEcommerce(true);
    setShowCommunication(false);
    setShowCRM(false);
    setShowLogistic(false);
  };
  const logistics = () => {
    setShowLogistic(true);
    setShowCommunication(false);
    setShowCRM(false);
    setShowEcommerce(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex">
          <div className="w-[30%] h-[70vh] border-r p-5">
            <div className="mb-2">
              <h1 className="text-[#0F1314] text-[18px] font-medium">
                Categories
              </h1>
            </div>

            <div
              className={`border rounded-md p-2 my-4 ${
                showCommunication
                  ? "bg-[#019ed1] bg-opacity-10"
                  : "bg-[#f9f9fa]"
              }`}
              onClick={communications}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">
                  COMMUNICATION
                </p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border rounded-md p-2 my-4 ${
                showCRM ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={crm}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">CRM</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border rounded-md p-2 my-4 ${
                showEcommerce ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={ecommerce}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">ECOMMERCE</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border rounded-md p-2 my-4 ${
                showLogistic ? "bg-[#019ed1] bg-opacity-10" : "bg-[#f9f9fa]"
              }`}
              onClick={logistics}
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-[#019ed1] text-sm font-medium">LOGISTICS</p>
                <img
                  src="/svgs/arrow-right.svg"
                  alt="close"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div
            className="w-[70%] max-h-[80vh] border-r overflow-y-scroll"
            style={{ scrollbarWidth: "thin" }}
          >
            {showCommunication && (
              <Communication
                showCommunication={showCommunication}
                communications={communications}
                isActive={isActive}
                adaptorModel={adaptorModel}
                toggleButton={toggleButton}
              />
            )}
            {showCRM && (
              <CRM
                showCRM={showCRM}
                crm={crm}
                isActive={isActive}
                adaptorModel={adaptorModel}
                toggleButton={toggleButton}
              />
            )}
            {showEcommerce && (
              <Ecommerce
                showEcommerce={showEcommerce}
                ecommerce={ecommerce}
                isActive={isActive}
                adaptorModel={adaptorModel}
                toggleButton={toggleButton}
              />
            )}
            {showLogistic && (
              <Logistics
                showLogistic={showLogistic}
                logistics={logistics}
                isActive={isActive}
                adaptorModel={adaptorModel}
                toggleButton={toggleButton}
              />
            )}
          </div>
        </div>
        <div className="border-t p-4 flex justify-between">
          <button
            onClick={legalPolicies}
            className="border border-[#019ed1] p-2 rounded-md text-[#019ed1] text-[16px] font-medium"
          >
            Previous
          </button>
          <button
            onClick={catalog}
            className="bg-[#019ed1] px-4 rounded-md text-[16px] font-medium text-white"
          >
            Next
          </button>
        </div>

        {showModel && (
          <AdaptorModel
            adaptorModel={adaptorModel}
            showModel={showModel}
            selectedAdapter={selectedAdapter}
            setShowModel={setShowModel}
          />
        )}
      </div>
    </>
  );
}

export default AdaptorSetting;
