import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import Github from "./components/Pages/Servicing";
import About from "./About/About";
import Products from "./components/Pages/Product";

import HospitalManagementSystem from "./Products/Healthcare/HospitalManagementSystem/HospitalManagementSystem";
import PharmacyMangementSystem from "./Products/Healthcare/PharmacyMangementSystem/PharmacyMangementSystem";
import BloodBankManagementSystem from "./Products/Healthcare/BloodBankManagementSystem/BloodBankManagementSystem";
import LabratorymanagementSystem from "./Products/Healthcare/LabratorymanagementSystem/LabratorymanagementSystem";
import SchoolManagementSystem from "./Products/Education/SchoolManagementSystem";
import CollegeManagementsystem from "./Products/Education/CollegeManagementsystem";
import LibraryMangementSystem from "./Products/Education/LibraryMangementSystem";
import HostelManagementSystem from "./Products/Education/HostelManagementSystem";
import LearningManagementSystem from "./Products/Education/LearningManagementSystem";
import ECommerceWebDesign from "./Products/webbasedsolutions/ECommerceWebDesign";
import JobPortalWebDesign from "./Products/webbasedsolutions/JobPortalWebDesign";
import JewelleryWebDesign from "./Products/webbasedsolutions/JewelleryWebDesign";
import TourismWebDesign from "./Products/webbasedsolutions/TourismWebDesign";
import CorporateWebDesign from "./Products/webbasedsolutions/CorporateWebDesign";
import SchoolWebDesign from "./Products/webbasedsolutions/SchoolWebDesign";
import RealEstateWebDesign from "./Products/webbasedsolutions/RealEstateWebDesign";
import ConstructionWebDesign from "./Products/webbasedsolutions/ConstructionWebDesign";
import FashionWebDesign from "./Products/webbasedsolutions/FashionWebDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "hospital",
            element: <HospitalManagementSystem />,
          },
          {
            path: "pharmacy",
            element: <PharmacyMangementSystem />,
          },
          {
            path: "Laboratory",
            element: <LabratorymanagementSystem />,
          },
          {
            path: "bloodbank",
            element: <BloodBankManagementSystem />,
          },
          // Education
          {
            path: "collegesystem",
            element: <CollegeManagementsystem />,
          },
          {
            path: "schoolsystem",
            element: <SchoolManagementSystem />,
          },
          {
            path: "Librarysystem",
            element: <LibraryMangementSystem />,
          },
          {
            path: "hostelsystem",
            element: <HostelManagementSystem />,
          },
          {
            path: "learningManagement",
            element: <LearningManagementSystem/>
          },
          // Web based solutions
          {
            path: "eCommerce",
          element: <ECommerceWebDesign/>
          },
          {
            path: "jobPortal",
            element: <JobPortalWebDesign/>
          },
          {
            path: "jewelleryWeb",
            element: <JewelleryWebDesign/>
          },
          {
            path: "toursimWebDesign",
            element: <TourismWebDesign/>
          },
          {
            path: "corporateweb",
            element: <CorporateWebDesign/>
          },
          {
            path: "schoolWebDesign",
            element: <SchoolWebDesign/>
          },
          {
            path: "RealEstateWebDesign",
            element: <RealEstateWebDesign/>
          },
          {
            path: "constructionwebDesign",
            element: <ConstructionWebDesign/>
          },
          {
            path: "fashionWebDesign",
            element: <FashionWebDesign/>
          },
        
          
        ],
      },
      {
        path: "servicing",
        element: <Github />,
      },
    ],
  },
]);

export default router;
