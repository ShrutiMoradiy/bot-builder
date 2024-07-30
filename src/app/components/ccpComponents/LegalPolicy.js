import React, { useState, useRef } from "react";

function LegalPolicy({ companyInfo, adaptor }) {
  const [attributes, setAttributes] = useState([
    { name: "Cancellation Contact", value: "support@timbresonic.com" },
    { name: "Cancellation Contact", value: "18002126775" },
    { name: "Cancellation Requirements", value: "Order number" },
    { name: "Cancellation Requirements", value: "Mobile number" },
    { name: "Cancellation Requirements", value: "Email address" },
    { name: "Cancellation Requirements", value: "KYC requirements" },
    { name: "Cancellation Requirements", value: "Satisfactory reason" },
    { name: "Cancellation Time", value: "48 hours" },
    {
      name: "Communication Consent",
      value:
        "By using this Website or by seeking or availing of any products and services, you consent to the terms of our Policy to receive communications from us by way of e-mails, phone calls, Whatsapp and SMS.",
    },
    {
      name: "Defects Covered",
      value: "Manufacturing defects in materials and workmanship",
    },
    {
      name: "Defects Covered",
      value:
        "Defects observed during the first 14 days after completion of product delivery",
    },
    {
      name: "Delivery Time",
      value:
        "The typical average delivery time is location dependent and ranges from 2 to 7 business days. For remote locations, the delivery period is extended to 7-10 business days.",
    },
    { name: "Exclusions", value: "Product not used/handled as per the manual" },
    { name: "Exclusions", value: "Product out of warranty" },
    {
      name: "Ineligible for Return or Replacement",
      value: "Ordering of incorrect product, model or colour by the customer",
    },
    {
      name: "Invoice",
      value:
        "All the orders placed on the Timbresonic website are shipped with an invoice.",
    },
    {
      name: "Order Processing Time",
      value:
        "Timbresonic commits to process and dispatch all confirmed orders within 2 business days.",
    },
    {
      name: "Product Examination",
      value:
        "Please examine the product at the time of product receipt, to verify if the packaging is tampered or damaged.",
    },
    {
      name: "Proof of Purchase",
      value: "Required for availing warranty services",
    },
    {
      name: "Replacement Conditions",
      value: "Product in same condition as received",
    },
  ]);
  const [urls, setUrls] = useState([
    { url: "https://timbresonic.com/pages/contact-us", status: "Processed" },
    { url: "20240516T141109537256081Z_TAMILNADU.pdf", status: "Unprocessed" },
    { url: "https://timbresonic.com/pages/contact-us", status: "Processed" },
    { url: "20240516T141109537256081Z_TAMILNADU.pdf", status: "Unprocessed" },
    { url: "https://timbresonic.com/pages/contact-us", status: "Processed" },
    { url: "20240516T141109537256081Z_TAMILNADU.pdf", status: "Unprocessed" },
  ]);
  const [values, setValues] = useState("");
  const [confirmUrl, setConfirmUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [urlToRemove, setUrlToRemove] = useState(null);

  const [key, setKey] = useState("");
  const [attributesValue, setAttributesValue] = useState("");

  const handleAddAttributes = () => {
    if (key && attributesValue) {
      setAttributes([...attributes, { name: key, value: attributesValue }]);
      setKey("");
      setAttributesValue("");
    }
  };

  const handleAttributesChange = (e, setFunction) => {
    setFunction(e.target.value);
  };

  const handleRemoveAttributes = (index) => {
    setAttributes(attributes.filter((_, i) => i !== index));
  };

  const fileRef = useRef(null);

  const handleAddUrl = () => {
    if (values) {
      setConfirmUrl(values);
      setShowModal(true);
    }
  };

  const handleInputChange = (e) => {
    setValues(e.target.value);
  };

  const handleRemoveUrl = (index) => {
    setUrlToRemove(index);
    setShowRemoveModal(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setConfirmUrl(file.name);
      setShowModal(true);
      fileRef.current.value = "";
    }
  };

  const handleFileUpload = () => {
    fileRef.current.click();
  };

  const handleConfirmUrl = () => {
    setUrls([...urls, { url: confirmUrl, status: "Unprocessed" }]);
    setConfirmUrl("");
    setValues("");
    setShowModal(false);
  };

  const handleCancelUrl = () => {
    setConfirmUrl("");
    setShowModal(false);
  };

  const handleConfirmRemoveUrl = () => {
    if (urlToRemove !== null) {
      setUrls(urls.filter((_, index) => index !== urlToRemove));
      setUrlToRemove(null);
    }
    setShowRemoveModal(false);
  };

  const handleCancelRemoveUrl = () => {
    setUrlToRemove(null);
    setShowRemoveModal(false);
  };
  return (
    <>
      <div className="w-full">
        <div className="flex">
          <div className="w-[30%] h-[70vh] border-r p-5">
            <div className="mb-2">
              <h1 className="text-[#0F1314] text-[18px] font-medium">
                Add Details
              </h1>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#0F1314] text-sm font-normal">
                Details about your company
              </label>
              <div className="flex items-center w-fit">
                <div className="border border-r-0 rounded-l-md h-[35px] flex items-center">
                  <span className="text-[#0F1314] text-[14px] opacity-50 px-2.5">
                    https://
                  </span>
                </div>
                <div className="border border-r-0 rounded-l-md -ml-1 h-[35px] flex items-center">
                  <input
                    type="text"
                    value={values || ""}
                    onChange={handleInputChange}
                    placeholder="Enter URL"
                    className="outline-none text-[#0F1314] text-[14px] px-2 w-[150px] xl:w-[280px]"
                  />
                </div>
                <div className="-ml-1">
                  <button
                    onClick={handleAddUrl}
                    className="bg-[#019ed1] text-white text-[14px] font-medium h-[35px] w-[50px] rounded-md"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div
                onClick={handleFileUpload}
                className="relative flex flex-col justify-center items-center mt-5 pt-2 bg-[#019ED1] bg-opacity-[3%] border border-dashed border-[#019ed1] h-[100px]"
              >
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".doc,.docx,.pdf"
                />

                <img
                  src="/svgs/EmailTemplate/upload.svg"
                  alt="upload"
                  width={18}
                  height={18}
                />
                <span className="text-[#858395] text-[13px] font-normal text-center w-[55%]">
                  Drag & Drop or Choose file to upload DOC, DOCX or PDF
                </span>
                <div className="absolute bg-white rounded-full text-xs font-medium p-1.5 -top-[15px]">
                  OR
                </div>
              </div>
            </div>
            <div
              className="h-[34.5vh] overflow-y-scroll mt-4 -mr-5 pr-4"
              style={{ scrollbarWidth: "thin" }}
            >
              {urls.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f9f9fa] border rounded-md p-2 my-4"
                >
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F1314] text-sm font-normal break-words w-[245px] xl:w-[300px]">
                      {item.url}
                    </p>
                    <img
                      src="/svgs/close.svg"
                      alt="close"
                      width={15}
                      height={15}
                      className="cursor-pointer"
                      onClick={() => handleRemoveUrl(index)}
                    />
                  </div>
                  <span className="text-[#0F1314] opacity-[65%] text-sm font-normal">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[70%] border-r">
            <div className="flex flex-col gap-3 border-b p-5">
              <h1 className="text-[#0F1314] text-[18px] font-medium">
                Add Attribute
              </h1>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="New Attribute"
                  value={key}
                  onChange={(e) => handleAttributesChange(e, setKey)}
                  className="border rounded-md outline-none w-full px-2 py-1"
                />
                <input
                  type="text"
                  placeholder="New Value"
                  value={attributesValue}
                  onChange={(e) =>
                    handleAttributesChange(e, setAttributesValue)
                  }
                  className="border rounded-md outline-none w-full px-2 py-1"
                />
                <button
                  onClick={handleAddAttributes}
                  className="bg-[#019ed1] text-white text-[16px] font-medium h-[35px] w-[150px] rounded-md"
                >
                  Add
                </button>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 p-5 h-[54.5vh] overflow-y-scroll"
              style={{ scrollbarWidth: "thin" }}
            >
              <h1 className="text-[#0F1314] text-[16px] font-normal">
                Attributes({attributes.length})
              </h1>
              <div className="flex flex-wrap gap-2">
                {attributes.map((attribute, index) => (
                  <div
                    key={index}
                    className="bg-[#019ed1] bg-opacity-[5%] border rounded-full flex justify-between items-center gap-1 p-2"
                  >
                    <div className="flex gap-1">
                      <span className="text-[#027296] opacity-80 text-xs font-semibold">
                        {attribute.name} :
                      </span>
                      <p className="text-[#0F1314] opacity-[65%] text-xs font-normal">
                        {attribute.value}
                      </p>
                    </div>
                    <img
                      src="/svgs/close.svg"
                      alt="close"
                      width={12}
                      height={12}
                      onClick={() => handleRemoveAttributes(index)}
                      className="opacity-60 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#0F1314] bg-opacity-50">
            <div className="bg-white p-5 rounded-md shadow-lg w-[450px] h-[250px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-medium mb-4">Confirm URL</h2>
                  <img
                    src="/svgs/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    onClick={handleCancelUrl}
                  />
                </div>
                <p className="mb-4">Do you want to add this URL?</p>
                <p className="break-words">{confirmUrl}</p>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="border-2 text-[#0F1314] px-3 py-2 rounded-md"
                  onClick={handleCancelUrl}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#019ed1] text-white px-3 py-2 rounded-md"
                  onClick={handleConfirmUrl}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
        {showRemoveModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-md shadow-lg">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-medium mb-5">Confirm Removal</h2>
                <img
                  src="/svgs/close.svg"
                  alt="close"
                  width={20}
                  height={20}
                  onClick={handleCancelRemoveUrl}
                />
              </div>
              <p className="mb-1">Do you want to remove this URL?</p>
              <p className="break-words">{urls[urlToRemove]?.url}</p>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded-md"
                  onClick={handleCancelRemoveUrl}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#019ed1] text-white px-4 py-2 rounded-md"
                  onClick={handleConfirmRemoveUrl}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="border-t p-4 flex justify-between">
          <button
            onClick={companyInfo}
            className="border border-[#019ed1] p-2 rounded-md text-[#019ed1] text-[16px] font-medium"
          >
            Previous
          </button>
          <button
            onClick={adaptor}
            className="bg-[#019ed1] px-4 rounded-md text-[16px] font-medium text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default LegalPolicy;
