"use client";
import React, { useState } from "react";
import Header from "./Header";
import CompanyInfo from "./CompanyInfo";
import LegalPolicy from "./LegalPolicy";
import AdaptorSetting from "./AdaptorSetting";
import Catalog from "./Catalog";
import Categories from "./Categories";

export default function BotBuilder() {
  const [showInfo, setShowInfo] = useState(true);
  const [showLegalPolicy, setShowLegalPolicy] = useState(false);
  const [showAdaptorSetting, setShowAdaptorSetting] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const companyInfo = () => {
    setShowInfo(true);
    setShowLegalPolicy(false);
    setShowAdaptorSetting(false);
    setShowCatalog(false);
    setShowCategories(false);
  };
  const legalPolicies = () => {
    setShowLegalPolicy(true);
    setShowInfo(false);
    setShowAdaptorSetting(false);
    setShowCatalog(false);
    setShowCategories(false);
  };
  const adaptor = () => {
    setShowAdaptorSetting(true);
    setShowInfo(false);
    setShowLegalPolicy(false);
    setShowCatalog(false);
    setShowCategories(false);
  };
  const catalog = () => {
    setShowCatalog(true);
    setShowInfo(false);
    setShowLegalPolicy(false);
    setShowAdaptorSetting(false);
    setShowCategories(false);
  };
  const category = () => {
    setShowCategories(true);
    setShowInfo(false);
    setShowLegalPolicy(false);
    setShowAdaptorSetting(false);
    setShowCatalog(false);
  };
  return (
    <div>
      <Header
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        companyInfo={companyInfo}
        showLegalPolicy={showLegalPolicy}
        setShowLegalPolicy={setShowLegalPolicy}
        legalPolicies={legalPolicies}
        showAdaptorSetting={showAdaptorSetting}
        setShowAdaptorSetting={setShowAdaptorSetting}
        adaptor={adaptor}
        showCatalog={showCatalog}
        setShowCatalog={setShowCatalog}
        catalog={catalog}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
        category={category}
      />
      {showInfo && (
        <CompanyInfo
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          companyInfo={companyInfo}
          legalPolicies={legalPolicies}
        />
      )}
      {showLegalPolicy && (
        <LegalPolicy
          showLegalPolicy={showLegalPolicy}
          setShowLegalPolicy={setShowLegalPolicy}
          legalPolicies={legalPolicies}
          companyInfo={companyInfo}
          adaptor={adaptor}
        />
      )}
      {showAdaptorSetting && (
        <AdaptorSetting
          showAdaptorSetting={showAdaptorSetting}
          setShowAdaptorSetting={setShowAdaptorSetting}
          adaptor={adaptor}
          legalPolicies={legalPolicies}
          catalog={catalog}
        />
      )}
      {showCatalog && (
        <Catalog
          showCatalog={showCatalog}
          setShowCatalog={setShowCatalog}
          catalog={catalog}
          adaptor={adaptor}
          category={category}
        />
      )}
      {showCategories && (
        <Categories
          showCategories={showCategories}
          setShowCategories={setShowCategories}
          category={category}
          catalog={catalog}
        />
      )}
    </div>
  );
}
