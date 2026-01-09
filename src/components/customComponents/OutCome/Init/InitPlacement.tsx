import React from "react";
import Image from "next/image";
// Image paths - using absolute paths from public folder
const arpitJindal = "/assets/placed-students-photos/arpitjindal.png";
const akanshAgarwal = "/assets/placed-students-photos/akanshagarwal.png";
const mannansiddiqui = "/assets/placed-students-photos/mannansiddhiqui.png";

const unthinkable = "/assets/internshiplogo/logo_unthinkable_dbd9877981.png";
const mercedes = "/assets/internshiplogo/Mercedes-Benz_Logo_2010.svg.png";
const NPCI = "/assets/internshiplogo/NPCI_logo.png";
const quantiphi = "/assets/internshiplogo/quantfi.png";
const peerxp = "/assets/internshiplogo/peerXp-Photoroom.png";
const paytm2 = "/assets/companyLogo/paytm.png";
const searce2 = "/assets/companyLogo/searce.png";
const redhat2 = "/assets/companyLogo/redhat.png";
const tcs2 = "/assets/companyLogo/tcs.png";


const InitPlacement = () => {
  const employees = [
        {
          name: "Arpit Jindal",
          college: "VIT Vellore",
          designation: "DevOps Consultant",
          package: "12 LPA",
          companyLogo: mercedes,
          photo: arpitJindal, // Image path
          linkding:"https://www.linkedin.com/in/arpit-jindal-1b52831a3/"
        },
        {
          name: "Akansh Agarwal",
          college: "Shri Ram Murti Smarak College, Bareilly",
          designation: "Framework Engineer",
          package: "8.5 LPA",
          companyLogo: quantiphi,
          photo: akanshAgarwal, // Image path  
          linkding:"https://www.linkedin.com/in/akansh-agarwal/"
            },

        {
          name: "Mannan Siddiqui",
          college: "Gautam Buddha University Uttar Pradesh",
          designation: "Associate MLOPS Engineer",
          package: "9.4 LPA",
          companyLogo: NPCI,
          photo: mannansiddiqui,
          linkding:"https://www.linkedin.com/in/mannansiddiqui/" // Image path
        },
        
             
               ];
  return (
    <div className="bg-[#181A1B]" id="successstories">
    <div className="flex flex-col items-center min-h-screen p-12 bg-[#181A1B]">
      {/* Component Title */}
      <h1 className="text-lg sm:text-2xl text-white">
        {/* Our <span className="text-[#ff0000]">Placed </span>Students */}

        Rising Engineers, <span className="text-[#ff0000]">From INIT</span> 

      </h1>
      <h1 className="text-sm  sm:text-lg text-white pt-2 mb-8"> Learn - Build - Lead with <span className="text-[#ff0000]"> Mr Vimal Daga</span> 
      </h1>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="relative border-2 rounded-lg shadow-lg bg-pink-100 w-[300px] h-[360px] flex flex-col items-center"
          >

            <a href={employee.linkding} target="blank">
            {/* Pin Icon */}
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
              📌
            </div>

            {/* Profile Image and Name */}
            <div className="flex flex-col items-center w-full mt-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#ff0000] flex-shrink-0 relative">
                <Image
                  src={employee.photo}
                  alt={employee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-[#ff0000] break-words">
                  {employee.name}
                </h3>
                <p className="text-sm text-gray-600 break-words">
                  {employee.college}
                </p>
              </div>
            </div>

            {/* Designation */}
            <div className="mt-4 text-center text-gray-800 font-semibold">
              <p>Got Selected as</p>
              <p className="text-[#ff0000]">{employee.designation}</p>
            </div>

            {/* Salary Package */}
            <div className="mt-4 bg-[#ff0000] text-white py-2  w-72 text-center text-lg font-bold">
              {employee.package}
            </div>

            {/* Company Logo */}
            <div className="mt-4 m-4 flex justify-center items-center relative w-32 h-16">
              <Image
                src={employee.companyLogo}
                alt="Company Logo"
                fill
                className="object-contain"
              />
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default InitPlacement;
