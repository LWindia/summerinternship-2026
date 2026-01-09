"use client";

import React from "react";
import { OurAlumniWorksAtCarousel } from "../../ui2/OurAlumniWorksAtCarousel";

// Company logos imports

// Company logo paths - using absolute paths from public folder
const Google = "/assets/companyLogo/google.png";
const TCS = "/assets/companyLogo/tcs.png";
const Infosys = "/assets/companyLogo/infosys.png";
const Salesforce = "/assets/companyLogo/salesforce.png";
const Intel = "/assets/companyLogo/intel.png";
const RedHat = "/assets/companyLogo/redhat.png";
const Razorpay = "/assets/companyLogo/razorpay.png";
const Wipro = "/assets/companyLogo/wipro.png";
const Zoho = "/assets/companyLogo/zoho.png";
const Oracle = "/assets/companyLogo/oracle.png";
const Searce = "/assets/companyLogo/searce.png";
const Syfe = "/assets/companyLogo/syfe.png";
const Paytm = "/assets/companyLogo/paytm.png";
const PWC = "/assets/companyLogo/pwc.png";
const Nykaa = "/assets/companyLogo/nykaa.png";
const NPCI = "/assets/companyLogo/NPCI_logo.png";
const Accenture = "/assets/companyLogo/accenture.png";
const JPMorgan = "/assets/companyLogo/jpmorgan.png";
const Microsoft = "/assets/companyLogo/microsoft.png";
const Deloitte = "/assets/companyLogo/deloitte.png";
const Dell = "/assets/companyLogo/dell.png";
const IBM = "/assets/companyLogo/ibm.png";
const pinkcompany = "/assets/companyLogo/36.png";
const Mercedece = "/assets/companyLogo/Mercedes-Benz_Logo_2010.svg.png";
const Tesco = "/assets/companyLogo/tesco.png";
const Airtel = "/assets/companyLogo/airtel.png";
const Allianz = "/assets/companyLogo/allianz.png";
const BankOfAmerica = "/assets/companyLogo/bankofamerica.png";
const BigBasket = "/assets/companyLogo/bigbasket.png";
const BluePlanet = "/assets/companyLogo/blueplanet.png";
const Capgemini = "/assets/companyLogo/capgemini.png";
const shyenaTech = "/assets/companyLogo/shyenaTechLogo.png";
const quantifi = "/assets/companyLogo/quantfi.png";
const peerxp = "/assets/companyLogo/peerXp-Photoroom.png";
const unthinkable = "/assets/companyLogo/logo_unthinkable_dbd9877981.png";

import localFont from "next/font/local";
const khandFont = localFont(
  {
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
  }

)
export function LeftRightAlumniCarousel() {
  
  return (
    <div className="max-w-full px-4 md:py-6 lg:py-6 py-6 mx-auto relative bg-white">
      <div className="text-center mb-8">
        <div className="font-bold text-3xl md:text-4xl lg:text-4xl inline-block ">
          <span className={`text-[#ff0000] ${khandFont.className} text-3xl`}>Our  Summer Learner&apos;s Are Working At </span>
        </div>
        {/* <div className="text-gray-500 ">
          Become a part of our Alumni working at Leading Companies
        </div> */}
      </div>

      {/* First row - Moving Left */}
      <div className="flex flex-col items-center justify-center relative overflow-hidden mt-6">
        <OurAlumniWorksAtCarousel
          items={companiesRow1}
          direction="left"
          speed="slow"
          cardWidth={160}
          cardHeight={80}
        />
      </div>

      {/* Second row - Moving Right */}
      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        <OurAlumniWorksAtCarousel 
          items={companiesRow2}
          direction="right"
          speed="slow"
          cardWidth={160}
          cardHeight={80}
        />
      </div>
    </div>    
  );
}

const companiesRow1 = [
  { image: Google },
  { image: BigBasket },
  { image: Microsoft },
  { image: IBM },
  { image: TCS },
  { image: Infosys },
  { image: Salesforce },
  { image: Intel },
  { image: RedHat },
  { image: PWC },
  { image: peerxp },
  { image: Wipro },
  { image: Zoho },
  { image: Oracle },
  { image: Searce },
  { image: Syfe },
  { image: Paytm },
  { image: JPMorgan },
];

const companiesRow2 = [
  { image: Accenture },
  { image: Capgemini },
  { image: Nykaa },
  { image: NPCI },
  { image: Accenture },
  { image: unthinkable },
  { image: Razorpay },
  { image: Deloitte },
  { image: Dell },
  { image: pinkcompany },
  { image: Mercedece },
  { image: Tesco },
  { image: Airtel },
  { image: Allianz },
  { image: BankOfAmerica },
  { image: quantifi },
  { image: BluePlanet },
  { image: shyenaTech },
];