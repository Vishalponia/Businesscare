// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import HeroSection from './components/Hero'
// import BusinessStrategySection from './components/Bussinessstrategies'
// import WhyEntrepreneurFail from './components/Entrepreneurship'
// import BusinessCarePossible from './components/Bussinesscarepossible'
// import BrandGrowthSection from './components/Brandgrowth'
// import Footer from './components/Footer'
// import MediaStrategySection from './components/Mediastrategies'
// import Gallery from './components/Gallery'
// import MediaPlatformSection from './components/Mediaplateform'
// import LowInvestment from './components/Lowinvestment'

// function App() {


//   return (
//     <>
//      <Navbar/>
//      <HeroSection/>
//      <BusinessStrategySection/>
//      <WhyEntrepreneurFail/>
//      <BusinessCarePossible/>
//      <BrandGrowthSection/>
//      <MediaStrategySection/>
//      <Gallery/>
//      <MediaPlatformSection/>
//      <LowInvestment/>
//      <Footer/>
//     </>
//   )
// }

// export default App





// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar'
// import HeroSection from './components/Hero'
// import BusinessStrategySection from './components/Bussinessstrategies'
// import WhyEntrepreneurFail from './components/Entrepreneurship'
// import BusinessCarePossible from './components/Bussinesscarepossible'
// import BrandGrowthSection from './components/Brandgrowth'
// import Footer from './components/Footer'
// import MediaStrategySection from './components/Mediastrategies'
// import Gallery from './components/Gallery'
// import MediaPlatformSection from './components/Mediaplateform'
// import LowInvestment from './components/Lowinvestment'
// import FormPortal from "./pages/FormPortal";
// import FormOptionsPage from "./pages/FormOptionsPage";
// import UploadForm from "./pages/UploadForm";
// // ⭐ Your new form page
// import BusinessRegistrationForm from "./components/BusinessRegistrationForm";

// function HomePage() {
//   return (
//     <>
//       <Navbar/>
//       <HeroSection/>
//       <BusinessStrategySection/>
//       <WhyEntrepreneurFail/>
//       <BusinessCarePossible/>
//       <BrandGrowthSection/>
//       <MediaStrategySection/>
//       <Gallery/>
//       <MediaPlatformSection/>
//       <LowInvestment/>
//       <Footer/>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Home Page Route */}
//         <Route path="/" element={<HomePage />} />

//         {/* ⭐ FORM PAGE ROUTE ⭐ */}
//         <Route path="/registration-form" element={<BusinessRegistrationForm />} />
//         <Route path="/form-portal" element={<FormPortal />} />
//         <Route path="/form-options" element={<FormOptionsPage />} />
//         <Route path="/upload-form" element={<UploadForm />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar'
// import HeroSection from './components/Hero'
// import BusinessStrategySection from './components/Bussinessstrategies'
// import WhyEntrepreneurFail from './components/Entrepreneurship'
// import BusinessCarePossible from './components/Bussinesscarepossible'
// import BrandGrowthSection from './components/Brandgrowth'
// import Footer from './components/Footer'
// import MediaStrategySection from './components/Mediastrategies'
// import Gallery from './components/Gallery'
// import MediaPlatformSection from './components/Mediaplateform'
// import LowInvestment from './components/Lowinvestment'

// import FormPortal from "./pages/FormPortal";
// import FormOptionsPage from "./pages/FormOptionsPage";
// import UploadForm from "./pages/UploadForm";
// import BusinessRegistrationForm from "./components/BusinessRegistrationForm";

// // ADMIN IMPORTS
// import Login from "./admin/pages/Login";
// import Dashboard from "./admin/pages/Dashboard";
// import FormsList from "./admin/pages/FormsList";
// import UploadsList from "./admin/pages/UploadsList";

// function HomePage() {
//   return (
//     <>
//       <Navbar/>
//       <HeroSection/>
//       <BusinessStrategySection/>
//       <WhyEntrepreneurFail/>
//       <BusinessCarePossible/>
//       <BrandGrowthSection/>
//       <MediaStrategySection/>
//       <Gallery/>
//       <MediaPlatformSection/>
//       <LowInvestment/>
//       <Footer/>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Home Route */}
//         <Route path="/" element={<HomePage />} />

//         {/* USER FORM ROUTES */}
//         <Route path="/registration-form" element={<BusinessRegistrationForm />} />
//         <Route path="/form-portal" element={<FormPortal />} />
//         <Route path="/form-options" element={<FormOptionsPage />} />
//         <Route path="/upload-form" element={<UploadForm />} />

//         {/* ADMIN ROUTES */}
//         <Route path="/admin" element={<Login />} />
//         <Route path="/admin/dashboard" element={<Dashboard />} />
//         <Route path="/admin/forms" element={<FormsList />} />
//         <Route path="/admin/uploads" element={<UploadsList />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

// -------------------- USER COMPONENTS --------------------
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import BusinessStrategySection from "./components/Bussinessstrategies";
import WhyEntrepreneurFail from "./components/Entrepreneurship";
import BusinessCarePossible from "./components/Bussinesscarepossible";
import BrandGrowthSection from "./components/Brandgrowth";
import Footer from "./components/Footer";
import MediaStrategySection from "./components/Mediastrategies";
import Gallery from "./components/Gallery";
import MediaPlatformSection from "./components/Mediaplateform";
import LowInvestment from "./components/Lowinvestment";

// -------------------- USER FORM PAGES --------------------
import FormPortal from "./pages/FormPortal";
import FormOptionsPage from "./pages/FormOptionsPage";
import UploadForm from "./pages/UploadForm";
import BusinessRegistrationForm from "./components/BusinessRegistrationForm";
import ContactUs from "./pages/ContactUs";
// -------------------- ADMIN PAGES --------------------
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminUpload from "./admin/AdminUpload"; // optional: for admin file upload
import AdminNavbar from "./admin/AdminNavbar"; // if you want navbar for admin pages

// -------------------- HOME PAGE WRAPPER --------------------
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BusinessStrategySection />
      <WhyEntrepreneurFail />
      <BusinessCarePossible />
      <BrandGrowthSection />
      <MediaStrategySection />
      <Gallery />
      <MediaPlatformSection />
      <LowInvestment />
      <Footer />
    </>
  );
}

// -------------------- MAIN APP --------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* -------------------- USER ROUTES -------------------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/registration-form" element={<BusinessRegistrationForm />} />
        <Route path="/form-portal" element={<FormPortal />} />
        <Route path="/form-options" element={<FormOptionsPage />} />
        <Route path="/upload-form" element={<UploadForm />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* -------------------- ADMIN ROUTES -------------------- */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/upload" element={<AdminUpload />} /> {/* optional */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
