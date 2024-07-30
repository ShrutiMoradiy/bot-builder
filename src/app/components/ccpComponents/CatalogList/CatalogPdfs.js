import React, { useState, useRef } from "react";

export default function CatalogPdfs() {
  const [urls, setUrls] = useState([]);
  const [values, setValues] = useState("");
  const [confirmUrl, setConfirmUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [urlToRemove, setUrlToRemove] = useState(null);

  const fileRef = useRef(null);

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
    setUrls([...urls, { url: confirmUrl }]);
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
      <div className="flex flex-col gap-2 w-full">
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
        <div
          className="h-[34.5vh] overflow-y-scroll mt-4 -mr-5 pr-4"
          style={{ scrollbarWidth: "none" }}
        >
          {urls.map((item, index) => (
            <div
              key={index}
              className="bg-[#019ed1] bg-opacity-10 flex justify-between gap-2 border rounded-full p-2 my-4"
            >
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
          ))}
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
          <div className="bg-white p-5 rounded-md shadow-lg w-[450px] h-[250px] flex flex-col justify-between"> 
          <div>
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-medium mb-4">Confirm URL</h2>
                <img
                  src="/svgs/close.svg"
                  alt="close"
                  width={20}
                  height={20}
                  onClick={handleCancelRemoveUrl}
                />
              </div>
              <p className="mb-4">Do you want to add this URL?</p>
              <p className="break-words">{urls[urlToRemove]?.url}</p>
            </div>
            <div className="flex justify-end gap-2 mt-4">
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
    </>
  );
}
